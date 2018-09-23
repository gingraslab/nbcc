import PropTypes from 'prop-types';
import React from 'react';

import Bars from './navbar__menu-bars_noguide';
import Button from '../components/button/button';
import MenuLinks from './navbar__menu-links_noguide';

import './menu.css';

const MenuContent = ({
  closeMenu,
  links,
  showMenu,
  viewMenu,
}) => (
  <div className="navbar__menu">
    <Button
      className="navbar__menu-button"
      onClick={showMenu}
      type="default"
    >
      { Bars() }
    </Button>
    <MenuLinks
      close={closeMenu}
      links={links}
      view={viewMenu}
    />
  </div>
);

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    props: PropTypes.shape({}),
    route: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  showMenu: PropTypes.func.isRequired,
  viewMenu: PropTypes.bool.isRequired,
};

export default MenuContent;
