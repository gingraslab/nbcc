import React from 'react';

import Server from '../../assets/icons/server';

const Equipment = () => (
  <section
    className="facilities__section facilities__equipment"
    id="equipment"
  >
    <div className="facilities__section-inner">
      <h2>
        <Server />
        Equipment
      </h2>
      <h3>Liquid handlers</h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Manufacturer</th>
            <th>Type</th>
            <th>Options</th>
            <th>Other info.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Biomek FX</td>
            <td>Beckman</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Echo 555*</td>
            <td>Labcyte</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>STARplus*</td>
            <td>Hamilton</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Scilone inL10</td>
            <td>Caliper</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Mutidrop Combi*</td>
            <td>Thermo</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Mutidrop nl*</td>
            <td>Thermo</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Multimek</td>
            <td>Beckman</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h3>Plate readers</h3>
      <h3>Plate washers</h3>
      <h3>Other</h3>
    </div>
  </section>
);

export default Equipment;
