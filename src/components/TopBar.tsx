import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/articles/new" className="nav-link">
              <i className="ion-compose"></i>
              &nbsp; New Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link">
              <i className="ion-gear-a"></i>
              &nbsp; Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;