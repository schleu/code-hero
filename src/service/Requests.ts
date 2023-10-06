import { iCharacter } from "../types";
import { ApiRoutes } from "../constants/ApiRoutes";
import { Axios } from "./api";

export interface iResponse<T> {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: T;
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
}: ParamsRequest): Promise<iResponse<iCharacter[]>> => {
  const response = await Axios.get(ApiRoutes.CHARACTERS, {
    params: {
      limit,
      ...params,
    },
  });

  return response.data.data;
};

interface getCharacterProps {
  characterId: string;
  params: ParamsRequest;
}

export const getCharacter = async ({
  characterId,
  params,
}: getCharacterProps): Promise<iResponse<iCharacter[]>> => {
  const { limit = 10, ...restOfparams } = params;
  const response = await Axios.get(
    ApiRoutes.CHARACTER_BY_ID.replace(":id", characterId),
    {
      params: {
        limit,
        ...restOfparams,
      },
    }
  );

  return response.data.data;
};
