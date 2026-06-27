import React, { useState } from "react"; //17
import { useSelector } from "react-redux";
import MovieBox from "../components/MovieBox";
import Filter from "../components/Filter";

function Home() {
  const [filter, setFilter] = useState({
    title: "",
    genre: "all",
  });
  const data = useSelector((state) => state.movies);
  if (data.loading) {
    return (
      <div className="loading">
        <h4>loading...</h4>
      </div>
    );
  }
  if (data.error) {
    return (
      <div className="error">
        <h5>error</h5>
      </div>
    );
  }
  return (
    <>
      <Filter setFilter={setFilter} filter={filter} />
      <div className="home-page">
        {data?.data
          ?.filter(
            (movie) =>
              movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
              (movie.genre.includes(filter.genre) || filter.genre == "all"),
          )
          .map((movie) => (
            <MovieBox movie={movie} />
          ))}
      </div>
    </>
  );
}

export default Home;
