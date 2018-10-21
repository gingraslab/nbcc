import React from 'react';

import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';

import './facilities__ngs.css';

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
];

const HiContentScreening = () => (
  <main>
    <section className="facilities__landing facilities__ngs-landing">
      <div className="facilities__about facilities__ngs-about">
        <h1>
          Next-Generation Sequencing
        </h1>
        <p>
          The High-Content Screening facility at the Network Biology Collaborative Centre
          provides access to cutting-edge equipment to perform high-speed imaging
          of multi-well plates at low or high resolution. Working in tandem with
          the High-Throughput Screening and High Spatio-Temporal Resolution Imaging
          facilities provides seamless integration from initial screens to detailed
          secondary assays.
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
  </main>
);

export default HiContentScreening;
