import React from 'react';

import Wrench from '../../assets/icons/wrench';

const Services = () => (
  <section
    className="facilities__section facilities__services"
    id="services"
  >
    <div className="facilities__section-inner">
      <h2>
        <Wrench />
        Services
      </h2>
      <p>The Flow Cytometry facility provides services at two different locations at
        the Lunenfeld-Tanenbaum Research Institute: 600 University Avenue, Room 980
        and 25 Orde Street, Level 4 Room 421.</p>

      <h3>Cell Sorting</h3>
      <p>
        We support a variety of cell sorting applications including multi-colour sorts
        for bulk culture, indexed sorting of single cells into 96-well plates, cell cycle
        phase sorts, and primary tissue sorts for RNA/DNA analysis.  We were the first in
        Canada to receive a BD FACS Discover S8 cell sorter which is a high-speed
        image-based sorter.
      </p>

      <h3>Cell Analysis</h3>
      <p>
        Our facility has 5 different cell analyzers to accommodate a variety of different
        workflows.  The Image Stream performs image-based analysis powered by machine learning.
      </p>

    </div>
  </section>
);

export default Services;
