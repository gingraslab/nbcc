import React from 'react';

import Equipment from './facilities__hcs-equipment';
import OtherLinks from './facilities__hcs-links';
import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';
import Pricing from './facilities__hcs-pricing';
import Protocols from './facilities__hcs-protocols';
import Services from './facilities__hcs-services';
import Tools from './facilities__hcs-tools';

import './facilities__hcs.css';

const HiContentScreening = () => (
  <main>
    <section className="facilities__landing facilities__hcs-landing">
      <div className="facilities__about facilities__hcs-about">
        <h1>
          High-Content Screening
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
        links={[
          { id: 'services', text: 'Services' },
          { id: 'equipment', text: 'Equipment' },
          { id: 'pricing', text: 'Pricing' },
          { id: 'protocols', text: 'Protocols' },
          { id: 'tools', text: 'Analysis tools' },
          { id: 'links', text: 'Links' },
        ]}
      />
    </section>
    <Navigation
      alwaysShowLinks={false}
      links={[
        { id: 'services', text: 'Services' },
        { id: 'equipment', text: 'Equipment' },
        { id: 'pricing', text: 'Pricing' },
        { id: 'protocols', text: 'Protocols' },
        { id: 'tools', text: 'Tools' },
        { id: 'links', text: 'Links' },
      ]}
      linksScrolled={window.innerHeight}
      scrolled={window.innerHeight}
    />
    <Services />
    <Equipment />
    <Pricing />
    <Protocols />
    <Tools />
    <OtherLinks />
  </main>
);

export default HiContentScreening;
