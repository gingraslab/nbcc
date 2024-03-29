import React from 'react';

import Equipment from './facilities__hri-equipment';
import Gallery from './facilities__hri-gallery';
import Links from '../__links/facilities__links';
import Navigation from '../../components/navigation/navigation-container';
import Pricing from './facilities__hri-pricing';
import Services from './facilities__hri-services';

import './facilities__hri.css';

const links = [
  { id: 'services', text: 'Services' },
  { id: 'equipment', text: 'Equipment' },
  { id: 'pricing', text: 'Pricing' },
  { id: 'gallery', text: 'Gallery' },
];

const HiResolutionImaging = () => (
  <main>
    <section className="facilities__landing facilities__hri-landing">
      <div className="facilities__about facilities__hri-about">
        <h1>
          Advanced Imaging
        </h1>
        <p>
          The Advanced Imaging facility provides users with all their imaging needs from day-to-day workhorses
          to super-resolution state-of-the-art imagers for detailed analysis of cellular structures, enabling
          both fixed and live-cell imaging from low to super-resolution. Our pipeline allows for a facile transition
          from screening to more detailed analysis.
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
    <Gallery />
  </main>
);

export default HiResolutionImaging;
