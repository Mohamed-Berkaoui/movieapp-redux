import { applyMiddleware, createStore } from "redux";
import moviesReducer from "./movies/reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const store=createStore(moviesReducer,applyMiddleware(thunk,logger))
export default store