import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Menu from './menu';
import useClickOutside from './use-click-outside';

const MenuContainer = ({ links }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const closeMenu = () => {
    setOpen(false);
  };

  useClickOutside(ref, closeMenu);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Menu
      closeMenu={closeMenu}
      handleClick={handleClick}
      links={links}
      open={open}
      ref={ref}
    />
  );
};

MenuContainer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MenuContainer;
