import React from 'react';

import advisors from './about__advisors';
import directors from './about__directors';
import divisionManagers from './about__division-managers';
import manager from './about__centre-managers';
import Personnel from './about__personnel';
import User from '../assets/icons/user';

const Management = () => (
  <section
    className="about__management"
    id="team"
  >
    <h2>
      <User />
      <span>Team</span>
    </h2>
    <Personnel people={directors} />
    <Personnel people={advisors} />
    <Personnel people={manager} />
    <Personnel people={divisionManagers} />
  </section>
);

export default Management;
