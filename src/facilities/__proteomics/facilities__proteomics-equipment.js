import React from 'react';

import Sciex from './assets/sciex.png';
import Sciex2x from './assets/sciex2x.png';
import Sciex3x from './assets/sciex3x.png';
import Server from '../../assets/icons/server';
import Thermo from './assets/thermo-fisher.svg';

const Equipment = () => (
  <section
    className="facilities__section facilities__equipment"
    id="equipment"
  >
    <div className="facilities__section-inner">
      <h2>
        <Server />
        Equipment
      </h2>
      <img
        alt="Sciex"
        src={Sciex}
        srcSet={`
          ${Sciex} 1x,
          ${Sciex2x} 2x,
          ${Sciex3x} 3x
        `}
      />
      <h4>6600</h4>
      <p>
        We have four TripleTOF instruments all running nano-LC-MS proteomic
        applications. Three are 6600 TripleTOFs with Eksigent 425 nano-HPLCs,
        and one is a 5600 TripleTOF with an Eksigent Ultra nano-HPLC. These
        instruments are applied to complex samples for discovery and quantitation
        workflows including targeted (MRM-HR) and non-targeted (DDA and SWATH or
        DIA).
      </p>
      <img
        alt="Thermo Fisher Scientific"
        src={Thermo}
      />
      <h4>Lumos</h4>
      <p>
        We have one Fusion Lumos with an Eksigent 425 nano-HPLC for
        nano-LC-MS applications. The Fusion Lumos affords a variety of
        workflows for increasing sample coverage and maximizing recovery of
        post-translationally modified or low-abundant peptides, including ETD
        and MS3 fragmentation. It is also compatible with quantitative
        approaches including DIA and PRM as well as TMT multiplexing.
      </p>
      <h4>Elite</h4>
      <p>
        We have one Orbitrap Elite with an Eksigent Ultra HPLC that generates
        data for nano-LC-MS proteomic applications. This instrument is applied
        to complex samples for discovery and quantitation workflows including
        SILAC-labelled samples.
      </p>
    </div>
  </section>
);

export default Equipment;
