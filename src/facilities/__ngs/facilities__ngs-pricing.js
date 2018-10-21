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
        These prices are guidelines only. Interested users should contact Kin Chan
        (kin@lunenfeld.ca) to discuss their project to determine which library preparation
        and sequencing analysis methods are most appropriate. Once the project is defined,
        users will receive a quotation including volume discounts where applicable.
      </p>
      <h3>
        <span>
          I. Library Preparation
        </span>
      </h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Kit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TruSeq Stranded mRNA Library Preparation Kit</td>
            <td>$227</td>
          </tr>
          <tr>
            <td>TruSeq Stranded Total Library Preparation kit</td>
            <td>$326</td>
          </tr>
          <tr>
            <td>TruSeq small RNA Library Preparation Kit</td>
            <td>$308</td>
          </tr>
          <tr>
            <td>Ultra Low or Single Cell RNA-Seq Library Preparation kit</td>
            <td>$472</td>
          </tr>
        </tbody>
      </table>
      <h3>
        <span>
          II. Next generation sequencing
        </span>
      </h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Unit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HiSeq® 3000 SR (50 cycles)</td>
            <td>lane</td>
            <td>$1,650</td>
          </tr>
          <tr>
            <td>HiSeq® 3000/4000 SBS Kit PE (150 cycles)</td>
            <td>lane</td>
            <td>$2,640</td>
          </tr>
          <tr>
            <td>HiSeq® 3000 PE (300 cycles)</td>
            <td>lane</td>
            <td>$3,520</td>
          </tr>
          <tr>
            <td>NextSeq® 500 High Output (75 cycles)</td>
            <td>run</td>
            <td>$2,420</td>
          </tr>
          <tr>
            <td>NextSeq® 500 High Output (150 cycles)</td>
            <td>run</td>
            <td>$4,400</td>
          </tr>
        </tbody>
      </table>
      <h3>
        <span>
          III. Policies
        </span>
      </h3>
      <p>
        For ongoing projects, users should contact the sequencing manager Kin Chan
        (kin@lunenfeld.ca).
      </p>
    </div>
  </section>
);

export default Pricing;
