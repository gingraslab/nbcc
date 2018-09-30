import React from 'react';

import Books from '../../assets/icons/books';
import LinkIcon from '../../assets/icons/link';
import Pdf from '../../assets/icons/pdf';

import BioID from '../../assets/protocols/proteomics/Flp-In BioID Streptavidin sepharose - July 2013.pdf';
import Flag from '../../assets/protocols/proteomics/293 Flp-In FLAG magnetic AP - July 2013.pdf';
import FlagChromatin from '../../assets/protocols/proteomics/293 Flp-In FLAG magnetic chromatin optimized AP - July 2013.pdf';

const Protocols = () => (
  <section
    className="facilities__section facilities__protocols"
    id="protocols"
  >
    <div className="facilities__section-inner">
      <h2>
        <Books />
        Protocols
      </h2>
      <ul>
        <li>
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/28188527">
            <LinkIcon />
            Parallel exploration of interaction space by BioID and affinity
            purification coupled to mass spectrometry
          </a>
        </li>
        <li>
          <a href={Flag}>
            <Pdf />
            293 Flp-In FLAG magnetic AP - July 2013
          </a>
        </li>
        <li>
          <a href={FlagChromatin}>
            <Pdf />
            293 Flp-In FLAG magnetic chromatin optimized AP - July 2013
          </a>
        </li>
        <li>
          <a href={BioID}>
            <Pdf />
            Flp-In BioID Streptavidin sepharose - July 2013
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Protocols;
