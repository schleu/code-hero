import { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { TextField } from "./components/TextField";
import { ParamsRequest, getCharacters } from "./service/Requests";
import { iCharacter } from "./types";

// import { ReactComponent as SearchIcon } from "../src/assets/search.svg";

function App() {
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalOfPages, setTotalOfPages] = useState(1);

  const itensPerPage = 10;
  const offset = itensPerPage * (actualPage - 1);

  useEffect(() => {
    const getData = async () => {
      const params: ParamsRequest = {
        limit: itensPerPage,
        offset,
      };
      if (search) params.nameStartsWith = search;
      const characters = await getCharacters(params);
      const totalOfPages = Math.ceil(characters.total / itensPerPage);

      setTotalOfPages(totalOfPages);
      setCharacters(characters.results);
    };

    getData();
  }, [offset, search]);

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
        label={`Nome do personagem`}
        onChange={handleSearch}
        defaultValue={search}
        placeholder="Search"
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
}

export default App;
