import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let renderDirectors = () => {
    return directors.map(director => {
      return <div>
      {director.name}
      <li>{director.movies.map(movie => <ul>{movie}</ul>)}</li>
      </div>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
