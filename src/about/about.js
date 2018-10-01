import React from 'react';

import Contact from './about__contact';
import Organization from './about__organziation';

import './about.css';

const About = () => (
  <div className="about">
    <main className="about__inner">
      <Organization />
      <Contact />
    </main>
  </div>
);

export default About;
