import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/button/button';
import LinkIcon from '../../assets/icons/link';
import directors from '../../about/about__directors';
import managers from '../../about/about__centre-managers';
import Users from '../../assets/icons/users';

import './home__management.css';

const team = [...directors, ...managers];

const Management = ({
  handleClick,
  managementIndex,
}) => (
  <section className="home__section home__management">
    <div className="home__section-inner home__management-inner">
      <h2>
        <Users />
        Team
      </h2>
      <div className="home__section-details">
        <div className="home__management-details">
          {
            <img
              alt={team[managementIndex].name}
              height={335}
              src={team[managementIndex].homeImages[0]}
              srcSet={`
                ${team[managementIndex].homeImages[0]} 1x,
                ${team[managementIndex].homeImages[1]} 2x,
                ${team[managementIndex].homeImages[2]} 3x
              `}
              width={250}
            />
          }
          <div>
            <div className="home__management-buttons">
              {
                team.map((person, index) => (
                  <Button
                    key={person.name}
                    onClick={() => { handleClick(index); }}
                    type={managementIndex === index ? 'complement-solid' : 'complement'}
                  >
                    { person.name }
                  </Button>
                ))
              }
            </div>
            <h4>{ team[managementIndex].title }</h4>
            <p>{ team[managementIndex].description }</p>
            {
              team[managementIndex].website
              && (
                <a
                  href={team[managementIndex].website}
                >
                  <LinkIcon />
                  website
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div>
  </section>
);

Management.propTypes = {
  handleClick: PropTypes.func.isRequired,
  managementIndex: PropTypes.number.isRequired,
};

export default Management;
