import React from 'react';

import Button from '../components/button/button';
import Link from '../components/router-link/router-link';

import './facilities.css';

const Home = () => (
  <section className="facilities">
    <h1>
      Facilities
    </h1>
    <div className="facilities__buttons">
      <Button>
        High-content screening
      </Button>
      <Button>
        High-resolution imaging
      </Button>
      <Button>
        High-throughput screening
      </Button>
      <Button>
        Next-generation sequencing
      </Button>
      <Button>
        Integrated data analysis
      </Button>
      <Link to="/facilities/proteomics">
        <Button>
          Proteomics
        </Button>
      </Link>
    </div>
  </section>
);

export default Home;
