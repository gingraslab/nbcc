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
          href={`#${link}`}
          key={link}
        >
          <Button type="accent">
            {link}
          </Button>
        </a>
      ))
    }
  </div>
);

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Links;
