import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/button/button';
import LinkIcon from '../../assets/icons/link';
import managers from '../../about/about__managers';
import User from '../../assets/icons/user';

import './home__management.css';

const Management = ({
  handleClick,
  managementIndex,
}) => (
  <section className="home__section home__management">
    <div className="home__section-inner home__management-inner">
      <h2>
        <User />
        Management
      </h2>
      <div className="home__section-details">
        <div className="home__management-details">
          <div />
          <div>
            <div className="home__management-buttons">
              {
                managers.map((manager, index) => (
                  <Button
                    key={manager.name}
                    onClick={() => { handleClick(index); }}
                    type={managementIndex === index ? 'complement-solid' : 'complement'}
                  >
                    { manager.name }
                  </Button>
                ))
              }
            </div>
            <h4>{ managers[managementIndex].title }</h4>
            <p>{ managers[managementIndex].description }</p>
            {
              managers[managementIndex].website
              && (
                <a
                  href={managers[managementIndex].website}
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
