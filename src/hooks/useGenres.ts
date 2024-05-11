import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClinet from "../services/api-client";
import ms from "ms";

const apiClient = new APIClinet<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
