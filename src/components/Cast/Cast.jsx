import React, { Component } from 'react';
import { fetchMovieCredits } from '../api';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieCredits(movieId)
      .then((cast) => {
        this.setState({ cast });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <h2>Cast</h2>
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;