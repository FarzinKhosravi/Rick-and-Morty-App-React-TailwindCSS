import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
