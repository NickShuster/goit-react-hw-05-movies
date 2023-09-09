import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;