import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieCard = ({ movie }) => {
  const { setSelectedMovie } = useContext(MovieContext);

  return (
    <div className="movie-card" onClick={() => setSelectedMovie(movie)}>
      <div className='image'>
        <img src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className='info'>
        <div className='info-top'>
          <h3>{movie.title}</h3>
          <p>Rating {movie.vote_average.toFixed(2)}</p>
        </div>
        <div className='info-bottom'>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
