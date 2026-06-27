import { toast } from "react-toastify";
import { ADDTOFAVORITES, REMOVEFROMFAVORITES } from "./types";

function favoritesReducer(state = [], action) {
  switch (action.type) {
    case ADDTOFAVORITES: {
      const existMovie = state.find((movie) => movie.id == action.payload.id);
      if (existMovie) {
        toast.info("already in favorites")
        return state;
      }
      toast.success('movie added to favorites')
      return [...state, action.payload];
    }
    case REMOVEFROMFAVORITES:
      return state.filter((movie) => movie.id != action.payload.id);
  }

  return state;
}
export default favoritesReducer