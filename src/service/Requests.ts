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

export interface ParamsRequest {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: "name" | "modified" | "-name" | "-modified";
  limit?: number;
  offset?: number;
}

export const getCharacters = async ({
  limit = 10,
  ...params
}: ParamsRequest): Promise<iResponse<iCharacter>> => {
  const response = await Axios.get(ApiRoutes.CHARACTERS, {
    params: {
      limit,
      ...params,
    },
  });

  return response.data.data;
};
