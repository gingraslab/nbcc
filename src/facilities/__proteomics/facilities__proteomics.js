import React from 'react';

import Equipment from './facilities__proteomics-equipment';
import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';
import Pricing from './facilities__proteomics-pricing';
import Protocols from './facilities__proteomics-protocols';
import Services from './facilities__proteomics-services';
import Tools from './facilities__proteomics-tools';

const links = [
  {
    id: 'services',
    text: 'Services',
  },
  {
    id: 'equipment',
    text: 'Equipment',
  },
  {
    id: 'pricing',
    text: 'Pricing',
  },
  {
    id: 'protocols',
    text: 'Protocols',
  },
  {
    id: 'tools',
    text: 'Tools',
  },
];

const Proteomics = () => (
  <main>
    <section className="facilities__landing">
      <div className="facilities__about">
        <h1>
          Proteomics
        </h1>
        <p>
          The proteomics facility uses cutting-edge mass spectrometry to identify
          proteins in complex mixtures, specializing in techniques for affinity-based
          identification of protein complexes.
        </p>
      </div>
      <Links
        links={[
          { id: 'services', text: 'Services' },
          { id: 'equipment', text: 'Equipment' },
          { id: 'pricing', text: 'Pricing' },
          { id: 'protocols', text: 'Protocols' },
          { id: 'tools', text: 'Analysis tools' },
        ]}
      />
    </section>
    <Navigation
      alwaysShowLinks={false}
      links={links}
      linksScrolled={window.innerHeight}
      scrolled={window.innerHeight}
    />
    <Services />
    <Equipment />
    <Pricing />
    <Protocols />
    <Tools />
  </main>
);

export default Proteomics;
