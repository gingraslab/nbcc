import React from 'react';

import Contact from './about__contact';
import Funding from './about__funding';
import Management from './about__management';
import Navigation from '../components/navigation/navigation-container';
import Organization from './about__organziation';
import Staff from './about__staff';

import './about.css';

const links = [
  {
    id: 'organization',
    text: 'Organization',
  },
  {
    id: 'funding',
    text: 'Funding',
  },
  {
    id: 'team',
    text: 'Team',
  },
  {
    id: 'staff',
    text: 'Staff',
  },
  {
    id: 'contact',
    text: 'Contact',
  },
];

const About = () => (
  <main className="about">
    <div className="about__inner">
      <Navigation links={links} />
      <Organization />
      <Funding />
      <Management />
      <Staff />
      <Contact />
    </div>
  </main>
);

export default About;
