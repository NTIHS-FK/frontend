import React from 'react';
import {Link} from 'react-router-dom';
import './menu.sass';

const Menu = () => {
  return (
    <ul id="menu">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/submit">
          投稿
        </Link>
      </li>
      <li>
        <Link to="/review">
          審核
        </Link>
      </li>
      <li>
        <Link to="/posts">
          文章
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
