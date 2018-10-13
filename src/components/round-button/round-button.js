import PropTypes from 'prop-types';
import React from 'react';

import '../button/button.css';
import './round-button.css';

const RoundButton = ({
  children,
  className,
  type,
  ...otherProps
}) => {
  const classes = ['button_round', `button_${type}`];
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

RoundButton.defaultProps = {
  className: null,
  type: 'primary',
};

RoundButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default RoundButton;
