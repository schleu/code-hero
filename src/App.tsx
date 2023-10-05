import { useState, useEffect } from "react";
import "./App.scss";
// import { getCharacters } from "./service/Requests";
import { iCharacter } from "./types";
import { mokedData } from "./service/mockedData";

// import { ReactComponent as SearchIcon } from "../src/assets/search.svg";

function App() {
  const [characters, setCharacters] = useState<iCharacter[]>(mokedData.results);

  useEffect(() => {
    const getData = async () => {
      // const characters = await getCharacters();
      // console.log(characters);
      // setCharacters(characters.results || []);
    };
    getData();
    setCharacters(mokedData.results);
  }, []);

  return (
    <div className="container">
      <div>Busca de personagens</div>

      <div className="textField">
        <label htmlFor="search">Nome do personagem</label>
        <div className="">
          <input type="text" placeholder="Search" id="search" />
          {/* <SearchIcon /> */}
        </div>
      </div>

      <div className="cardContainer">
        {characters.map((character) => {
          const imgSrc =
            character.thumbnail.path + "." + character.thumbnail.extension;
          return (
            <div className="card" key={character.id}>
              <img src={imgSrc} alt="" />
              <p className="title">{character.name}</p>
              <p>{character.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
