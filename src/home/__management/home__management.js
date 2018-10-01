import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/button/button';
import LinkIcon from '../../assets/icons/link';
import Managers from '../../about/about__managers';
import Users from '../../assets/icons/users';

import './home__management.css';

const Management = ({
  handleClick,
  managementIndex,
}) => (
  <section className="home__section home__management">
    <div className="home__section-inner">
      <h2>
        <Users />
        Management
      </h2>
      <div className="home__section-details">
        <div className="home__management-details">
          <div />
          <div>
            <div className="home__management-buttons">
              {
                Managers.map((manager, index) => (
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
            <h4>{ Managers[managementIndex].title }</h4>
            <p>{ Managers[managementIndex].description }</p>
            {
              Managers[managementIndex].website
              && (
                <a
                  href={Managers[managementIndex].website}
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
