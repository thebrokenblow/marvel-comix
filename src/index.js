import "regenerator-runtime/runtime";

import { API_URL, URL_COMICS } from "./constants/api-key";
import {  marvelComixAPI } from "./utils/MarvelComixAPI";

(async () => {
  const data = await marvelComixAPI.getData(API_URL + URL_COMICS);
  console.log(data);
})();
