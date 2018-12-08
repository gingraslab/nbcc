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
        These prices are guidelines only. Interested users should contact Brett Larsen
        (larsen@lunenfeld.ca) or Karen Colwill (colwill@lunenfeld.ca) to discuss their
        project and receive a quotation (including volume discounts).
      </p>
      <h3>
        <span>
          I. Affinity purification costs per sample (minimum of four samples)
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
            <td>$120</td>
          </tr>
          <tr>
            <td>AP-BirA</td>
            <td>$140</td>
          </tr>
        </tbody>
      </table>
      <p>
        Customized affinity purifications are also available.
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
              Identification - gel band or purified protein simple mixture
              (30 min gradient)
            </td>
            <td>$150</td>
          </tr>
          <tr>
            <td>
              Identification - cell lysate or cell fractionation complex mixture
              (90 min gradient)
            </td>
            <td>$250</td>
          </tr>
          <tr>
            <td>
              Identification - cell Lysate or cell fractionation complex mixture
              (extended 180 min gradient)
            </td>
            <td>$360</td>
          </tr>
          <tr>
            <td>
              Identification - AP-MS or BioID complex mixture (90 min gradient
              with extensive QC to avoid sample carryover)
            </td>
            <td>$360</td>
          </tr>
          <tr>
            <td>
              Quantification - DIA-SWATH MS on cell lysate or cell fractionation
              complex mixture (90 min gradient)
            </td>
            <td>$390</td>
          </tr>
          <tr>
            <td>
              Quantification - DIA-SWATH MS on AP-MS or BioID complex mixture
              (90 min gradient with extensive QC to avoid sample carryover)
            </td>
            <td>$500</td>
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
        analysis, the fee is $90/hour.
      </p>
      <h3>
        <span>III. Policies</span>
      </h3>
      <h4>Sample submission</h4>
      <p>
        Please contact Brett Larsen (larsen@lunenfeld.ca) or Karen Colwill
        (colwill@lunenfeld.ca) to inquire about our services and to discuss
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
