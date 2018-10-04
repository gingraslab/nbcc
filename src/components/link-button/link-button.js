import PropTypes from 'prop-types';
import React from 'react';

import './link-button.css';

const LinkButton = ({
  className,
  href,
  text,
  type,
  ...otherProps
}) => {
  const classes = ['link-button', `link-button_${type}`];
  if (className) {
    classes.push(className);
  }
  return (
    <a
      className={classes.join(' ')}
      href={href}
      {...otherProps}
    >
      { text }
    </a>
  );
};

LinkButton.defaultProps = {
  className: null,
  type: 'primary',
};

LinkButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default LinkButton;
