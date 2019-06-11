import React from 'react';

import Dollar from '../../assets/icons/dollar';

const Pricing = () => (
  <section
    className="facilities__section facilities__pricing facilities__hri-pricing"
    id="pricing"
  >
    <div className="facilities__section-inner">
      <h2>
        <Dollar />
        Pricing
      </h2>
      <p>
        Imaging prices include pre-processing using DeltaVision software, SoftWoRx.
        Customized image analysis with other software (e.g. Matlab) is also
        available for an additional cost.
      </p>
      <p>
        All prices are per hour unless otherwise specified.
      </p>
      <div className="facilities__table_extra-wide">
        <table className="facilities__table">
          <thead>
            <tr>
              <th />
              <th />
              <th colSpan="3">Self-use</th>
              <th colSpan="3">Assisted</th>
            </tr>
            <tr>
              <th>System</th>
              <th>Service</th>
              <th>Peak</th>
              <th>Off-peak</th>
              <th>Daily max ($/24hr)</th>
              <th>Peak</th>
              <th>Daily max ($/24hr)</th>
            </tr>
          </thead>
          <tbody className="facilities__hri-pricing-table_bottom-border">
            <tr>
              <td
                className="facilities__hri-pricing-table_bottom-border"
                rowSpan="2"
              >
                EliteDV
              </td>
              <td>Imaging</td>
              <td>35</td>
              <td>20</td>
              <td>495</td>
              <td>65</td>
              <td>765</td>
            </tr>
            <tr className="facilities__hri-pricing-table_bottom-border">
              <td>Assay development & training</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>100</td>
              <td>-</td>
            </tr>
            <tr>
              <td
                className="facilities__hri-pricing-table_bottom-border"
                rowSpan="2"
              >
                OMX
              </td>
              <td>Imaging</td>
              <td>60</td>
              <td>40</td>
              <td>900</td>
              <td>80</td>
              <td>1080</td>
            </tr>
            <tr className="facilities__hri-pricing-table_bottom-border">
              <td>Assay development & training</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>120</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="4">Image processing</td>
              <td>Locally with SoftWoRx</td>
              <td>15</td>
              <td>10</td>
              <td>-</td>
              <td>60</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Locally with other software</td>
              <td>15</td>
              <td>10</td>
              <td>-</td>
              <td colSpan="2">Depends on analysis complexity</td>
            </tr>
            <tr>
              <td>On compute cluster</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>90</td>
              <td>-</td>
            </tr>
            <tr className="facilities__hri-pricing-table_bottom-border">
              <td>Linux computer training</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>150</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <small>
        Peak is 9 am to 6 pm. Off-peak is evening, overnight and weekend. Pricing is for
        external academic laboratories. Internal or industry users should contact Johnny
        Tkach for pricing.
      </small>
      <h3>
        Policies
      </h3>
      <h4>Accessing the facility</h4>
      <p>
        Users interested in accessing the High Resolution Imaging facility should
        contact Monica Hasegan (hasegan@lunenfeld.ca) to discuss the scope of their project.
      </p>
      <h4>Bio-safety</h4>
      <p>
        Users who plan to do live cell imaging experiments have to meet with the
        manager to discuss potential bio-safety risks and to ensure appropriate training.
        Users must be familiar with practices outlined in Laboratory Biosafety Guidelines
        (3rd edition, 2004, Public Health Agency of Canada-PHAC and enforced by the human
        Pathogens and Toxins act).
      </p>
    </div>
  </section>
);

export default Pricing;
