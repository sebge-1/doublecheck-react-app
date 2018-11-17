import React from 'react';
import '../stylesheets/NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className='nav-bar'>
      <NavLink
        className='link'
        to="/"
      >
        Home
      </NavLink>

      <div className="vl"></div>
      <NavLink
        className='link'
        to="/projects/new"
      >
        Start a new project
      </NavLink>

      <div className="vl"></div>
      <NavLink
        className='link'
        to="/projects"
      >
        My Projects
      </NavLink>
    </div>
  );
}

export default NavBar;
