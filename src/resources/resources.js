import React from 'react';

import Navigation from '../components/navigation/navigation-container';
import Protocols from './resources__protocols';
import Reagents from './resources__reagents';
import TechNotes from './resources__technotes';
import Workshops from './resoureces__workshops';

import './resources.css';

const links = [
  {
    id: 'protocols',
    text: 'Protocols',
  },
  {
    id: 'reagents',
    text: 'Reagents',
  },
  {
    id: 'tech-notes',
    text: 'Tech notes',
  },
  {
    id: 'workshops',
    text: 'Workshops',
  },
];

const Resources = () => (
  <main className="resources">
    <div className="resources__inner">
      <Navigation links={links} />
      <Protocols />
      <Reagents />
      <TechNotes />
      <Workshops />
    </div>
  </main>
);

export default Resources;
