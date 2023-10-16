import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "../../../../../assets";
import "./styles.scss";

interface Props {
  perPage: number[];
  getPerPage: (e: number) => void;
  label?: string;
  direction?: "up" | "down";
}

export function PerPage({
  perPage,
  getPerPage,
  label = "Exibir:",
  direction = "down",
}: Props) {
  const [actual, setActual] = useState(perPage[0]);
  const [open, setOpen] = useState(false);

  const labelRef = useRef<HTMLParagraphElement>(null);
  const optionsRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (labelRef.current !== null && optionsRef.current !== null) {
      const w = labelRef.current.offsetWidth + 8;
      optionsRef.current.style.left = `${w}px`;
    }
  }, [labelRef]);

  const handlePerPage = (e: number) => {
    setActual(e);
    getPerPage(e);
    setOpen(false);
  };

  return (
    <div className="perPageContainer">
      <div
        className={`actualPerPage ${open ? "rotate" : ""}`}
        onClick={() => setOpen((e) => !e)}
      >
        <p ref={labelRef}>{label}</p> {actual} <ChevronRight />
      </div>
      <div
        ref={optionsRef}
        className={`options ${open ? "showOptions" : ""} ${
          direction == "up" ? "optionsUpper" : ""
        }`}
      >
        {perPage.map((e) => (
          <div className="option" key={e} onClick={() => handlePerPage(e)}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
