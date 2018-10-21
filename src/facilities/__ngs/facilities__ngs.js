import React from 'react';

import Equipment from './facilities__ngs-equipment';
import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';
import Pricing from './facilities__ngs-pricing';
import Services from './facilities__ngs-services';

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

const NextGenSequencing = () => (
  <main>
    <section className="facilities__landing facilities__ngs-landing">
      <div className="facilities__about facilities__ngs-about">
        <h1>
          Next-Generation Sequencing
        </h1>
        <p>
          Next-generation sequencing offers a variety of sequencing services,
          including transcriptomics, barcode reads for CRISPR-pooled screens
          and single-cell RNA-seq.
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

export default NextGenSequencing;
