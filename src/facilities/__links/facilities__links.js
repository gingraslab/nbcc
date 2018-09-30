import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/button/button';

const Links = ({
  links,
}) => (
  <div className="facilities__links">
    {
      links.map(link => (
        <a
          href={`#${link.id}`}
          key={link.id}
        >
          <Button type="accent">
            {link.text}
          </Button>
        </a>
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
