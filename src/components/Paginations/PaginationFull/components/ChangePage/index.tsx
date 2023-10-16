import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../../../../../assets";

interface Props {
  page: number;
  totalOfPages: number;
  previousPage: () => void;
  nextPage: () => void;
  handlePage: (n: number) => void;
}

export function ChangePage({
  page,
  totalOfPages,
  previousPage,
  nextPage,
  handlePage,
}: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="paginationChangePage">
      <div className="selection">
        <div className="" onClick={() => setShow((e) => !e)}>
          <p>Página</p>
          {page}
        </div>
        <div className={`options ${show ? "showOptions" : ""}`}>
          {Array(totalOfPages)
            .fill("")
            .map((_, i) => (
              <div key={i} className="option" onClick={() => handlePage(i + 1)}>
                {i + 1}
              </div>
            ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={previousPage}>
          <ChevronLeft />
        </button>
        <button onClick={nextPage}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
