import React from 'react';

import details from './publication__details';
import Pie from './publication__pie';
import Pdf from '../assets/icons/pdf';
import Table from './publication__table';
import LinkIcon from '../assets/icons/link';

const Performance = () => (
  <section>
    <h2>
      Network Biology Collaborative Centre Publications by the
      Numbers:
    </h2>
    <h3>
       <strong>January 1, 2011 to June 6, 2020</strong> 
    </h3>
    <div className="publication__grid">
      <div>
        <Table
          details={details.list}
        />
     </div>
    </div>
    <ul className="publication__links">
      <li>
        <a href="https://scholar.google.com/citations?hl=en&user=CDjBA1AAAAAJ&view_op=list_works&sortby=pubdate">
          <LinkIcon />
          NBCC List of Publications and Stats on Google Scholar
        </a>
      </li>
      <li>
        <a
          download
          href="/pdf/NBCC Publication List_JN2020.pdf"
        >
          <Pdf />
          List of Publications since 2011
        </a>
      </li>
    </ul>
  </section>
);

export default Performance;
