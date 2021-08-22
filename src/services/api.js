import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer " + process.env.REACT_APP_API_KEY;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
