import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h2>Page Not Found</h2>;
    </>
  );
};
export default PageNotFound;
