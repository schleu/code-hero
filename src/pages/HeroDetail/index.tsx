import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacter } from "../../service/Requests";
import { iCharacter } from "../../types";
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
        Voltar
      </button>
      <div className="content">
        <img src={srcImage} alt="" />
        <div className="infos">
          <h3>{character.name}</h3>
          <p>{character.description}</p>

          <div className="boards">
            <Board title="Comics" items={character.comics.items} />
            <Board title="Eventos" items={character.events.items} />
            <Board title="Histórias" items={character.stories.items} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  items: { name: string }[];
  title: string;
}
const Board = ({ items, title }: Props) => {
  return (
    <div className="table">
      <p className="title">{title}</p>
      <div className="items">
        {items.length ? (
          items.map((item) => <p className="item">{item.name}</p>)
        ) : (
          <p className="item not_found">Nenhum item encontrado.</p>
        )}
      </div>
    </div>
  );
};
