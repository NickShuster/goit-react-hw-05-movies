import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./components/Home/Home'));
const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path={`/movies/:movieId/*`} element={<MovieDetails />}>
              <Route index element={<MovieDetails />} />
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
          <Outlet />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;