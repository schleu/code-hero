import { iCharacter } from "../types";
import { ApiRoutes } from "./ApiRoutes";
import { Axios } from "./api";

interface iResponse<T> {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: T[];
}

export const getCharacters = async (): Promise<iResponse<iCharacter>> => {
  const response = await Axios.get(ApiRoutes.CHARACTERS, {});

  return response.data.data;
};
