import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api';
import { Link } from 'react-router-dom';

function Movies() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults'));
    if (storedSearchResults) {
      setSearchResults(storedSearchResults);
    }
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchMovies(query)
      .then((results) => {
        localStorage.setItem('searchResults', JSON.stringify(results));
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;