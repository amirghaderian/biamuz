import axios from "axios";

const api = axios.create({
  baseURL: "https://api.langeek.co/",
});
export default api;
