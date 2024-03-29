import React from 'react';

import Link from '../components/router-link/router-link';

import './facilities.css';

const Home = () => (
  <main className="facilities facilities__main-landing">
    <section className="facilities__main-about">
      <h1>
        Facilities
      </h1>
      <p>
        From start to finish, we work with our users to rapidly advance their
        research within and across our six complementary facilities. Our experienced
        managers are always ready to meet with potential users to discuss how our
        services could help their research. Together, experiments are planned and
        executed, results are reviewed, and next steps are discussed. We assist with
        grant writing, collaboration letters, and preparing publication-ready results.
        Users often enter the Centre through one facility, e.g. high-throughput screening
        to identify genes with interesting phenotypes and then continue to imaging for
        detailed phenotypic readouts and to proteomics to identify interaction partners.
        This integration of our core services enables users to rapidly transition between
        biophysical characterizations and functional insights, a unique strength of the NBCC.
      </p>
    </section>
    <div className="facilities__buttons">
    <Link
        to="/facilities/proteomics"
        type="secondary"
      >
        Proteomics
      </Link>
      <Link
        to="/facilities/next-gen-sequencing"
        type="secondary"
      >
        Next-Generation Sequencing
      </Link>
      <Link
        to="/facilities/high-throughput-screening"
        type="secondary"
      >
        High-Throughput Screening
      </Link>
      <Link
        to="/facilities/high-content-screening"
        type="secondary"
      >
        High-Content Screening
      </Link>
      <Link
        to="/facilities/high-res-imaging"
        type="secondary"
      >
        Advanced Imaging
      </Link>
      <Link
        to="/facilities/flow-cytometry"
        type="secondary"
      >
        Flow Cytometry
      </Link>

    </div>
  </main>
);

export default Home;
