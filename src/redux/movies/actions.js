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
    fetch("https://fooapi.com/api/movies")
      .then((res) => res.json())
      .then((data) => dispatch(getMoviesSuccessAction(data.data)))
      .catch((e) => dispatch(getMoviesErrorAction(error)));
  };
};
