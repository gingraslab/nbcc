import PropTypes from 'prop-types';
import React from 'react';

import './button.css';

const Button = ({
  children,
  className,
  type,
  ...otherProps
}) => {
  const classes = [`button_${type}`];
  if (className) {
    classes.push(className);
  }
  return (
    <button
      className={classes.join(' ')}
      type="button"
      {...otherProps}
    >
      { children }
    </button>
  );
};

Button.defaultProps = {
  className: null,
  type: 'default',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
