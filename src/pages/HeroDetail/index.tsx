import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BookIcon,
  CalendarIcon,
  ChevronLeft,
  Star,
  Television,
} from "../../assets";
import { getCharacter } from "../../service";
import { iCharacter } from "../../types/character";
import { Board } from "./components/Board";
import "./styles.scss";

export const HeroDetailPage = () => {
  const [character, setCharacter] = useState<iCharacter>({
    thumbnail: {
      extension: "",
      path: "",
    },
    comics: {
      available: 0,
      returned: 0,
      collectionURI: "",
      items: [{ resourceURI: "", name: "" }],
    },
  } as iCharacter);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      if (typeof id === "string") {
        const response = await getCharacter({ characterId: id, params: {} });

        setCharacter(response.results[0]);
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  const srcImage =
    character.thumbnail.path + "." + character.thumbnail.extension;

  return isLoading ? (
    <></>
  ) : (
    <div className="containerHeroDetail">
      <button className="backButton" onClick={() => navigate(-1)}>
        {ChevronLeft()}
        Voltar
      </button>

      <div className="content">
        <img src={srcImage} alt="" width={"100%"} />
        <div className="infos">
          <h3>{character.name}</h3>
          <p className="description">
            {character.description || "Sem descrição"}
          </p>

          <div className="boards">
            <Board
              title="Comics"
              items={character.comics.items}
              titleIcon={<BookIcon />}
              isOpen={true}
            />

            <Board
              title="Histórias"
              items={character.stories.items}
              titleIcon={<Star />}
            />

            <Board
              title="Séries"
              items={character.series.items}
              titleIcon={Television}
            />

            <Board
              title="Eventos"
              items={character.events.items}
              titleIcon={<CalendarIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
