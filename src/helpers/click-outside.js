import ClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class ClickOutsideWrapper extends Component {
  constructor (props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside () {
    const { callback } = this.props;
    if (callback) {
      callback();
    }
  };

  render () {
    const { children } = this.props;
    return children;
  }
}

ClickOutsideWrapper.defaultProps = {
  callback: null,
};

ClickOutsideWrapper.propTypes = {
  callback: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({}),
  ]).isRequired,
};

export default ClickOutside(ClickOutsideWrapper);
