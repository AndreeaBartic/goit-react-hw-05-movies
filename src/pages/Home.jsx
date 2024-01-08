import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const perPage = 20;
  const apiKey = '3ca83e755ea18295f66f10c65485a3a4';

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}&per_page=${perPage}`
      )
      .then(res => setTrendingMovies(res.data.results))
      .catch(error => console.log(error));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(item => (
          <Link to={`/moviesDetails/${item.id}`} key={item.id}>
            <span>{item.original_title}</span>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Home;

//Lista cu cele mai populare filme de astazi
// url= /trending/get-trending
