import React from 'react';

import Button from '../components/button/button';
import Link from '../components/router-link/router-link';

import './services.css';

const Home = () => (
  <section className="services">
    <h1>
      Services
    </h1>
    <div className="services__buttons">
      <Link to="/services/proteomics">
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
