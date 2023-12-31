import { useEffect, useRef } from "react";
import { SadFaceIcon } from "../../../../assets";
import { iCharacter } from "../../../../types/character";
import "./styles.scss";
import { AppRoutes } from "../../../../constants/AppRoutes";

interface Props {
  characters: iCharacter[];
}

export const Cards = ({ characters }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ left: 0 });
  }, [characters]);

  return (
    <div className="cardContainerCustom" ref={ref}>
      {characters.length ? (
        characters.map((character, i) => {
          const imgSrc =
            character.thumbnail.path + "." + character.thumbnail.extension;
          return (
            <a
              href={AppRoutes.HERO_DETAIL.replace("id", String(character.id))}
              key={character.id}
            >
              <div className="card">
                <img src={imgSrc} alt="" />
                <div className="infos">
                  <p className="title">{character.name + (i + 1)}</p>

                  <p
                    className={`description ${
                      character.description ? "" : "notFound"
                    }`}
                  >
                    {character.description || "Nenhuma descrição encontrada"}
                  </p>
                </div>
              </div>
            </a>
          );
        })
      ) : (
        <div className="notFound">
          {SadFaceIcon()}
          Nenhum personagem encontrado
        </div>
      )}
    </div>
  );
};
