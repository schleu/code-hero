import { iCharacter } from "../../../../../types";
import "./styles.scss";

interface Props {
  character: iCharacter;
}
export const Card = ({ character }: Props) => {
  const imgSrc = character.thumbnail.path + "." + character.thumbnail.extension;
  return (
    <a href={`/${character.id}`} key={character.id} className="card">
      <div className="cardContant">
        <div className="info">
          <img src={imgSrc} alt="" />
          <p className="title">{character.name}</p>
        </div>

        <div className="series">
          {character.series.items.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </div>

        <div className="events">
          {character.events.items.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </div>
      </div>
    </a>
  );
};
