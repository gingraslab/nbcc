import React from 'react';

import details from './publication__details';
import Pie from './publication__pie';
import Pdf from '../assets/icons/pdf';
import Table from './publication__table';

import publications from './assets/NBCC Publication List_JN2018.pdf';

const Performance = () => (
  <section>
    <h3>
      Network Biology Collaborative Centre publication impact factor
      scores:
    </h3>
    <div className="publication__grid">
      <div>
        <Table
          average={details.average}
          details={details.list}
        />
        <ul>
          <li>
            <sup>1</sup>
            CiteFactor 2014
          </li>
          <li>
            <sup>2</sup>
            January 1, 2011 to June 18, 2018
          </li>
        </ul>
      </div>
      <Pie details={details.list} />
    </div>
    <p>
      <a href={publications}>
        <Pdf />
        List of Publications since 2011
      </a>
    </p>
  </section>
);

export default Performance;
