import React from 'react';
import { NavLink } from 'react-router-dom';

const IconLink = link => (
  link.href
    ? (
      <a
        className="navbar__logo-link"
        href={link.route}
        {...link.props}
      >
        <div className="navbar__logo" />
      </a>
    )
    : (
      <NavLink
        className="navbar__logo-link"
        to={link.route}
      >
        <div className="navbar__logo" />
      </NavLink>
    )
);

export default IconLink;
