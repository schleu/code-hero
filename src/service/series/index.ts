import { ApiRoutes } from "../../constants/ApiRoutes";
import { iComics } from "../../types/comics";
import { ParamsRequest, iResponse } from "../../types/Requests";
import { Axios } from "../api";

export const getSeries = async (
  params: ParamsRequest
): Promise<iResponse<iComics[]>> => {
  const { limit = 10, ...parameters } = params;

  const response = await Axios.get(ApiRoutes.SERIES, {
    params: {
      limit,
      ...parameters,
    },
  });

  return response.data.data;
};

interface getComicProps {
  id: string;
  params: ParamsRequest;
}

export const getSerie = async ({
  id,
  params,
}: getComicProps): Promise<iResponse<iComics[]>> => {
  const { limit = 10, ...parameters } = params;

  const response = await Axios.get(ApiRoutes.SERIES_BY_ID.replace("id", id), {
    params: {
      limit,
      ...parameters,
    },
  });

  return response.data.data;
};
