import React from 'react';

import LinkIcon from '../../assets/icons/link';
import Pdf from '../../assets/icons/pdf';

const Protocols = () => (
  <ul className="facilities__protocols_plain-list">
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
      <a
        download
        href="/pdf/NBCC PR1 Gel staining and in-gel digestion.pdf"
      >
        <Pdf />
        Gel staining and in-gel digestion
      </a>
    </li>
    <li>
      <a
        download
        href="/pdf/NBCC PR2 FLAG IP.pdf"
      >
        <Pdf />
        FLAG IP
      </a>
    </li>
    <li>
      <a
        download
        href="/pdf/NBCC PR3 BioID Flp-IN T-REx Cell Prep.pdf"
      >
        <Pdf />
        BioID Flp-IN T-REx Cell Prep
      </a>
    </li>
    <li>
      <a
        download
        href="/pdf/NBCC PR4 BioID Lentiviral Cell Prep.pdf"
      >
        <Pdf />
        BioID Lentiviral Cell Prep
      </a>
    </li>
    <li>
      <a
        download
        href="/pdf/NBCC PR5 BioID affinity purification and digestion.pdf"
      >
        <Pdf />
        BioID affinity purification and digestion
      </a>
    </li>
  </ul>
);

export default Protocols;
