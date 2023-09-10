import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits, fetchActorImages } from '../api';

function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        const promises = cast.map(async (actor) => {
          try {
            const actorImages = await fetchActorImages(actor.id);
            return { ...actor, images: actorImages };
          } catch (error) {
            console.error('Помилка під час завантаження фотографій актора:', error);
            return actor; 
          }
        });
        const castWithImages = await Promise.all(promises);
        setCastData(castWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Помилка під час завантаження даних акторів:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {castData.map((actor) => (
          <li key={actor.id}>
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
            {actor.images && actor.images.length > 0 && (
              <div>
                <img src={`https://image.tmdb.org/t/p/w200/${actor.images[0].file_path}`} alt={actor.name} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;