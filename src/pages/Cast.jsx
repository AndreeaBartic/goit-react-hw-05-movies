import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=3ca83e755ea18295f66f10c65485a3a4`
      )
      .then(res => setActors(res.data.cast))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {actors.map(actor => {
          return (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character : {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
