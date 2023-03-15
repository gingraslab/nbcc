import React from 'react';

import Server from '../../assets/icons/server';

const Equipment = () => (
  <section
    className="facilities__section facilities__equipment facilities__proteomics-equipment"
    id="equipment"
  >
    <div className="facilities__section-inner">
      <h2>
        <Server />
        Equipment
      </h2>
      <h3>Bruker</h3>
      <h4>timsTOF</h4>
      <p>
        We have two timsTOF instruments which employ trapped ion mobility separation for enhanced precursor selection.
        A timsTOF pro equipped with an Evosep One LC is used for rapid analysis of protein
        complexes and lysate.  A timsTOF SCP coupled to a Thermo Vanquish Neo NanoLC is used for analysis of ultra-low input
        proteomic samples.
      </p>
      <h3>Sciex</h3>
      <h4>TripleTOF</h4>
      <p>
        We have three TripleTOF 6600 instruments with Eksigent 425 nano-HPLCs all running nano-LC-MS proteomic applications.
        These instruments are applied to complex samples for discovery and quantitation
        workflows including targeted (MRM-HR) and non-targeted (DDA and SWATH or DIA).
      </p>
      <h3>Thermo</h3>
      <h4>Lumos</h4>
      <p>
        We have one Fusion Lumos with a Thermo Vanquish Neo NanoLC for
        nano-LC-MS applications. The Fusion Lumos affords a variety of
        workflows for increasing sample coverage and maximizing recovery of
        post-translationally modified or low-abundant peptides, including
        electron transfer dissociation (ETD) and MS3 fragmentation. It is also
        compatible with quantitative approaches including DIA and PRM as well as tandem
        mass tag (TMT) multiplexing.
      </p>
     </div>
  </section>
);

export default Equipment;
