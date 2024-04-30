import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2c9b844172594addaffec1e109a58956",
  },
});
