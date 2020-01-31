import React from 'react';

import details from './publication__details';
import Pie from './publication__pie';
import Pdf from '../assets/icons/pdf';
import Table from './publication__table';
import LinkIcon from '../assets/icons/link';

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
            January 1, 2011 to January 30, 2020
          </li>
        </ul>
      </div>
      <Pie details={details.list} />
    </div>
    <ul className="publication__links">
      <li>
        <a href="https://scholar.google.com/citations?hl=en&user=CDjBA1AAAAAJ&view_op=list_works&sortby=pubdate">
          <LinkIcon />
          NBCC List of Publications on Google Scholar
        </a>
      </li>
      <li>
        <a
          download
          href="/pdf/NBCC Publication List_JA2020.pdf"
        >
          <Pdf />
          List of Publications since 2011
        </a>
      </li>
    </ul>
  </section>
);

export default Performance;
