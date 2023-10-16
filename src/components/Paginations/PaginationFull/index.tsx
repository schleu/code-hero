import { useState } from "react";
import { PerPage } from "./components/PerPage";
import "./styles.scss";
import { ChangePage } from "./components/ChangePage";

interface Props {
  actual: number;
  totalItems: number;
  isLoading?: boolean;
  getActualPage: (e: number) => void;
}

export function PaginationFull({ totalItems, getActualPage }: Props) {
  const optionsPerPage = [10, 20, 30];

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(optionsPerPage[0]);

  const total = Math.ceil(totalItems / perPage);

  const handlePage = (e: number) => {
    const actual = e > 0 && e <= total ? e : page;
    setPage(actual);
    getActualPage(actual);
  };

  const handlePerPage = (e: number) => {
    setPerPage(e);
  };

  const nextPage = () => handlePage(page + 1);
  const previousPage = () => handlePage(page - 1);

  return (
    <div className="PaginationFullContainer">
      <PerPage
        label="Por página:"
        direction="up"
        perPage={optionsPerPage}
        getPerPage={handlePerPage}
      />
      <div className="paginationPage">
        <p>Pagina:</p> {page} de {total}
      </div>

      <div className="paginationItens">
        <p>Itens:</p>
        {perPage * page} de {total * perPage}
      </div>

      <ChangePage
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
        totalOfPages={50}
        handlePage={handlePage}
      />
    </div>
  );
}
