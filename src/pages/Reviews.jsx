import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=3ca83e755ea18295f66f10c65485a3a4&page=1`
      )
      .then(res => setReviews(res.data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <strong>Author: {review.author}</strong>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
