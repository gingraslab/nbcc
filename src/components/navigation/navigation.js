import PropTypes from 'prop-types';
import React from 'react';

import ArrowUp from '../../assets/icons/arrow-up';
import LinkButton from '../link-button/link-button';
import RoundButton from '../round-button/round-button';
import scrollTop from '../../helpers/scroll-top';

import './navigation.css';

const Navigation = ({
  links,
  linkType,
  showArrowButton,
  showLinks,
}) => (
  <div className="navigation">
    {
      showArrowButton
      && (
        <RoundButton
          className="navigation__arrow"
          onClick={scrollTop}
          type={linkType}
        >
          <ArrowUp />
        </RoundButton>
      )
    }
    {
      showLinks
      && (
        <ul>
          {
            links.map(link => (
              <li key={link.id}>
                <LinkButton
                  href={`#${link.id}`}
                  text={link.text}
                  type={linkType}
                />
              </li>
            ))
          }
        </ul>
      )
    }
  </div>
);

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  linkType: PropTypes.string.isRequired,
  showArrowButton: PropTypes.bool.isRequired,
  showLinks: PropTypes.bool.isRequired,
};

export default Navigation;
