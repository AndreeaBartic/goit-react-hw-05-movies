import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from './pages/Home';
import PageNotFound from 'pages/PageNotFound';

const Movies = React.lazy(() => import('./pages/Movies'));
const MoviesDetails = React.lazy(() => import('./pages/MoviesDetails'));
const Cast = React.lazy(() => import('./pages/Cast'));
const Reviews = React.lazy(() => import('./pages/Reviews'));

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route
            path="goit-react-hw-05-movies/movies"
            element={
              <Suspense>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="moviesDetails/:movieId"
            element={
              <Suspense fallback="Loading...">
                <MoviesDetails />
              </Suspense>
            }
          >
            {/* <Route index element={ } /> */}
            <Route
              path="cast"
              element={
                <Suspense fallback="Loading...">
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback="Loading...">
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
