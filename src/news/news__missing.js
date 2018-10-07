import React from 'react';

import RouterLink from '../components/router-link/router-link';

const Missing = () => (
  <section className="news__missing">
    <p>
      This article could not be found.
    </p>
    <div className="news__missing-buttons">
      <RouterLink
        to="/news"
        type="secondary-solid"
      >
        Back
      </RouterLink>
      <RouterLink
        to="/"
        type="secondary-solid"
      >
        Home
      </RouterLink>
    </div>
  </section>
);

export default Missing;
