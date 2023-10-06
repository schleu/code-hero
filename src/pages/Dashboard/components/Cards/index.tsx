import { iCharacter } from "../../../../types";
import "./styles.scss";

interface Props {
  characters: iCharacter[];
}

export const Cards = ({ characters }: Props) => {
  return (
    <div className="cardContainer">
      {characters.map((character, i) => {
        const imgSrc =
          character.thumbnail.path + "." + character.thumbnail.extension;
        return (
          <a href={`/${character.id}`} key={character.id}>
            <div className="card">
              <img src={imgSrc} alt="" />
              <div className="infos">
                <p className="title">{character.name + (i + 1)}</p>

                <p
                  className={`description ${
                    character.description ? "" : "notFound"
                  }`}
                >
                  {character.description || "Nenhuma descrição"}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
