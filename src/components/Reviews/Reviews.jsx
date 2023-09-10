import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api';

function Reviews() {
  const { movieId } = useParams();
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviewData(reviews);
      } catch (error) {
        console.error('Помилка під час завантаження даних коментарів:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewData.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;