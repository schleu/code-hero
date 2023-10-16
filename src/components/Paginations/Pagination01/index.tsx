import { ReactNode, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDoubleLeft,
  ChevronDoubleRight,
} from "../../../assets";
import "./styles.scss";

interface Props {
  total: number;
  actual: number;
  getActualPage: (e: number) => void;
  isLoading?: boolean;
}

export const Pagination = ({ actual, total, getActualPage }: Props) => {
  const [actualPage, setActualPage] = useState(1);
  useEffect(() => setActualPage(actual), [actual]);

  const especificPage = (page: number) => {
    const actualPage = page < 2 ? 1 : page >= total ? total : page;

    setActualPage(actualPage);
    getActualPage(actualPage);
  };

  const previousPage = actualPage - 1;
  const nextPage = actualPage + 1;

  const getButtonValue = (n: number, maxItens: number) => {
    const media = actualPage / maxItens;

    const sum = maxItens * Math.floor(media - 0.1);

    return n + sum;
  };

  function getButtons(quantityButtons: number) {
    return Array(quantityButtons)
      .fill(null)
      .map((_, i) => {
        return getButtonValue(i + 1, quantityButtons);
      });
  }

  const buttons = getButtons(5);

  return (
    <>
      <div className="pagination">
        {actualPage > 2 ? (
          <Item
            page={<ChevronDoubleLeft />}
            callback={() => especificPage(1)}
          />
        ) : (
          <FakeItem />
        )}

        {actualPage > 1 ? (
          <Item
            page={<ChevronLeft />}
            callback={() => especificPage(previousPage)}
          />
        ) : (
          <FakeItem />
        )}

        {buttons.map((button) =>
          button > total ? (
            <FakeItem key={button} />
          ) : (
            <Item
              key={button}
              page={button}
              callback={() => especificPage(button)}
              isSelected={button === actualPage}
              className="paginationNumber"
            />
          )
        )}

        {actualPage <= total - 1 ? (
          <Item
            page={<ChevronRight />}
            callback={() => especificPage(nextPage)}
          />
        ) : (
          <FakeItem />
        )}
        {actualPage < total ? (
          <Item
            page={<ChevronDoubleRight />}
            callback={() => especificPage(total)}
          />
        ) : (
          <FakeItem />
        )}
      </div>
    </>
  );
};

interface ItemProps {
  page: ReactNode;
  callback?: () => void;
  isSelected?: boolean;
  className?: string;
}

const Item = ({
  page,
  callback = () => {},
  isSelected = false,
  className = "",
}: ItemProps) => (
  <div
    data-testid={className || "paginationItem"}
    className={`paginationItem ${
      isSelected ? "paginationItemSelected" : ""
    } ${className} ${page === 0 ? "fakeItem" : ""}`}
    onClick={callback}
  >
    {page}
  </div>
);

const FakeItem = () => (
  <div data-testid="fakeItem" className="paginationItem fakeItem" />
);
