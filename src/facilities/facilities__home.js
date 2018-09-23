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
      <Link to="/facilities/proteomics">
        <Button>
          Proteomics
        </Button>
      </Link>
      <Button>
        High-throughput screening
      </Button>
      <Button>
        High-content screening
      </Button>
      <Button>
        High-spatio-temporal resolution imaging
      </Button>
      <Button>
        Integrative analysis
      </Button>
    </div>
  </section>
);

export default Home;
