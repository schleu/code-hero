import { ChangeEvent, useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { iCharacter } from "../../types/character";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchField } from "./components/SearchField";
import { ParamsRequest, iResponse } from "../../types";
import { getCharacters } from "../../service";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";

import "./styles.scss";

export const DashboardPage = () => {
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalOfPages, setTotalOfPages] = useState(1);

  const searchDebouced = useDebounce(() => search, 300)();
  const actualPageDebouced = useDebounce(() => actualPage, 300)();

  const itensPerPage = 10;
  const offset = itensPerPage * (actualPageDebouced - 1);

  useEffect(() => {
    const getData = async () => {
      const params: ParamsRequest = {
        limit: itensPerPage,
        offset,
      };
      if (search) params.nameStartsWith = search;

      const characters: iResponse<iCharacter[]> = await getCharacters(params);
      const totalOfPages = Math.ceil(characters.total / itensPerPage);

      setTotalOfPages(totalOfPages);
      setCharacters(characters.results);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, searchDebouced]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setActualPage(1);
    setSearch(search);
  };

  return (
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
