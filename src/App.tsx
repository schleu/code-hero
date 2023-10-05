import { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
// import { getCharacters } from "./service/Requests";
// import { ParamsRequest } from "./service/Requests";
import { Pagination } from "./components/Pagination";
import { mokedData } from "./service/mockedData";
import { iCharacter } from "./types";
import { Cards } from "./components/Cards";
import { TextField } from "./components/TextField";
import { Header } from "./components/Header";

// import { ReactComponent as SearchIcon } from "../src/assets/search.svg";

function App() {
  const [characters, setCharacters] = useState<iCharacter[]>([]);

  const [totalPage, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const itensPerPage = 10;

  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      // const params: ParamsRequest = {
      //   nameStartsWith: search,
      // };
      // const characters = await getCharacters(params);
      // console.log(characters);
      // setCharacters(characters.results || []);
    };
    getData();

    const totalPage = Math.ceil(mokedData.total / itensPerPage);

    setTotalPages(totalPage);
    setCharacters(mokedData.results);
  }, [actualPage, search]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <div className="container">
      <Header />
      <div>Busca de personagens</div>

      <TextField
        label={`Nome do personagem`}
        onChange={handleSearch}
        defaultValue={search}
      />

      <div>
        <Cards characters={characters} />
        <Pagination
          actual={actualPage}
          total={totalPage}
          getActualPage={setActualPage}
        />
      </div>
    </div>
  );
}

export default App;
