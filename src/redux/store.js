import { applyMiddleware, combineReducers, createStore } from "redux";
import moviesReducer from "./movies/reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import favoritesReducer from "./favorites/reducer";

const reducer=combineReducers({movies:moviesReducer,favorites:favoritesReducer})

const store=createStore(reducer,applyMiddleware(thunk,logger)) //{movies,favrites}
export default store