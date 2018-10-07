import React from 'react';

import Link from '../components/router-link/router-link';

import './facilities.css';

const Home = () => (
  <main className="facilities">
    <section>
      <h1>
        Facilities
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque
        habitant morbi tristique senectus et netus et. Amet mauris commodo quis
        imperdiet massa tincidunt nunc. Enim sed faucibus turpis in eu mi. In
        tellus integer feugiat scelerisque varius. Habitant morbi tristique senectus
        et netus et. Elementum eu facilisis sed odio.
      </p>
    </section>
    <div className="facilities__buttons">
      <Link to="/facilities/hi-content-screening">
        High-content screening
      </Link>
      <Link to="/facilities/hi-res-imaging">
        High-resolution imaging
      </Link>
      <Link to="/facilities/hi-throughput-screening">
        High-throughput screening
      </Link>
      <Link to="/facilities/data-analysis">
        Integrated data analysis
      </Link>
      <Link to="/facilities/next-gen-sequencing">
        Next-generation sequencing
      </Link>
      <Link to="/facilities/proteomics">
        Proteomics
      </Link>
    </div>
  </main>
);

export default Home;
