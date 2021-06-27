import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './navbar.scss';

export default function Navbar({ navItemsLeft, navItemsRight }) {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        {navItemsLeft.map(({ title, url }) => (
          <li key={url}>
            <RouterLink to={url} className="nav-item-left">
              {title}
            </RouterLink>
          </li>
        ))}
      </ul>
      <ul className="navbar-items">
        {navItemsRight.map(({ title, url }) => (
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
