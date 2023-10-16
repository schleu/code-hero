import { useEffect, useState } from "react";
import { Axios } from "../../../../service/api";
import { thumbnail } from "../../../../types";
import imgDefault from "../../../../assets/imgDefault.jpg";
import { cacheRequest } from "../../../../hooks/cacheRequest";

interface Props {
  name: string;
  resourceURI: string;
}
export function BoardItem({ name, resourceURI }: Props) {
  const [image, setImage] = useState(imgDefault);

  useEffect(() => {
    const getImage = async () => {
      const resp = await cacheRequest<any>([resourceURI], () =>
        Axios({
          baseURL: resourceURI,
          method: "GET",
        })
      );

      const result = resp?.data?.data.results[0];
      const images = result?.images ? result.images[0] : "";
      const thumbnail = result?.thumbnail !== null ? result.thumbnail : "";

      const img = (images || thumbnail) as thumbnail | null;

      if (
        img !== null &&
        img.path !== undefined &&
        img.extension !== undefined
      ) {
        setImage(img.path + "." + img.extension);
      }
    };

    getImage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceURI]);

  return (
    <div className="item">
      <img src={image || imgDefault} alt="" />
      <p className="item">{name}</p>
    </div>
  );
}
