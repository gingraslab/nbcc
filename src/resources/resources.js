import React from 'react';

import Navigation from '../components/navigation/navigation-container';
import Protocols from './resources__protocols';
import Reagents from './resources__reagents';
import TechNotes from './resources__technotes';
import Workshops from './resources__workshops';

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
      <header>
        The best quality results derive from the best experimental setup. To ensure that
        the samples we receive are of the highest quality, we provide our users and
        the scientific community with protocols, reagents, and technical notes that will
        assist them with performing the optimal sample preparation prior to analysis.
        We also host local workshops to train users and to inform them of how they may apply
        our services to their biological question. Our resources will continually be expanded
        with new information. If you have questions related to our services that are not
        answered in this resource, please contact one of our managers.
      </header>
      <Protocols />
      <Reagents />
      <TechNotes />
      <Workshops />
    </div>
  </main>
);

export default Resources;
