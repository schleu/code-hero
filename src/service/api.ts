import axios from "axios";

import { Md5 } from "ts-md5";

const baseURl = process.env.VITE_APP_MARVEL_URL || "";
const apiKey = process.env.VITE_APP_MARVEL_PUBLIC_KEY || "";
const apiPrivateKey = process.env.VITE_APP_MARVEL_PRIVATE_KEY || "";
const ts = 1;
const hash = Md5.hashStr(ts + apiPrivateKey + apiKey);

export const Axios = axios.create({
  baseURL: baseURl,
  params: {
    ts: ts,
    apikey: apiKey,
    hash: hash,
  },
});
