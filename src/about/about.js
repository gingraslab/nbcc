import React from 'react';

import Contact from './about__contact';
import Funding from './about__funding';
import Links from './about__links';
import Management from './about__management';
import Organization from './about__organziation';
import Staff from './about__staff';

import './about.css';

const About = () => (
  <div className="about">
    <main className="about__inner">
      <Links />
      <Organization />
      <Funding />
      <Management />
      <Staff />
      <Contact />
    </main>
  </div>
);

export default About;
