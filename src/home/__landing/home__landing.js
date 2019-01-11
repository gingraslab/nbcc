import React from 'react';

import LTRI from '../../about/assets/funding/ltri.svg';

import './home__landing.css';

const Landing = () => (
  <section className="home__landing">
    <h1>
      Network biology collaborative centre
    </h1>
    <p>
      The Network Biology Collaborative Centre at the Lunenfeld-Tanenbaum
      Research Institute is a national platform providing integrated solutions
      for functional genomics and proteomics.
    </p>
    <img
      alt="Lunenfeld-Tanenbaum Research Institute"
      src={LTRI}
    />
  </section>
);

export default Landing;
