import React from 'react';

import Dollar from '../../assets/icons/dollar';

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
      <p>
        These prices are for external academic laboratories and are guidelines only.
        Interested users should contact Cassandra Wong (cwong@lunenfeld.ca) to discuss their project and receive a quotation
        (including volume discounts).
      </p>
      <h3>
        <span>
          I. Sample Preparation costs (per sample, minimum of four samples)
        </span>
      </h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AP-FLAG</td>
            <td>$130</td>
          </tr>
          <tr>
            <td>AP-BirA</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Lysate preparation and trypsin digest</td>
            <td>$140</td>
          </tr>
          <tr>
            <td>In-solution trypsin digest</td>
            <td>$55</td>
          </tr>
        </tbody>
      </table>
      <p>
        For other applications, please contact Cassandra Wong.
      </p>
      <h3>
        <span>II. Mass spectrometry costs per sample</span>
      </h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Identification  - AP-MS or BioID
            </td>
            <td>$120</td>
          </tr>
          <tr>
            <td>
              Quantification - DDA & DIA for AP-MS or BioID
            </td>
            <td>$240</td>
          </tr>
          <tr>
            <td>
              Identification  - cell lysate or cell fractionation
            </td>
            <td>$260</td>
          </tr>
          <tr>
            <td>
              Quantification - DDA & DIA for cell lysate or cell fractionation
            </td>
            <td>$510</td>
          </tr>
          <tr>
            <td>
              Quantification - DDA with TMT
            </td>
            <td>$380</td>
          </tr>
       </tbody>
      </table>
      <p>
        Customized mass spectrometry analyses are also available.
      </p>
      <p>
        All services include initial consultation and project planning with a
        proteomics manager, database searching including SAINT for protein
        interactions, full report and data consultation. For additional data
        analysis, the fee is $99/hour.
      </p>
      <h3>
        <span>III. Policies</span>
      </h3>
      <h4>Sample submission</h4>
      <p>
        Please contact Cassandra Wong (cwong@lunenfeld.ca) to inquire about our services and to discuss
        your specific project. Sample information is sent through email and
        samples may be dropped off in person or couriered.
      </p>
      <h4>Data tracking and analysis</h4>
      <p>
        The ProHits LIMS system is used to store sample information as well
        as raw and processed data in a safe and confidential manner.
        Customers will receive a summary of their results with the option to
        obtain their raw or processed data.
      </p>
    </div>
  </section>
);

export default Pricing;
