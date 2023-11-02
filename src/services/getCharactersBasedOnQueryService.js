import http from "./httpService";

function getCharactersBasedOnQuery(query, data) {
  return http.get(`/character/?name=${query}`, data);
}

export default getCharactersBasedOnQuery;
