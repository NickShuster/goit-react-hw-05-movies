import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';

function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCastData(cast);
      } catch (error) {
        console.error('Помилка під час завантаження даних акторів:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {castData.map((actor) => (
          <li key={actor.id}>
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;