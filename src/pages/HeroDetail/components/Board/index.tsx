import { ReactNode, useState } from "react";
import { item } from "../../../../types";
import { BoardItem } from "./BoardItem";
import "./styles.scss";
import { ChevronRight } from "../../../../assets";

interface Props {
  items: item[];
  title: string;
  titleIcon: ReactNode;
  isOpen?: boolean;
}
export const Board = ({ items, title, titleIcon, isOpen = false }: Props) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="table">
      <div className="title" onClick={() => setOpen((e) => !e)}>
        <p>
          <span>{titleIcon}</span>
          {title}
        </p>
        <span className={`${open ? "open" : "hide"}`}>{<ChevronRight />}</span>
      </div>

      <div className={`items ${open ? "" : "hide"}`}>
        {items.length ? (
          items.map((item) => (
            <BoardItem
              key={item.name}
              name={item.name}
              resourceURI={item.resourceURI}
            />
          ))
        ) : (
          <p className="item not_found">Nenhum item encontrado.</p>
        )}
      </div>
    </div>
  );
};
