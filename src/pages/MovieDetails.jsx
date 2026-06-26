import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router'

function MovieDetails() {
    const {id}=useParams()
    const navigate=useNavigate()
    const movies=useSelector(state=>state.data)

    if (!movies) return <div className='loading'><h4>Loading...</h4></div>

    const movie=movies.find(mov=>mov.id==id)

    if (!movie) return <div className='loading'><h4>Movie not found.</h4></div>

  return (
    <div className='details-page'>
        <button className='back-btn' onClick={()=>navigate(-1)}>← Back</button>
        <div className='details-card'>
            <div className='details-poster-wrapper'>
                <img src={movie.poster} alt={movie.title} className='details-poster' />
                <span className='movie-rating'>⭐ {movie.imdbRating}</span>
            </div>
            <div className='details-info'>
                <h1 className='details-title'>{movie.title}</h1>
                <div className='movie-meta'>
                    <span className='movie-year'>{movie.year}</span>
                    <span className='movie-rated'>{movie.rated}</span>
                    <span className='movie-runtime'>{movie.runtime}</span>
                </div>
                <p className='movie-genre'>{movie.genre}</p>
                <p className='details-plot'>{movie.plot}</p>
                <div className='details-extra'>
                    <p><span className='detail-label'>Director</span>{movie.director}</p>
                    {movie.boxOffice && <p><span className='detail-label'>Box Office</span>{movie.boxOffice}</p>}
                    {movie.awards && <p><span className='detail-label'>Awards</span>{movie.awards}</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails