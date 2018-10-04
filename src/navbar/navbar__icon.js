import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './assets/logo.svg';

const IconLink = link => (
  link.href
    ? (
      <a
        className="navbar__logo-link"
        href={link.route}
        {...link.props}
      >
        <img
          alt="NBCC logo"
          className="navbar__logo"
          height="40"
          src={Logo}
          width="40"
        />
      </a>
    )
    : (
      <NavLink
        className="navbar__logo-link"
        to={link.route}
      >
        <img
          alt="NBCC logo"
          className="navbar__logo"
          height="40"
          src={Logo}
          width="40"
        />
      </NavLink>
    )
);

export default IconLink;
