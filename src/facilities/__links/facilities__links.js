import PropTypes from 'prop-types';
import React from 'react';

import LinkButton from '../../components/link-button/link-button';

const Links = ({
  links,
}) => (
  <div className="facilities__links">
    {
      links.map(link => (
        <LinkButton
          href={`#${link.id}`}
          key={link.id}
          text={link.text}
          type="secondary-solid"
        />
      ))
    }
  </div>
);

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Links;
