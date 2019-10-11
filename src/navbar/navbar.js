import React from 'react';

import Link from '../components/router-link/router-link';
import Menu from './menu-container';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Twitter } from './assets/twitter-square.svg';

import './navbar.css';

const links = [
  { route: '/facilities/', text: 'Facilities' },
  { route: '/resources/', text: 'Resources' },
  { route: '/publications/', text: 'Publications' },
  { route: '/news/', text: 'News' },
  { route: '/about/', text: 'About' },
];

const Navbar = () => (
  <nav className="navbar">
    <span className="navbar__left">
      <Link className="navbar__home" to="/" type="link">
        <Logo />
      </Link>
      <span className="navbar__links">
        {
          links.map(link => (
            <Link
              className="navbar__link"
              key={link.text}
              to={link.route}
              type="link"
            >
              {link.text}
            </Link>
          ))
        }
      </span>
    </span>
    <span className="navbar__right">
      <span className="navbar__links">
        <a href="https://twitter.com/nbcc_ltri">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/company/network-biology-collaborative-centre/">
          <Linkedin />
        </a>
        <Link className="navbar__link navbar__contact" hash to="/about#contact" type="link">
          Contact
        </Link>
      </span>
      <Menu links={links} />
    </span>
  </nav>
);

export default Navbar;
