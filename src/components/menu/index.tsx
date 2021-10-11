import React from 'react';
import {Link} from 'react-router-dom';
import Login from './loginButton';
import './menu.sass';

const Menu = () => {
  return (
    <ul id="menu">
      <li className="menu-item">
        <Link to="/">
          Home
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/submit">
          投稿
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/review">
          審核
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/posts">
          文章
        </Link>
      </li>
      <li id="login-button">
        <Login />
      </li>
    </ul>
  );
};

export default Menu;
