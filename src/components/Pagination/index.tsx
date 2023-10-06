import { ReactNode, useEffect, useState } from "react";
import "./styles.scss";
import { ChevronLeft, ChevronRight } from "../../assets";

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
      {actualPage > 1 ? (
        <Item
          page={ChevronLeft()}
          callback={() => especificPage(previousPage)}
        />
      ) : (
        <FakeItem />
      )}
      {actualPage > 3 ? (
        <Item page={1} callback={() => especificPage(1)} />
      ) : (
        <FakeItem />
      )}

      {actualPage > 3 ? (
        <Item page={"..."} />
      ) : actualPage > 2 ? (
        <Item page={1} callback={() => especificPage(1)} />
      ) : (
        <FakeItem />
      )}

      {actualPage > 1 ? (
        <Item
          page={actualPage - 1}
          callback={() => especificPage(previousPage)}
        />
      ) : (
        <FakeItem />
      )}

      {/* Previous items */}

      <Item
        page={actualPage}
        callback={() => especificPage(actualPage)}
        isSelected={true}
      />

      {/* Next items */}

      {actualPage < total ? (
        <Item page={actualPage + 1} callback={() => especificPage(nextPage)} />
      ) : (
        <FakeItem />
      )}

      {actualPage < total - 3 ? (
        <Item page={"..."} />
      ) : actualPage < total - 2 ? (
        <Item page={total - 1} callback={() => especificPage(total - 1)} />
      ) : actualPage < total - 1 ? (
        <Item page={total} callback={() => especificPage(total)} />
      ) : (
        <FakeItem />
      )}

      {actualPage < total - 2 ? (
        <Item page={total} callback={() => especificPage(total)} />
      ) : (
        <FakeItem />
      )}

      {actualPage < total ? (
        <Item page={ChevronRight()} callback={() => especificPage(nextPage)} />
      ) : (
        <FakeItem />
      )}
    </div>
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
    className={`paginationItem ${
      isSelected ? "paginationItemSelected" : ""
    } ${className}`}
    onClick={callback}
  >
    {page}
  </div>
);

const FakeItem = () => <div className="paginationItem fakeItem">FK</div>;
