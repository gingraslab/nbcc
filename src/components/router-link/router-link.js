import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import scrollTop from '../../helpers/scroll-top';

const routerLink = ({
  children,
  className,
  to,
}) => (
  <Link
    className={className}
    onClick={scrollTop}
    to={to}
  >
    {children}
  </Link>
);

routerLink.defaultProps = {
  children: 'link',
  className: '',
};

routerLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]).isRequired,
};

export default routerLink;
