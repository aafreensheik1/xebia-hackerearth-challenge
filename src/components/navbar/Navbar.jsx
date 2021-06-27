import React from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';

export default function Navbar({ navItemsLeft, navItemsRight }) {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        {navItemsRight.map(({ title, url }) => (
          <li key={url}>
            <Link to={url} className="nav-item-right">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="navbar-items">
        {navItemsLeft.map(({ title, url }) => (
          <li key={url}>
            <Link
              activeClass="active"
              to={url}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
