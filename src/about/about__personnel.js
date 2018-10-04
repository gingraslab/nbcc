import PropTypes from 'prop-types';
import React from 'react';

import LinkIcon from '../assets/icons/link';

const Personnel = ({
  people,
}) => (
  people.map(person => (
    <div
      className="about__personnel"
      key={person.name}
    >
      <h3>{person.name}</h3>
      <div className="about__personnel-inner">
        <div className="about__personnel-image" />
        <div>
          <h4>{person.title}</h4>
          <p>
            {
              person.description
              || `Expertise: ${person.expertise}`
            }
          </p>
          {
            person.website
            && (
              <a
                href={person.website}
              >
                <LinkIcon />
                {person.website}
              </a>
            )
          }
        </div>
      </div>
    </div>
  ))
);

Personnel.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      website: PropTypes.string,
    }),
  ).isRequired,
};

export default Personnel;
