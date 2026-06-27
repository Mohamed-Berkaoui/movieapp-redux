import { useEffect } from "react";

import Styles from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  fetchMovies,
  getMoviesErrorAction,
  getMoviesLoadingAction,
  getMoviesSuccessAction,
} from "./redux/movies/actions";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";
import MovieDetails from "./pages/MovieDetails";
import { ToastContainer } from "react-toastify";
function App() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(fetchMovies())
  }, []);
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorits" element={<Favorits />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>
    </>
  );
}

export default App;
