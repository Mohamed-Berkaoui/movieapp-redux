import { GETMOVIESERROR, GETMOVIESLOADING, GETMOVIESSUCCES } from "./Types";

export const getMoviesSuccessAction = function (data) {
  return { type: GETMOVIESSUCCES, payload: data };
};
export const getMoviesErrorAction = function (error) {
  return { type: GETMOVIESERROR, error: error.message };
};
export const getMoviesLoadingAction = function () {
  return { type: GETMOVIESLOADING };
};

export const fetchMovies = function () {
  return function (dispatch) {
    dispatch(getMoviesLoadingAction());
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => dispatch(getMoviesSuccessAction(data)))
      .catch((e) => dispatch(getMoviesErrorAction(error)));
  };
};
