/* eslint react/destructuring-assignment: 0 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import debounce from '../../helpers/debounce';
import getScrollPos from '../../helpers/get-scroll-pos';
import Navigation from './navigation';

class NavigationContainer extends Component {
  showNavButtons = debounce(() => {
    const navState = this.buttonState();
    this.setState({
      showArrowButton: navState.arrow,
      showLinks: navState.links,
    });
  }, this.props.scrollDelay);

  constructor(props) {
    super(props);
    const navState = this.buttonState();
    this.state = {
      showArrowButton: navState.arrow,
      showLinks: navState.links,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.showNavButtons);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.showNavButtons);
  }

  buttonState = () => {
    const { alwaysShowLinks, linksScrolled, scrolled } = this.props;
    const scrollPos = getScrollPos();
    return {
      arrow: scrollPos > scrolled,
      links: alwaysShowLinks || scrollPos > linksScrolled,
    };
  }

  render() {
    const { links, linkType } = this.props;
    const { showArrowButton, showLinks } = this.state;
    return (
      <Navigation
        links={links}
        linkType={linkType}
        showArrowButton={showArrowButton}
        showLinks={showLinks}
      />
    );
  }
}

NavigationContainer.defaultProps = {
  alwaysShowLinks: true,
  links: [],
  linksScrolled: 0,
  linkType: 'secondary-solid',
  scrollDelay: 20,
  scrolled: 50,
};

NavigationContainer.propTypes = {
  alwaysShowLinks: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  linksScrolled: PropTypes.number,
  linkType: PropTypes.string,
  scrollDelay: PropTypes.number,
  scrolled: PropTypes.number,
};

export default NavigationContainer;
