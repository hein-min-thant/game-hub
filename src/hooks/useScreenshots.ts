import { useQuery } from "@tanstack/react-query";
import APIClinet from "../services/api-client";
import Screenshot from "../entities/Screenshots";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClinet<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
