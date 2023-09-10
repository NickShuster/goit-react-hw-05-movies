import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieReviews} from '../api';

function MovieDetails({ clearSearch }) {
  const { movieId } = useParams();
  const { search } = useLocation();
  const fromMovies = new URLSearchParams(search).get('fromMovies');
  const [movieDetails, setMovieDetails] = useState({});
  const [castVisible, setCastVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clearSearch();

    const fetchData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovieDetails(movieData);

        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Помилка під час завантаження даних:', error);
      }
    };

    fetchData();
  }, [movieId, clearSearch]);

  const posterUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : '';

  const goBack = () => {
    if (fromMovies === 'true') {
      navigate('/movies');
    } else {
      navigate('/');
    }
  };

  const toggleCastVisibility = () => {
    setCastVisible((prevState) => !prevState);
    setReviewsVisible(false);
  };

  const toggleReviewsVisibility = () => {
    setReviewsVisible((prevState) => !prevState);
    setCastVisible(false);
  };

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <h1>{movieDetails.title}</h1>
      {posterUrl && <img src={posterUrl} alt={movieDetails.title} />}
      <p>{movieDetails.overview}</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast?fromMovies=${fromMovies}`} onClick={toggleCastVisibility}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews?fromMovies=${fromMovies}`} onClick={toggleReviewsVisibility}>
            Reviews
          </Link>
        </li>
      </ul>

      {castVisible && <Outlet />}

      {reviewsVisible && (
        <div>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;