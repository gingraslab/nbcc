import PropTypes from 'prop-types';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import scrollTop from '../../helpers/scroll-top';

import './router-link.css';
import '../link-button/link-button.css';

const RouterLink = ({
  children,
  className,
  hash,
  to,
  type,
  ...otherProps
}) => {
  const classes = ['router-link'];
  if (type !== 'link') {
    classes.push(...['link-button', `link-button_${type}`]);
  }
  if (className) {
    classes.push(className);
  }
  if (className) {
    classes.push(className);
  }
  return (
    hash
      ? (
        <HashLink
          className={classes.join(' ')}
          onClick={scrollTop}
          to={to}
          {...otherProps}
        >
          { children }
        </HashLink>
      )
      : (
        <Link
          className={classes.join(' ')}
          onClick={scrollTop}
          to={to}
          {...otherProps}
        >
          { children }
        </Link>
      )
  );
};

RouterLink.defaultProps = {
  children: 'link',
  className: null,
  hash: false,
  type: 'primary',
};

RouterLink.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  hash: PropTypes.bool,
  to: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.string,
};

export default RouterLink;
