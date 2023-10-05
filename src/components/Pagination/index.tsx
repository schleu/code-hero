import { useEffect, useState } from "react";
import "./styles.scss";
// import { ReactComponent as ChevronLeft } from "../../assets/ChevronLeft.svg";

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

  return (
    <div className="pagination">
      {actualPage > 1 && (
        <>
          <Item page={"PREV"} callback={() => especificPage(previousPage)} />
          <Item page={1} callback={() => especificPage(1)} />

          {actualPage === 3 && (
            <Item page={2} callback={() => especificPage(2)} />
          )}

          {actualPage > 3 && (
            <>
              <Item page={"..."} />
              <Item
                page={actualPage - 1}
                callback={() => especificPage(previousPage)}
              />
            </>
          )}
        </>
      )}

      <Item
        page={actualPage}
        callback={() => especificPage(actualPage)}
        isSelected={true}
      />

      {actualPage < total && (
        <>
          <Item
            page={actualPage + 1}
            callback={() => especificPage(nextPage)}
          />
          {actualPage === total - 2 && (
            <Item page={total} callback={() => especificPage(total)} />
          )}
          {actualPage <= total - 3 && (
            <>
              <Item page={"..."} />
              <Item page={total} callback={() => especificPage(total)} />
            </>
          )}

          <div
            className="paginationItem"
            onClick={() => especificPage(nextPage)}
          >
            NEXT
          </div>
        </>
      )}
    </div>
  );
};

interface ItemProps {
  page: number | string;
  callback?: () => void;
  isSelected?: boolean;
}

const Item = ({ page, callback = () => {}, isSelected = false }: ItemProps) => (
  <div
    className={`paginationItem ${isSelected ? "paginationItemSelected" : ""}`}
    onClick={callback}
  >
    {page}
  </div>
);
