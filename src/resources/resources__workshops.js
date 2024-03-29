import React from 'react';
import LinkIcon from '../assets/icons/link';
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
import Expo2024 from './assets/workshops/Core_expo_2024.pdf';

const Workshops = () => (
  <section
    className="resources__section resources__workshop"
    id="workshops"
  >
    <h2>
      <Class />
      <span>Workshops</span>
    </h2>
    <h3>Upcoming events</h3>
    <li>
      <div className="resources__workshops-event">
        <p>
          The NBCC is participating in LTRI&apos;s Scientific Core Facilties Expo on <b>February 15, 2024</b>.
          Managers of all 6 NBCC facilities will be presenting posters describing their technology and expertise.
          This is an excellent opportunity to find out how the NBCC can help advance your research.
        </p>
        <a href={Expo2024}>
            <Pdf />
            Flyer
          </a>
      </div>
    </li>
    <h3>Past events</h3>
    <ul>
    <li>
      <div className="resources__workshops-event">
        <p>
          The NBCC, with the Lunenfeld-Tanenbaum Research Institute at Sinai Health,
          hosted a symposia on <b>January 31st, 2024</b> to celebrate the arrival of the 1st Astral mass spectrometer
          in Canada to our facility. Speakers included Dr. Alexander Makarov (ThermoFisher Scientific),
          Dr. Michael MacCoss (U Washington), and Dr. Jesper Olsen (U Copenhagen).
          <br></br>
          <br></br>
          <a
            href="https://www.eventbrite.ca/e/celebrating-first-in-canada-orbitrap-astral-mass-sprectrometer-tickets-773975550707">
          <LinkIcon />
          Registration and Symposia Details</a>.
        </p>
      </div>
    </li>
      <li>
        <div className="resources__workshops-event">
          <time>CNPN 2020 May 11-13, 2020</time>
          <p>
            The Canadian National Proteomics Network annual meeting schedule for Toronto in May
            2020 was cancelled due to the COVID-19 pandemic. CNPN 2021 will be held in Toronto
            in May 2021.
          </p>
        </div>
      </li>
      <li>
        <div className="resources__workshops-event">
          <p>
            Centre Manager Dr. Karen Colwill gave a plenary talk at The Association
            of Biomolecular Resource Facilities (ABRF) annual meeting in Palm Springs on March 1st, 2020.
            The talk titled &quot;Protein Proximity Mapping: Getting to Know Your Neighbors&quot;
            focused on how to design and analyze BioID experiments in the context of core
            facilities.
          </p>
          <a href="https://conf.abrf.org/protein-proximity-mapping-getting-to-know-your-neighbors/">
            <LinkIcon />
            Abstract
          </a>
        </div>
      </li>
      <li>
        <div className="resources__workshops-event">
          <p>
            Illumina and the NBCC co-hosted a Single Cell Symposium at the Lunenfeld-Tanenbaum
            Research Institute on November 26th 2019. Dr. Jeff Wrana, co-Director of the NBCC,
            gave the keynote talk titled &quot;Profiling Rare Cells with Important Functions&quot;.
          </p>
        </div>
      </li>
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
            High-Throughput Screening and Imaging facilities.
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
            On November 22nd, 2016, we presented two workshops describing the technologies employed
            at the Network Biology Collaborative Centre to over 50 attendees from the Toronto area
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
