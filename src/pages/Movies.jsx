import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputResults, setInputResults] = useState([]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?&api_key=3ca83e755ea18295f66f10c65485a3a4&query=${encodeURIComponent(
          inputValue
        )}`
      )
      .then(res => setInputResults(res.data.results))
      .catch(error => console.error(error));
  }, [inputValue]);

  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Search movies</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={inputValue}
          placeholder="Search for a movie"
        />
        <button>Search</button>
      </form>

      <ul>
        {inputResults.map(item => {
          return (
            <Link to={`/moviesDetails/${item.id}`} key={item.id}>
              <li>{item.original_title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
