import { ChangeEvent, useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { Pagination } from "../../components/Pagination";

import {
  ParamsRequest,
  getCharacters,
  iResponse,
} from "../../service/Requests";
import { iCharacter } from "../../types";

import { useDebounce } from "../../hooks/useDebounce";
import { SearchField } from "./components/SearchField";
import "./styles.scss";

export const DashboardPage = () => {
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalOfPages, setTotalOfPages] = useState(1);

  const itensPerPage = 10;
  const offset = itensPerPage * (actualPage - 1);

  const searchDebouced = useDebounce(() => search, 300)();

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
      <div className="titlePage">Descubra esse universo incrível!</div>

      <SearchField
        label="Qual personagem deseja encontrar?"
        onChange={handleSearch}
        defaultValue={search}
        placeholder="Digite aqui o nome de seu personagem"
      />

      <div className="">
        <Cards characters={characters} />

        {characters.length > 0 && (
          <Pagination
            actual={actualPage}
            total={totalOfPages}
            getActualPage={setActualPage}
          />
        )}
        <Pagination actual={6} total={10} getActualPage={setActualPage} />
      </div>
    </div>
  );
};
