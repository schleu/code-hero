import { ApiRoutes } from "../../constants/ApiRoutes";
import { ParamsRequest, iResponse } from "../../types";
import { iCharacter } from "../../types/character";
import { Axios } from "../api";

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
