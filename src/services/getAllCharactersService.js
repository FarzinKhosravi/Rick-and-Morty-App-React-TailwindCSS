import http from "./httpService";

function getAllCharacters() {
  return http.get("/character");
}

export default getAllCharacters;
