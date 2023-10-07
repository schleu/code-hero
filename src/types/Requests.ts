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
