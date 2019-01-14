import React from 'react';

import Pdf from '../assets/icons/pdf';
import StickyNote from '../assets/icons/sticky-note';

const TechNotes = () => (
  <section
    className="resources__section resources__technotes"
    id="tech-notes"
  >
    <h2>
      <StickyNote />
      <span>Tech Notes</span>
    </h2>
    <ul>
      <li>
        <a
          download
          href="./pdf/NBCC Tech Note Jan 2019 – Lentiviral BioID.pdf"
        >
          <Pdf />
          January 2019 - Expanding BioID to diverse cell types
        </a>
      </li>
    </ul>
  </section>
);

export default TechNotes;
