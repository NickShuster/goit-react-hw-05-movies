import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchedOnce, setSearchedOnce] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setSearchResults([]);
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
      setSearchedOnce(true);


      localStorage.setItem('searchResults', JSON.stringify(results));
    } catch (error) {
      console.error('Помилка під час пошуку фільмів:', error);
    }
  };

  useEffect(() => {


    const savedSearchResults = JSON.parse(localStorage.getItem('searchResults'));
    if (savedSearchResults && savedSearchResults.length > 0) {
      setSearchResults(savedSearchResults);
      setSearchedOnce(true);
    }
  }, []);

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
      {searchedOnce && searchResults.length > 0 && (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}?fromMovies=true`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;