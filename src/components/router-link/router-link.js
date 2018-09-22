import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import scrollTop from '../../helpers/scroll-top';

const routerLink = ({
  children,
  to,
}) => (
  <Link
    onClick={scrollTop}
    to={to}
  >
    {children}
  </Link>
);

routerLink.defaultProps = {
  children: 'link',
};

routerLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default routerLink;
