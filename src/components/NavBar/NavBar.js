import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-nav">

      <div className="collapse navbar-collapse" id="navlist">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/MoodDiary"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Mood diary
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Resources"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Resources
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
