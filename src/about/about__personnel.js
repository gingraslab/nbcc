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
        {
          <img
            alt={person.name}
            height={200}
            src={person.images[0]}
            srcSet={`
              ${person.images[0]} 1x,
              ${person.images[1]} 2x,
              ${person.images[2]} 3x
            `}
            width={150}
          />
        }
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
                website
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
      description: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      website: PropTypes.string,
    }),
  ).isRequired,
};

export default Personnel;
