import React from 'react';

import Hands from '../assets/icons/hands-usd';

import CIHR from './assets/funding/cihr.svg';
import Innovation from './assets/funding/innovation.svg';
import GC from './assets/funding/gc.svg';
import LTRI from './assets/funding/ltri.svg';
import OG from './assets/funding/og.svg';
import ORF from './assets/funding/orf.png';
import ORF2x from './assets/funding/orf2x.png';
import ORF3x from './assets/funding/orf3x.png';
import TFRI from './assets/funding/tfri.png';
import TFRI2x from './assets/funding/tfri2x.png';
import TFRI3x from './assets/funding/tfri3x.png';

const Funding = () => (
  <section id="funding">
    <h2>
      <Hands />
      <span>Funding</span>
    </h2>
    <p>
      The Centre is supported by funding from the Canada Foundation for Innovation
      (CFI), The Ontario Ministry of Colleges and Universities, Genome
      Canada through Ontario Genomics, Canadian Institutes of Health Research (CIHR),
      Terry Fox Research Institute and the Lunenfeld-Tanenbaum Research Institute.
    </p>
    <div className="about__funding-images">
      <a href="https://www.innovation.ca/">
        <img
          alt="Canada Foundation for Innovation"
          height={50}
          src={Innovation}
          width={215}
        />
      </a>
      <a href="https://www.ontario.ca/page/ontario-research-fund">
        <img
          alt="Ontario Research Fund"
          height={50}
          src={ORF}
          srcSet={`
            ${ORF} 1x,
            ${ORF2x} 2x,
            ${ORF3x} 3x
          `}
          width={146}
        />
      </a>
      <a href="https://www.genomecanada.ca/">
        <img
          alt="Genome Canada"
          height={50}
          src={GC}
          width={83}
        />
      </a>
      <a href="http://www.ontariogenomics.ca/">
        <img
          alt="Ontario Genomics"
          height={50}
          src={OG}
          width={116}
        />
      </a>
      <a href="http://www.cihr-irsc.gc.ca">
        <img
          alt="Canadian Institutes of Health Research"
          height={50}
          src={CIHR}
          width={80}
        />
      </a>
      <a href="http://www.tfri.ca/">
        <img
          alt="Terry Fox Research Institute"
          height={50}
          src={TFRI}
          srcSet={`
            ${TFRI} 1x,
            ${TFRI2x} 2x,
            ${TFRI3x} 3x
          `}
          width={61}
        />
      </a>
      <a href="http://www.lunenfeld.ca/">
        <img
          alt="Lunenfeld-Tanenbaum Research Institute"
          height={50}
          src={LTRI}
          width={318}
        />
      </a>
    </div>
  </section>
);

export default Funding;
