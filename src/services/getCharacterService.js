import http from "./httpService";

function getCharacter(id) {
  return http.get(`/character/${id}`);
}

export default getCharacter;
