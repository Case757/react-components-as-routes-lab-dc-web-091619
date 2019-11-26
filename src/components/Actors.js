import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let renderActors = () => {
    return actors.map(actor => {
      return <div>
      {actor.name}
      <li>{actor.movies.map(movie => <ul>{movie}</ul>)}</li>
      </div>
       })
    }
    
  
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
