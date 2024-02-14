import React from 'react';

import Equipment from './facilities__fcyt-equipment';
// import Gallery from './facilities__fcyt-gallery';
import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';
import Pricing from './facilities__fcyt-pricing';
import Services from './facilities__fcyt-services';

import './facilities__fcyt.css';

const links = [
  { id: 'services', text: 'Services' },
  { id: 'equipment', text: 'Equipment' },
  { id: 'pricing', text: 'Pricing' },
];
// for a gallery link uncoment and move it above , blow pricing
// { id: 'gallery', text: 'Gallery' },

const FlowCytometry = () => (
  <main>
    <section className="facilities__landing facilities__fcyt-landing">
      <div className="facilities__about facilities__fcyt-about">
        <h1>
          Flow Cytometry
        </h1>
        <p>
          The Flow Cytometry facility offers a wide variety of state-of-the-art
          flow cytometry analyzers and cell sorters, specializing in imaging
          flow cytometry and cell sorting.
          We provide high level consultation and training starting from experiment
          design through to grant submission.
        </p>
      </div>
      <Links
        links={links}
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
  </main>
);

export default FlowCytometry;
