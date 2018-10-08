import React from 'react';

import LinkIcon from '../../assets/icons/link';
import Pdf from '../../assets/icons/pdf';

import BioID from '../../assets/protocols/proteomics/Flp-In BioID Streptavidin sepharose - July 2013.pdf';
import Flag from '../../assets/protocols/proteomics/293 Flp-In FLAG magnetic AP - July 2013.pdf';
import FlagChromatin from '../../assets/protocols/proteomics/293 Flp-In FLAG magnetic chromatin optimized AP - July 2013.pdf';

const Protocols = () => (
  <ul>
    <li>
      <cite>
        <a href="https://www.ncbi.nlm.nih.gov/pubmed/28188527">
          <LinkIcon />
          Parallel exploration of interaction space by BioID and affinity
          purification coupled to mass spectrometry
        </a>
      </cite>
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
);

export default Protocols;
