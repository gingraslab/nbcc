import React from 'react';

import Class from '../assets/icons/class';
import Pdf from '../assets/icons/pdf';

import CNPN2017 from './assets/workshops/CNPN2017.svg';
import GC from '../about/assets/funding/gc.svg';
import NBCC2016 from './assets/workshops/NBCC2016.png';
import NBCC20162x from './assets/workshops/NBCC2016-2x.png';
import NBCC20163x from './assets/workshops/NBCC2016-3x.png';
import NBCC2018 from './assets/workshops/NBCC2018.png';
import NBCC20182x from './assets/workshops/NBCC2018-2x.png';
import NBCC20183x from './assets/workshops/NBCC2018-3x.png';

import Workshop2016 from './assets/workshops/Network Biology Collaborative Centre Workshop_revised.pdf';
import Workshop2018 from './assets/workshops/NBCC_workshop_AP10_18_schedule.pdf';

const Workshops = () => (
  <section
    className="resources__section resources__workshop"
    id="workshops"
  >
    <h2>
      <Class />
      <span>Workshops</span>
    </h2>
    <h3>Past events</h3>
    <ul>
      <li>
        <img
          alt="NBCC workshop 2018"
          height={250}
          src={NBCC2018}
          srcSet={`
            ${NBCC2018} 1x,
            ${NBCC20182x} 2x,
            ${NBCC20183x} 3x
          `}
          width={500}
        />
        <div className="resources__workshops-event">
          <p>
            The NBCC was pleased to present a workshop on April 10th, 2018 from 1 to 4 pm.
            The workshop was titled &quot;Innovative high-throughput technologies for drug screening
            &amp; cell imaging&quot; and highlighted new applications and technologies of our
            High-Throughput Screening and Imaging divisions.
          </p>
          <a href={Workshop2018}>
            <Pdf />
            Schedule
          </a>
        </div>
      </li>
      <li>
        <img
          alt="Genome Canada"
          height={100}
          src={GC}
          width={167}
        />
        <div className="resources__workshops-event">
          <p>
           The NBCC was one of the Genome Canada technology platforms highlighted in the
           webinar &quot;Technology Platforms to Support Your Omics Research&quot; on
           June 20th 2017.
          </p>
        </div>
      </li>
      <li>
        <img
          alt="CNPN 2017"
          height={50}
          src={CNPN2017}
          width={331}
        />
        <div className="resources__workshops-event">
          <p>
            The NBCC presented a workshop on the mass spectrometry LIMS ProHits at this year&apos;s
            Canadian National Proteomics Network Annual Meeting. The workshop took place on April
            18th 2017 at 2 pm at YWCA Toronto (87 Elm Street).
          </p>
        </div>
      </li>
      <li>
        <img
          alt="NBCC workshop 2018"
          height={250}
          src={NBCC2016}
          srcSet={`
            ${NBCC2016} 1x,
            ${NBCC20162x} 2x,
            ${NBCC20163x} 3x
          `}
          width={500}
        />
        <div className="resources__workshops-event">
          <p>
            On November 22nd, we presented two workshops describing the technologies employed at
            the Network Biology Collaborative Centre to over 50 attendees from the Toronto area
            and further described how our services can be employed in their own research projects.
          </p>
          <a href={Workshop2016}>
            <Pdf />
            Schedule
          </a>
        </div>
      </li>
    </ul>
    <h3 className="resources__workshops-training">
      Training
      <i>in situ</i>
    </h3>
    <p>
      We offer hands-on training at our Centre to interested users who
      wish to learn more about our technologies. Please contact our Centre
      Manager Karen Colwill (colwill@lunenfeld.ca) for more details.
    </p>
  </section>
);

export default Workshops;
