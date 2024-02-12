import React from 'react';

import Link from '../../components/router-link/router-link';
import LTRI from '../../about/assets/funding/ltri.svg';

import './home__landing.css';

const Landing = () => (
  <section className="home__landing">
    <h1>
      Network biology collaborative centre
    </h1>
    <p>
      Accelerating research by providing integrated services in functional proteomics
      and genomics, drug discovery and high-throughput screening, next-generation
      sequencing, flow cytometry and high-content to super-resolution microscopy.
    </p>
    <p>
      NBCC is helping researchers with both COVID-19 and non COVID-19 related research.
      {' '}
      <Link
        to="/about#contact"
        type="link"
      >
        Contact us
      </Link>
      {' '}
      to discuss how we can help with your project.
    </p>
    <img
      alt="Lunenfeld-Tanenbaum Research Institute"
      height={50}
      src={LTRI}
      width={318}
    />
  </section>
);

export default Landing;
