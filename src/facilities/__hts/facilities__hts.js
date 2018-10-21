import React from 'react';

import Equipment from './facilities__hts-equipment';
import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';
import Services from './facilities__hts-services';

import './facilities__hts.css';

const HiThroughputScreening = () => (
  <main>
    <section className="facilities__landing facilities__hts-landing">
      <div className="facilities__about facilities__hts-about">
        <h1>
          High-Throughput Screening
        </h1>
        <p>
          Formerly known as the SMART Laboratory, the High-Throughput Screening facility,
          assists in the development of assays for large-scale applications, and offers
          access to robot-assisted technologies for the design, validation, and execution
          of experimental procedures under high-throughput conditions. An integrated framework
          for data management is available to facilitate and accelerate data analysis and
          secure contextual information for the reliable interpretation of results.
        </p>
      </div>
      <Links
        links={[
          { id: 'services', text: 'Services' },
          { id: 'equipment', text: 'Equipment' },
          { id: 'pricing', text: 'Pricing' },
          { id: 'tools', text: 'Analysis tools' },
        ]}
      />
    </section>
    <Navigation
      alwaysShowLinks={false}
      links={[
        { id: 'services', text: 'Services' },
        { id: 'equipment', text: 'Equipment' },
        { id: 'pricing', text: 'Pricing' },
        { id: 'tools', text: 'Tools' },
      ]}
      linksScrolled={window.innerHeight}
      scrolled={window.innerHeight}
    />
    <Services />
    <Equipment />
  </main>
);

export default HiThroughputScreening;
