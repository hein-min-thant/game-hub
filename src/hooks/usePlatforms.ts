import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClinet from "../services/api-client";
import ms from "ms";

const apiClient = new APIClinet<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
