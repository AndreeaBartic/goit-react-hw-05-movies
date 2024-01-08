import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=3ca83e755ea18295f66f10c65485a3a4`
      )
      .then(res => setMovieDetails(res.data))
      .catch(error => console.log(error));
  }, [movieId]);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt=""
      />
      <h1>{movieDetails.original_title}</h1>
      <p>User score: {movieDetails.vote_average}</p>
      <h2>Overviews</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      {movieDetails.genres ? (
        <div>
          <ul>
            {movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <nav>
        <p>Aditional information</p>
        <Link to={`/moviesDetails/${movieId}/cast`}>Cast</Link>
        <Link to={`/moviesDetails/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
