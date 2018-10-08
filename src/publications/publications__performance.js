import React from 'react';

import PieChart from './assets/pie-chart.svg';
import Pdf from '../assets/icons/pdf';
import TableSvg from './publication__table-svg';
import Tachometer from '../assets/icons/tachometer';

import publications from './assets/NBCC Publication List_JN2018.pdf';

const Performance = () => (
  <section>
    <h2>
      <Tachometer />
      <span>Performance</span>
    </h2>
    <p>
      Network Biology Collaborative Centre publication impact factor
      scores:
    </p>
    <div className="publication__grid">
      <div>
        <table className="publication__table">
          <thead>
            <tr>
              <th>
                Impact factor
                <sup>1</sup>
              </th>
              <th>
                Number
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TableSvg fill="#4472c4" />
                 0 - 5
              </td>
              <td>34</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#ed7d31" />
                5 - 10
              </td>
              <td>74</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#a5a5a5" />
                10 - 15
              </td>
              <td>32</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#ffc000" />
                15 - 20
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#5b9bd5" />
                20 - 25
              </td>
              <td>5</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#70ad47" />
                25 - 30
              </td>
              <td>9</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#264478" />
                &gt; 30
              </td>
              <td>19</td>
            </tr>
            <tr>
              <td>
                <TableSvg fill="#9e480e" />
                No score
              </td>
              <td>12</td>
            </tr>
            <tr>
              <td>
                Total
                <sup>2</sup>
              </td>
              <td>187</td>
            </tr>
          </tbody>
        </table>
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
      <figure>
        <img
          alt="Publication pie chart"
          height={288}
          src={PieChart}
          width={300}
        />
        <figcaption>
          Average impact factor score: 12.3
        </figcaption>
      </figure>
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
