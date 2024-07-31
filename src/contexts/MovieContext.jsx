import React, { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=38ea5e7c8561a585923cb35fd520dfa3&page=${page}`);
        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setHasMore(data.results.length > 0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    loadMovies();
  }, [page]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MovieContext.Provider value={{ movies: filteredMovies, loading, hasMore, setPage, setSearchTerm, selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
