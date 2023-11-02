import http from "./httpService";

function getEpisodesList(data) {
  return http.get(`/episode/${data.slice(0, 3)}`);
}

export default getEpisodesList;
