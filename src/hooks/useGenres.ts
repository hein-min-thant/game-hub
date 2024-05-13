import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClinet from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClinet<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
