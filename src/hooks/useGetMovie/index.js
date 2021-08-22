import { useQuery } from "react-query";
import api from "../../services/api";

const getMovie = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

const useGetMovie = (id) => {
  return useQuery(["movie", id], () => getMovie(id), {
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export default useGetMovie;
