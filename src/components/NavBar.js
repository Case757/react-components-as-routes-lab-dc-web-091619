import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
        >Home</NavLink>
        <NavLink
          to="/actors"
          exact
        >Actors</NavLink>
        <NavLink
          to="/movies"
          exact
        >Movies</NavLink>
         <NavLink
          to="/directors"
          exact
        >Directors</NavLink>
    </div>
  );
};

export default NavBar;
