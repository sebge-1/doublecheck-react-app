import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/projects/new"
      >
        Start a new project
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/projects"
      >
        My Projects
      </NavLink>
    </div>
  );
}

export default NavBar;
