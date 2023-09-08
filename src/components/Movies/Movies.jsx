  import React, { Component } from 'react';
import { searchMovies } from '../api';
import { Link } from 'react-router-dom';

class Movies extends Component {
  state = {
    query: '',
    searchResults: [],
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    searchMovies(this.state.query)
      .then((searchResults) => {
        this.setState({ searchResults });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    const { query, searchResults } = this.state;

    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;  

