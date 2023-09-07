import React, { Component, lazy, Suspense } from 'react';
import { fetchMovieDetails } from '../api';
import { Link, Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('../Cast/Cast.jsx'));
const Reviews = lazy(() => import('../Reviews/Reviews.jsx'));

class MovieDetails extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieDetails(movieId)
      .then((movieDetails) => {
        this.setState({ movieDetails });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { movieDetails } = this.state;
    const { match } = this.props;

    return (
      <div>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <ul>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={`${match.path}/cast`} element={<Cast />} />
            <Route path={`${match.path}/reviews`} element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default MovieDetails;