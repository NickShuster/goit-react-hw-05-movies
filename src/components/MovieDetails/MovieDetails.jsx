import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, Outlet } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieReviews } from '../api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [castVisible, setCastVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then((movieDetails) => {
        setMovieDetails(movieDetails);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });

    if (reviewsVisible) {
      fetchMovieReviews(movieId)
        .then((reviews) => {
          setReviews(reviews);
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
    }
  }, [movieId, reviewsVisible]);

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  const toggleCastVisibility = () => {
    setCastVisible((prevState) => !prevState);
  };

  const toggleReviewsVisibility = () => {
    setReviewsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>Go Back</button>
      <h1>{movieDetails.title}</h1>
      <img src={posterUrl} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            onClick={toggleCastVisibility}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            onClick={toggleReviewsVisibility}
          >
            Reviews
          </Link>
        </li>
      </ul>

      {castVisible && <Outlet />}

     
      {reviewsVisible ? (
        reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )
      ) : null}
    </div>
  );
}

export default MovieDetails;