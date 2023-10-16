import { useEffect, useState } from "react";
import { ChevronRight } from "../../assets";
import { PaginationFull } from "../../components/Paginations/PaginationFull";
import { cacheRequest } from "../../hooks/cacheRequest";
import { getComics } from "../../service";
import { iComics, iResponse } from "../../types";
import "./styles.scss";

export function ComicsPage() {
  const [data, setData] = useState<iComics[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const data = await cacheRequest<iResponse<iComics[]>>(["comics"], () =>
        getComics({})
      );
      setTotal(data.total);
      setData(data.results);
    }

    getData();
  }, []);

  // console.log("iComics", data);
  return (
    <div className="comicsPage">
      <div className="items">
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <PaginationFull actual={1} getActualPage={() => {}} totalItems={total} />
    </div>
  );
}

const Item = ({ item }: { item: iComics }) => {
  const [hide, setHide] = useState(true);
  const src = item.thumbnail.path + "." + item.thumbnail.extension;

  return (
    <div key={item.id} className="item">
      <div
        className={`menuTitle ${hide ? "" : "rotate"}`}
        onClick={() => setHide((e) => !e)}
      >
        {item.title} {<ChevronRight />}
      </div>
      <div className={`container ${hide ? "hidden" : ""}`}>
        <div className={`content`}>
          <div style={{ width: "100px" }}>
            <img src={src} alt="" />
          </div>

          <div className="title">{item.title}</div>
        </div>
      </div>
    </div>
  );
};
