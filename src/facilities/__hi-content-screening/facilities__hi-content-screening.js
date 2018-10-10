import React from 'react';

import Equipment from './facilities__hi-content-screening-equipment';
import Links from '../__links/facilities__links';
import Pricing from './facilities__hi-content-screening-pricing';
import Services from './facilities__hi-content-screening-services';

const HiContentScreening = () => (
  <main>
    <section className="facilities__landing">
      <div className="facilities__about">
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
        ]}
      />
    </section>
    <Services />
    <Equipment />
    <Pricing />
  </main>
);

export default HiContentScreening;
