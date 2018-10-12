import React from 'react';

import Dollar from '../../assets/icons/dollar';

import './facilities__hi-content-screening.css';

const Pricing = () => (
  <section
    className="facilities__section facilities__pricing"
    id="pricing"
  >
    <div className="facilities__section-inner">
      <h2>
        <Dollar />
        Pricing
      </h2>
      <h3>
        <span>
          I. High-throughput imaging
        </span>
      </h3>
      <h4>IN Cell 6000</h4>
      <div className="facilities__hcs-usage">
        <div>
          <strong>Self use</strong>
          <ul>
            <li>4 hours daily max (off-peak unlimited)</li>
            <li>Peak daily max: $300</li>
            <li>Off-peak daily max: $50</li>
            <li>Monthly rate for unlimited use: $900</li>
          </ul>
        </div>
        <div>
          <strong>Rates</strong>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>
                  Hourly rate (peak)
                  <sup>1</sup>
                </th>
                <th>Hourly rate (off-peak)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First hour</td>
                <td className="td-center">$75</td>
                <td className="td-center">$25</td>
              </tr>
              <tr>
                <td>Subsequent hours</td>
                <td className="td-center">$50</td>
                <td className="td-center">$15</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <sup>1</sup>
                  Peak hours are workdays, 9am - 5pm.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="facilities__hcs-usage facilities__hcs-assisted">
        <div>
          <strong>Assisted use</strong>
          <ul>
            <li>Surcharge per plate: $10</li>
            <li>Max surcharge: $300</li>
          </ul>
        </div>
        <div>
          <strong>Rates</strong>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>
                  Hourly rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Assay development
                  <sup>2</sup>
                </td>
                <td className="td-center">$450</td>
              </tr>
              <tr>
                <td>Training</td>
                <td className="td-center">$200</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <sup>2</sup>
                  Assay development charge includes assisted imaging of the first
                  plate(s), custom image analysis script and custom script for data post-analysis.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <h4>Celígo</h4>
      <h3>
        <span>II. High-content analysis</span>
      </h3>
      <h3>
        <span>III. Policies</span>
      </h3>
      <h4>Equipment</h4>
      <p>
        Only trained user may use equipment in the High-Content Screening
        facility. New users should contact Misha Bashkurov for training or to
        process samples. After-hours use is permitted for experienced users.
      </p>
      <h4>Online booking</h4>
      <p>
        For experienced users, please book the microscopes using Google Calendar.
        Please contact us regarding login information. Other users, please contact
        Misha Bashkurov directly.
      </p>
      <h4>Data storage and management</h4>
      <p>
        Data may be temporarily stored on facility&apos;s computers and servers. All
        iles have to be moved to personal or lab storage after 2 months.
      </p>
      <h4>Bio-Safety</h4>
      <p>
        Users who plan to do live cell imaging experiments have to meet with the manager
        to discuss potential bio-safety risks and to ensure appropriate training. Users
        must be familiar with practices outlined in Laboratory Biosafety Guidelines
        (3rd edition, 2004, Public Health Agency of Canada-PHAC and enforced by the human
        pathogens and toxins act). The laboratory is containment level 2-certified.
      </p>
    </div>
  </section>
);

export default Pricing;
