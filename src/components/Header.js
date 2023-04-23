import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Pokedex</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/pokemon">Pokemon List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
