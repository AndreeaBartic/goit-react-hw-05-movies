import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/goit-react-hw-05-movies/">Home</NavLink>
      <NavLink to="/goit-react-hw-05-movies/movies">Movies</NavLink>
    </nav>
  );
};
export default Navbar;
