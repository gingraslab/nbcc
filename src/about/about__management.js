import React from 'react';

import divisionManagers from './about__division-managers';
import managers from './about__managers';
import Personnel from './about__personnel';
import User from '../assets/icons/user';

const Management = () => (
  <section
    className="about__management"
    id="management"
  >
    <h2>
      <User />
      <span>Management</span>
    </h2>
    <Personnel people={managers} />
    <Personnel people={divisionManagers} />
  </section>
);

export default Management;
