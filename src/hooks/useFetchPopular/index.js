import { useQuery } from "react-query";
import api from "../../services/api";

const fetchPopular = async (page) => {
  const response = await api.get(`/movie/popular?page=${page}`);
  return response.data;
};

const useFetchPopular = (page) => {
  return useQuery(["popular", page], () => fetchPopular(page), {
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export default useFetchPopular;
