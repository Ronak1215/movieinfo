import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const SearchBar = () => {
  const { setSearchTerm } = useContext(MovieContext);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
