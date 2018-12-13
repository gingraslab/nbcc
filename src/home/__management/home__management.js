import React, { Fragment } from 'react';

import LinkIcon from '../../assets/icons/link';
import directors from '../../about/about__directors';
import managers from '../../about/about__centre-managers';
import Users from '../../assets/icons/users';

import './home__management.css';

const team = [...directors, ...managers];

const Management = () => (
  <section className="home__section home__management">
    <div className="home__section-inner home__management-inner">
      <h2>
        <Users />
        Team
      </h2>
      <div className="home__section-details home__management-details">
        {
          team.map((person, index) => (
            <Fragment key={person.name}>
              <div>
                <img
                  alt={person.name}
                  height={335}
                  src={person.homeImages[0]}
                  srcSet={`
                    ${person.homeImages[0]} 1x,
                    ${person.homeImages[1]} 2x,
                    ${person.homeImages[2]} 3x
                  `}
                  width={250}
                />
                <div>
                  <h3>{ person.name }</h3>
                  <h4>{ person.title }</h4>
                  <p>{ person.description }</p>
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
              {
                index !== team.length - 1
                && <hr />
              }
            </Fragment>
          ))
        }
      </div>
    </div>
  </section>
);

export default Management;
