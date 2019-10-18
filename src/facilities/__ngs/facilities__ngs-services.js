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
      <p>
        The sequencing unit offers a broad range of applications using NGS with a focus
        on RNA-Seq technology and more recently, single cell analysis. The services include
        library preparation from DNA, mRNA or total RNA. Samples are sequenced on either a
        HiSeq 3000 or NextSeq 500 sequencer. Additional services
        are available for nucleic acid fragment size selection, QC and quantitation.
        We offer free initial consultation to identify the best and cost-effective solution
        for your projects. We also provide bioinformatics support.
      </p>
    </div>
  </section>
);

export default Services;
