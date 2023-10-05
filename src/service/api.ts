import axios from "axios";
import md5 from "md5";

const baseURl = process.env.VITE_APP_MARVEL_URL || "";
const apiKey = process.env.VITE_APP_MARVEL_PUBLIC_KEY || "";
const apiPrivateKey = process.env.VITE_APP_MARVEL_PRIVATE_KEY || "";
const ts = 1;
const hash = md5(ts + apiPrivateKey + apiKey);

export const Axios = axios.create({
  baseURL: baseURl,
  params: {
    ts: ts,
    apikey: apiKey,
    hash: hash,
  },
});
