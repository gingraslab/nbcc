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
        <p>
          The best quality results derive from the best experimental setup. To ensure that
          the samples we receive are of the highest quality, we provide our users and
          the scientific community with protocols, reagents, and technical notes that will
          assist them with performing the optimal sample preparation prior to analysis.
          We also host local workshops to train users and to inform them of how they may apply
          our services to their biological question. Our resources will continually be expanded
          with new information. If you have questions related to our services that are not
          answered in this resource, please contact one of our managers.
        </p>
      </div>
    </div>
  </section>
);

export default Resources;
