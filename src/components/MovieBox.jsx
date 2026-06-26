import React from "react";
import { Link } from "react-router";

function MovieBox({ movie }) {
  return (
    <div className="movie-box">
      <Link to={"/movie/"+movie.id}>
        <div className="movie-poster-wrapper">
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
          <span className="movie-rating">⭐ {movie.imdbRating}</span>
        </div>
      </Link>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-rated">{movie.rated}</span>
          <span className="movie-runtime">{movie.runtime}</span>
        </div>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-plot">{movie.plot}</p>
        <div className="movie-footer">
          <span className="movie-director">Dir: {movie.director}</span>
          {movie.boxOffice && (
            <span className="movie-box-office">{movie.boxOffice}</span>
          )}
        </div>
        {movie.awards && <p className="movie-awards">{movie.awards}</p>}
      </div>
      <button className="btn-favorite">♥ Add to Favourites</button>
    </div>
  );
}

export default MovieBox;
