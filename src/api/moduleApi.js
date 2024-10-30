import { handleResponse, handleError } from "./apiUtils";

const URL =
  "https://code-interview-challenge-default-rtdb.firebaseio.com/modules.json";

export async function getModules() {
  return await fetch(URL).then(handleResponse).catch(handleError);
}
