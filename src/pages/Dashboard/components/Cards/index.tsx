import { useEffect, useRef } from "react";
import { SadFaceIcon } from "../../../../assets";
import { iCharacter } from "../../../../types/character";
import { Card } from "./Card";
import "./styles.scss";

interface Props {
  characters: iCharacter[];
}

export const Cards = ({ characters }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ left: 0 });
  }, [characters]);

  return (
    <div className="cardsContainer" ref={ref}>
      <div className="cardsTitles">
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </div>
      {characters.length ? (
        <div className="cardsContent">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div className="cardsNotFound">
          <SadFaceIcon />
          Nenhum personagem encontrado
        </div>
      )}
    </div>
  );
};
