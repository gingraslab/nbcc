import React from 'react';

import Server from '../../assets/icons/server';

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
      <h4>TripleTOF</h4>
      <p>
        We have four TripleTOF instruments all running nano-LC-MS proteomic
        applications. Three are 6600 TripleTOFs with Eksigent 425 nano-HPLCs,
        and one is a 5600 TripleTOF with an Eksigent Ultra nano-HPLC. These
        instruments are applied to complex samples for discovery and quantitation
        workflows including targeted (MRM-HR) and non-targeted (DDA and SWATH or
        DIA).
      </p>
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
