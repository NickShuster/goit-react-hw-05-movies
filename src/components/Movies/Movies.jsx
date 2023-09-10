import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Помилка під час завантаження популярних фільмів:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Помилка під час пошуку фільмів:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.length > 0
          ? searchResults.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}?fromMovies=true`}>
                  {movie.title}
                </Link>
              </li>
            ))
          : movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}?fromMovies=true`}>
                  {movie.title}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Movies;