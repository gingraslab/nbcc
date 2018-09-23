import React, { Fragment } from 'react';

import Button from '../../components/button/button';
import Equipment from '../__equipment/facilities__equipment';
import Pricing from '../__pricing/facilities__pricing';
import Services from '../__services/facilities__services';
import './facilities__proteomics.css';

const Proteomics = () => (
  <Fragment>
    <main className="facilities__proteomics">
      <div className="facilities__proteomics-about">
        <h1>
          Proteomics
        </h1>
        <div>
          The proteomics facility uses cutting-edge mass spectrometry to identify
          proteins in complex mixtures, specializing in techniques for affinity-based
          identification of protein complexes.
        </div>
      </div>
      <div className="facilities__proteomics-buttons">
        <a href="#services">
          <Button type="accent">
            Services
          </Button>
        </a>
        <a href="#equipment">
          <Button type="accent">
            Equipment
          </Button>
        </a>
        <a href="#pricing">
          <Button type="accent">
            Pricing
          </Button>
        </a>
      </div>
    </main>
    <Services />
    <Equipment />
    <Pricing />
  </Fragment>
);

export default Proteomics;
