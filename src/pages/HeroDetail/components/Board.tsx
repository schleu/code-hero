import { ReactNode } from "react";

interface Props {
  items: { name: string }[];
  title: string;
  titleIcon: ReactNode;
}
export const Board = ({ items, title, titleIcon }: Props) => {
  return (
    <div className="table">
      <p className="title">
        <span>{titleIcon}</span>
        {title}
      </p>
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
