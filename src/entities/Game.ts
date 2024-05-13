import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
}
