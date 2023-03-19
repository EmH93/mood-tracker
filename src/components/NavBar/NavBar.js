import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-inverse custom-nav">
        <div className="navbar-header">
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navlist" aria-controls="navlist" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
        </div>

       <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navlist">
        <ul className="navbar-nav mx-auto">
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
