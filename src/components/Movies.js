import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
 let renderMovies = () => {
    return movies.map(movie => {
      return <div>{movie.title}
      {movie.time}
      <li>{movie.genres.map(genre => <ul>{genre}</ul>)}</li>
      </div>
    })
  }
  
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
