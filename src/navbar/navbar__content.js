import PropTypes from 'prop-types';
import React from 'react';

import Icon from './navbar__icon';
import Links from './navbar__links';
import Menu from './navbar__menu-container';

import './navbar.css';

const NavbarContent = ({
  background,
  contact,
  fixed,
  links,
  logoLink,
  shadow,
  smallScreen,
  ...props
}) => {
  const classes = ['navbar'];
  if (background) classes.push('navbar_background');
  if (background && shadow) classes.push('navbar_shadow');
  if (!fixed) classes.push('navbar_absolute');
  return (
    <nav
      className={classes.join(' ')}
      {...props}
    >
      { Icon(logoLink) }
      <div className="navbar__links">
        { smallScreen ? <Menu links={links} /> : Links(links, contact) }
      </div>
    </nav>
  );
};

NavbarContent.defaultProps = {
  contact: '',
};

NavbarContent.propTypes = {
  background: PropTypes.bool.isRequired,
  contact: PropTypes.string,
  fixed: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    props: PropTypes.shape({}),
    route: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  logoLink: PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
  }).isRequired,
  shadow: PropTypes.bool.isRequired,
  smallScreen: PropTypes.bool.isRequired,
};

export default NavbarContent;
