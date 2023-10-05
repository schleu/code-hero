import { iCharacter } from "../../types";
import "./styles.scss";

interface Props {
  characters: iCharacter[];
}

export const Cards = ({ characters }: Props) => {
  return (
    <div className="cardContainer">
      {characters.map((character) => {
        const imgSrc =
          character.thumbnail.path + "." + character.thumbnail.extension;
        return (
          <a href={`/${character.id}`} key={character.id}>
            <div className="card">
              <img src={imgSrc} alt="" />
              <p className="title">{character.name}</p>
              <p className="description">{character.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};
