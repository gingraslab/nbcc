import React from 'react';

import Hospital from '../../assets/icons/hospital';
import Link from '../../components/router-link/router-link';

import './home__facilities.css';

const Facilities = () => (
  <section className="home__section home__facilities">
    <div className="home__section-inner home__facilities-inner">
      <h2>
        <Hospital />
        Facilities
      </h2>
      <div className="home__section-details home__facilities-details">
        <p>
          From start to finish, we work with our users to rapidly advance their research
          within and across our five complementary facilities.
        </p>
        <div className="home__facilities-buttons">
          <Link to="/facilities/proteomics">
            Proteomics
          </Link>
          <Link to="/facilities/next-gen-sequencing">
            Next-Generation Sequencing
          </Link>
          <Link to="/facilities/high-throughput-screening">
            High-Throughput Screening
          </Link>
          <Link to="/facilities/high-content-screening">
            High-Content Screening
          </Link>
          <Link to="/facilities/high-res-imaging">
            Advanced Imaging
          </Link>
          <Link to="/facilities/flow-cytometry">
            Flow Cytometry
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Facilities;
