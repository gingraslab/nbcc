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
          href="./pdf/BioID_tech_note_v4_options.pdf"
        >
          <Pdf />
          January 2019 - Expanding BioID to diverse cell types
        </a>
      </li>
    </ul>
  </section>
);

export default TechNotes;
