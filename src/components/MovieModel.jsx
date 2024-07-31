import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieModal = () => {
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  if (!selectedMovie) return null;

  return (
    <div className="modal" onClick={() => setSelectedMovie(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{selectedMovie.title}</h2>
        <img src= {`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
        <p>Release Date:  {selectedMovie.release_date}</p>
        <p>Language:  {selectedMovie.original_language}</p>
        <p>{selectedMovie.overview}</p>
        <button onClick={() => setSelectedMovie(null)}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;
