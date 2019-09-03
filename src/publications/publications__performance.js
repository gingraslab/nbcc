import React from 'react';

import details from './publication__details';
import Pie from './publication__pie';
import Pdf from '../assets/icons/pdf';
import Table from './publication__table';

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
            CiteFactor 2017
          </li>
          <li>
            <sup>2</sup>
            January 1, 2011 to September 3, 2019
          </li>
        </ul>
      </div>
      <Pie details={details.list} />
    </div>
    <p>
      <a
        download
        href="./pdf/NBCC Publication List_SE2019.pdf"
      >
        <Pdf />
        List of Publications since 2011
      </a>
    </p>
  </section>
);

export default Performance;
