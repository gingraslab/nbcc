import React from 'react';

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
      sequencing and high-content to super-resolution microscopy. 
      <br />
      <br />
          {' '}
          <a href="https://nbcc.lunenfeld.ca/about#contact">Contact us</a>
          {' '}
          to discuss how we can help with your project.
    </p>
    <img
      alt="Lunenfeld-Tanenbaum Research Institute"
      src={LTRI}
    />
  </section>
);

export default Landing;
