import React from 'react';

import Links from './resources__links';
import Protocols from './resources__protocols';
import Reagents from './resources__reagents';
import TechNotes from './resources__technotes';
import Workshops from './resoureces__workshops';

import './resources.css';

const Resources = () => (
  <main className="resources">
    <div className="resources__inner">
      <Links />
      <Protocols />
      <Reagents />
      <TechNotes />
      <Workshops />
    </div>
  </main>
);

export default Resources;
