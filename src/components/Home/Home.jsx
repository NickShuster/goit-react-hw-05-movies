 import React, { Component } from 'react';
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
        <h1>Trending Movies</h1>
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;