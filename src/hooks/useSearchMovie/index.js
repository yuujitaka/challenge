import { useQuery } from "react-query";
import api from "../../services/api";

const searchMovie = async (query) => {
  const response = await api.get(`/search/movie?query=${query}`);
  return response.data;
};

const useSearchMovie = (query) => {
  return useQuery(["search", query], () => searchMovie(query), {
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!query,
  });
};

export default useSearchMovie;
