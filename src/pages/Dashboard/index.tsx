import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { getCharacters } from "../../service";
import { ParamsRequest, iResponse } from "../../types";
import { iCharacter } from "../../types/character";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";

import "./styles.scss";
import { cacheRequest } from "../../hooks/cacheRequest";
import { Pagination } from "../../components/Paginations/Pagination01";

export const DashboardPage = () => {
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalOfPages, setTotalOfPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const searchDebouced = useDebounce(() => search, 300)();
  const actualPageDebouced = useDebounce(() => actualPage, 300)();
  const itensPerPage = 10;
  const offset = itensPerPage * (actualPageDebouced - 1);

  useEffect(() => {
    setIsLoading(true);
    const params: ParamsRequest = {
      limit: itensPerPage,
      offset,
    };

    if (search) params.nameStartsWith = search;

    const getData = async () => {
      const data = await cacheRequest<iResponse<iCharacter[]>>(
        ["characters", offset, search],
        () => getCharacters(params)
      );

      const totalOfPages = Math.ceil(data.total / itensPerPage);

      setTotalOfPages(totalOfPages);
      setCharacters(data.results);
      setIsLoading(false);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, searchDebouced]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setActualPage(1);
    setSearch(search);
  };

  return isLoading ? (
    <>Carregando...</>
  ) : (
    <div className="dashboardPage">
      <Header />
      <div className="dashboardContainer">
        <div className="titlePage">Busca de personagens</div>

        <SearchField
          label="Nome do personagem"
          onChange={handleSearch}
          defaultValue={search}
          placeholder="Search"
        />

        <Cards characters={characters} />
      </div>
      <div className="footer">
        {characters.length > 0 && (
          <Pagination
            actual={actualPage}
            total={totalOfPages}
            getActualPage={setActualPage}
          />
        )}
      </div>
    </div>
  );
};
