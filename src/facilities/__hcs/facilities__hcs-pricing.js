import React from 'react';

import Dollar from '../../assets/icons/dollar';

const Pricing = () => (
  <section
    className="facilities__section facilities__pricing facilities_hcs"
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
      <h4 className="facilities_hcs_full-header">IN Cell 6000</h4>
      <div className="facilities__hcs-rates">
        <div>
          <strong>Self-Use Rates</strong>
          <table className="facilities__table">
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
                <td>$78.75</td>
                <td>$26.25</td>
              </tr>
              <tr>
                <td>Subsequent hours</td>
                <td>$52.50</td>
                <td>$15.75</td>
              </tr>
              </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <sup>1</sup>
                  Peak hours are workdays, 9am - 6pm.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <strong>Fees</strong>
          <ul>
            <li>Assisted use, training, assay development or data analysis: $90/hour</li>
          </ul>
        </div>
      </div>
      <div className="facilities__hcs-assay-note">
        Assay development includes:
        <ul>
          <li>assisted imaging of the first plate(s)</li>
          <li>custom image analysis script</li>
          <li>custom script for data post-analysis</li>
        </ul>
      </div>
      <h4 className="facilities_hcs_full-header">Celígo</h4>
      <div className="facilities__hcs-rates">
        <div>
          <strong>Self-Use Rates</strong>
          <table className="facilities__table">
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
                <td>$26.25</td>
                <td>$15.75</td>
              </tr>
              <tr>
                <td>Subsequent hours</td>
                <td>$21.00</td>
                <td>$5.25</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <sup>1</sup>
                  Peak hours are workdays, 9am - 6pm.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <strong>Fees</strong>
          <ul>
          <li>Assisted use, training, assay development or data analysis: $90/hour</li>
          </ul>
        </div>
      </div>
      <div className="facilities__hcs-assay-note">
        Assay development includes:
        <ul>
          <li>assisted imaging of the first plate(s)</li>
          <li>Celígo image analysis routine</li>
          <li>custom script for data post-analysis</li>
        </ul>
      </div>
      <h4 className="facilities_hcs_full-header">Incucyte S3</h4>
      <div className="facilities__hcs-rates">
        <div>
          <strong>Fees</strong>
          <ul>
            <li>Initial training on instrument use and software: $170</li>
            <li>Imaging: $100/plate/day </li>
            <li>Data Analysis: performed by user with Incucyte software</li>
          </ul>
        </div>
      </div>
      <h3>
        <span>II. High-content analysis</span>
      </h3>
      <h4 className="facilities_hcs_full-header">Columbus</h4>
      <div className="facilities__hcs-rates">
      <div>
          <strong>Fees</strong>
          <ul>
            <li>Self-use: $10.50/hour</li>
            <li>Assisted use, training or data analysis service: $90/hour </li>
          </ul>
        </div>
      </div>
      <p>
        Pricing is for external academic laboratories. Internal or industry users should
        contact Monica Hasegan for pricing.
      </p>
      <h3>
        <span>III. Policies</span>
      </h3>
      <h4>Equipment</h4>
      <p>
        Only trained users may use equipment in the High-Content Screening
        facility. New users should contact Monica Hasegan (hasegan@lunenfeld.ca) for training or to
        process samples. After-hours use is permitted for experienced users.
      </p>
      <h4>Online booking</h4>
      <p>
        For experienced users, please book the microscopes using Google Calendar.
        Other users, please contact Monica Hasegan directly.
      </p>
      <h4>Data storage and management</h4>
      <p>
        Data may be temporarily stored on facility&apos;s computers and servers. All
        files have to be moved to personal or lab storage after 2 months.
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
