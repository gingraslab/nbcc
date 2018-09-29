import React from 'react';

import Button from '../components/button/button';
import Link from '../components/router-link/router-link';

import './facilities.css';

const Home = () => (
  <section className="facilities">
    <span>
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
    </span>
    <div className="facilities__buttons">
      <Link to="/facilities/proteomics">
        <Button>
          High-content screening
        </Button>
      </Link>
      <Link to="/facilities/proteomics">
        <Button>
          High-resolution imaging
        </Button>
      </Link>
      <Link to="/facilities/proteomics">
        <Button>
          High-throughput screening
        </Button>
      </Link>
      <Link to="/facilities/proteomics">
        <Button>
          Integrated data analysis
        </Button>
      </Link>
      <Link to="/facilities/proteomics">
        <Button>
          Next-generation sequencing
        </Button>
      </Link>
      <Link to="/facilities/proteomics">
        <Button>
          Proteomics
        </Button>
      </Link>
    </div>
  </section>
);

export default Home;
