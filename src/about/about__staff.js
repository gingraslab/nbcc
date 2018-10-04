import React from 'react';

import Personnel from './about__personnel';
import staff from './about__staff-list';
import Users from '../assets/icons/users';

const Staff = () => (
  <section id="staff">
    <h2>
      <Users />
      <span>Staff</span>
    </h2>
    <Personnel people={staff} />
  </section>
);

export default Staff;
