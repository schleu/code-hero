import { ChangeEvent, useEffect, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { TextField } from "../../components/TextField";
import {
  ParamsRequest,
  getCharacters,
  iResponse,
} from "../../service/Requests";
import { iCharacter } from "../../types";

import "./styles.scss";
import { useDebounce } from "../../hooks/useDebounce";

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
    <div className="container">
      <Header />
      <div>Busca de personagens</div>

      <TextField
        label={`Nome do personagem ${searchDebouced}`}
        onChange={handleSearch}
        defaultValue={search}
        placeholder="Search"
        iconSrc={SearchIcon}
      />

      <div>
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
