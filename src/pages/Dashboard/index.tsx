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
import "./styles.scss";
import { SearchField } from "./components/SearchField";

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
      <div className="titlePage">Busca de personagens</div>

      <SearchField
        label={"Nome do personagem"}
        onChange={handleSearch}
        defaultValue={search}
        placeholder="Search"
      />

      <div className="">
        <Cards characters={characters} />
        <Pagination
          actual={actualPage}
          total={totalOfPages}
          getActualPage={setActualPage}
        />
      </div>
    </div>
  );
};
