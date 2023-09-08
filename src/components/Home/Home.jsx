import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../api';

class Home extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    fetchTrendingMovies()
      .then((trendingMovies) => {
        this.setState({ trendingMovies });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;