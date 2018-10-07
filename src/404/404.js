import React from 'react';

import RouterLink from '../components/router-link/router-link';

import './404.css';

const Missing = () => (
  <main className="missing">
    <h1>
      404: Page Not Found
    </h1>
    <p>
      The page you were looking for was moved, removed, renamed or never existed.
    </p>
    <RouterLink
      to="/"
      type="secondary-solid"
    >
      Home
    </RouterLink>
  </main>
);

export default Missing;
