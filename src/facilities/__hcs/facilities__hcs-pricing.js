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
          <strong>Rates</strong>
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
                <td>$75</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Subsequent hours</td>
                <td>$50</td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Daily max </td>
                <td>$300</td>
                <td>$50</td>
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
        <div>
          <strong>Fees</strong>
          <ul>
            <li>Training: $250</li>
            <li>Assay development: $450</li>
            <li>Assisted use plate surcharge: $10</li>
          </ul>
        </div>
        <div>
          <strong>Fee caps</strong>
          <ul>
            <li>Monthly: $900 (can include assay development)</li>
            <li>Plate surcharge: $300/month</li>
            <li>4 hr daily max during peak hours for monthly flate rate</li>
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
          <strong>Rates</strong>
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
                <td>$25</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>Subsequent hours</td>
                <td>$15</td>
                <td>$5</td>
              </tr>
              <tr>
                <td>Daily max </td>
                <td>$100</td>
                <td>$45</td>
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
        <div>
          <strong>Fees</strong>
          <ul>
            <li>Training: $200</li>
            <li>Assay development: $150</li>
            <li>Assisted use plate surcharge: $10</li>
          </ul>
        </div>
        <div>
          <strong>Fee caps</strong>
          <ul>
            <li>Monthly: $300 (can include assay development)</li>
            <li>Plate surcharge: $100/month</li>
            <li>4 hr daily max during peak hours for monthly flate rate</li>
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
      <h3>
        <span>II. High-content analysis</span>
      </h3>
      <h4 className="facilities_hcs_full-header">Columbus</h4>
      <div className="facilities__hcs-rates">
        <div>
          <strong>Rates</strong>
          <table className="facilities__table">
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
                <td>First hour</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>Daily max </td>
                <td>$50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <strong>Fees</strong>
          <ul>
            <li>Training: $150</li>
            <li>Assay development: $150</li>
          </ul>
        </div>
        <div>
          <strong>Fee caps</strong>
          <ul>
            <li>Monthly: $150</li>
            <li>Assay development: $50 on reaching monthly cap</li>
          </ul>
        </div>
      </div>
      <strong>
        Additional charges may apply for image or data analysis depending on complexity.
      </strong>
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
        facility. New users should contact Monica Hasegan for training or to
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
