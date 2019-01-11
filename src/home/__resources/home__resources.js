import React from 'react';

import File from '../../assets/icons/file';
import Link from '../../components/router-link/router-link';

import './home__resources.css';

const Resources = () => (
  <section className="home__section home__resources">
    <div className="home__section-inner">
      <h2>
        <File />
        Resources
      </h2>
      <div className="home__section-details home__resources-details">
        <p>
          From sample preparation to interpretation of results – we provide you with the
          resources you need.
        </p>
        <div className="home__resources-buttons">
          <Link
            hash
            to="/resources#protocols"
            type="secondary-solid"
          >
            Protocols
          </Link>
          <Link
            hash
            to="/resources#reagents"
            type="secondary-solid"
          >
            Reagents
          </Link>
          <Link
            hash
            to="/resources#tech-notes"
            type="secondary-solid"
          >
            Tech notes
          </Link>
          <Link
            hash
            to="/resources#workshops"
            type="secondary-solid"
          >
            Workshops
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Resources;
