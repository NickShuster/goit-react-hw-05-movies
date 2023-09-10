// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { fetchTrendingMovies, searchMovies } from '../api';

// function Movies() {
//   const [movies, setMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const trendingMovies = await fetchTrendingMovies();
//         setMovies(trendingMovies);
//       } catch (error) {
//         console.error('Помилка під час завантаження популярних фільмів:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const results = await searchMovies(searchQuery);
//       setSearchResults(results);
//     } catch (error) {
//       console.error('Помилка під час пошуку фільмів:', error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search for movies..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <ul>
//         {searchResults.length > 0
//           ? searchResults.map((movie) => (
//               <li key={movie.id}>
//                 <Link to={`/movies/${movie.id}?fromMovies=true`}>
//                   {movie.title}
//                 </Link>
//               </li>
//             ))
//           : movies.map((movie) => (
//               <li key={movie.id}>
//                 <Link to={`/movies/${movie.id}?fromMovies=true`}>
//                   {movie.title}
//                 </Link>
//               </li>
//             ))}
//       </ul>
//     </div>
//   );
// }

// export default Movies;









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
      // Очищаємо searchResults перед відправленням нового запиту
      setSearchResults([]);
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
      setSearchedOnce(true);

      // Зберігаємо результати пошуку в локальному сховищі браузера
      localStorage.setItem('searchResults', JSON.stringify(results));
    } catch (error) {
      console.error('Помилка під час пошуку фільмів:', error);
    }
  };

  useEffect(() => {
    // Отримати результати пошуку з локального сховища браузера під час завантаження сторінки
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