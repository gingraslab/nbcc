import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Link from '../components/router-link/router-link';

const Menu = forwardRef(function menu (
  {
    closeMenu,
    handleClick,
    links,
    open,
  },
  ref,
) {
  return (
    <span className="navbar__menu-container">
      <button
        className="navbar__menu-button"
        onClick={handleClick}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="menuIcon"
          height="25"
          role="img"
          viewBox="0 0 448 512"
        >
          <title id="menuIcon">Menu</title>
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </button>
      <ul
        className={open ? 'navbar__menu open' : 'navbar__menu closed'}
        ref={ref}
      >
        {
          links.map(link => (
            <li key={link.text}>
              <Link
                className="navbar__link"
                onClick={closeMenu}
                to={link.route}
                type="link"
              >
                {link.text}
              </Link>
            </li>
          ))
        }
        <li>
          <Link
            className="navbar__link"
            hash
            onClick={closeMenu}
            to="/about#contact"
            type="link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </span>
  );
});

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  open: PropTypes.bool.isRequired,
};

export default Menu;
