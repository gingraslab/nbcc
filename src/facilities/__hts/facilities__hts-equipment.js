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
      <div className="facilities__table_extra-wide">
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
              <td>disposible tip</td>
              <td>
                <ul>
                  <li>any liquid viscosity</li>
                  <li>custom scripting</li>
                  <li>96/384 dispense heads available</li>
                  <li>volumes 3-250ul</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                  <li>cherry picking</li>
                  <li>span 8</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Echo 555*</td>
              <td>Labcyte</td>
              <td>acoustic liquid transfer</td>
              <td>
                <ul>
                  <li>DMSO or aqueous solvents</li>
                  <li>cherry-picking</li>
                  <li>dose response titration</li>
                  <li>volumes: 2.5-1000nl</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>STARplus*</td>
              <td>Hamilton</td>
              <td>disposible tip</td>
              <td>
                <ul>
                  <li>any liquid viscosity</li>
                  <li>custom scripting</li>
                  <li>volumes 2-250ul</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                  <li>cherry picking</li>
                  <li>8 independent channel pipetting 96</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Scilone inL10</td>
              <td>Caliper</td>
              <td>fixed tip</td>
              <td>
                <ul>
                  <li>DMSO or aqueous solvents</li>
                  <li>low volume dispensing with 96 fixed tips</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Mutidrop Combi*</td>
              <td>Thermo</td>
              <td>vulk dispenser, non-contact</td>
              <td>
                <ul>
                  <li>variable liquid viscosities</li>
                  <li>bulk non-contact dispenser</li>
                  <li>volume: 0.5-2500ul</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Mutidrop nl*</td>
              <td>Thermo</td>
              <td>Low volume bulk dispener, non-contact</td>
              <td>
                <ul>
                  <li>variable liquid viscosities</li>
                  <li>bulk non-contact dispenser</li>
                  <li>volume: 0.05-50ul</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Multimek</td>
              <td>Beckman</td>
              <td>dedicated pin tool</td>
              <td>
                96/384 - 200nl slotted pins
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Plate readers</h3>
      <div className="facilities__table_extra-wide">
        <table className="facilities__table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Manufacturer</th>
              <th>Options</th>
              <th>Other info.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Envision</td>
              <td>Perkin Elmer</td>
              <td>
                <ul>
                  <li>fluorescence</li>
                  <li>luminescence</li>
                  <li>absorbance</li>
                  <li>fluorescence polarization</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>24</li>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>PHERAstar</td>
              <td>BMG</td>
              <td>
                <ul>
                  <li>fluorescence</li>
                  <li>luminescence</li>
                  <li>absorbance</li>
                  <li>fluorescence polarization</li>
                </ul>
              </td>
              <td />
            </tr>
            <tr>
              <td>FLUOstar</td>
              <td>BMG</td>
              <td>
                <ul>
                  <li>fluorescence</li>
                  <li>luminescence</li>
                  <li>absorbance</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>24</li>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                  <li>dual injectors</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Cytation 3*</td>
              <td>Biotek</td>
              <td>
                <ul>
                  <li>fluorescence</li>
                  <li>luminescence</li>
                  <li>absorbance</li>
                  <li>fluorescence polarization</li>
                  <li>cell cytometer</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>24</li>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Spectra Max</td>
              <td>Molecular Device</td>
              <td>
                <ul>
                  <li>fluorescence</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>24</li>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Gemni XS</td>
              <td>Molecular Device</td>
              <td>
                <ul>
                  <li>absorbance</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>24</li>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Plate washers</h3>
      <div className="facilities__table_extra-wide">
        <table className="facilities__table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Manufacturer</th>
              <th>Options</th>
              <th>Other info.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Embla</td>
              <td>Molecular Device</td>
              <td>
                <ul>
                  <li>192 pin manifold</li>
                  <li>wash both 96 and 384 well plates</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>ELx405</td>
              <td>BioTek</td>
              <td>
                <ul>
                  <li>96 well manifold</li>
                  <li>magnets for 96 well bead assays</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>ELx405U</td>
              <td>BioTek</td>
              <td>
                <ul>
                  <li>96 well manifold</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>AquaMax DW4</td>
              <td>Molecular Device</td>
              <td>
                <ul>
                  <li>96, 384 and 1536 dispense and aspiration heads</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Other</h3>
      <div className="facilities__table_extra-wide">
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
              <td>ASM Store</td>
              <td>Hamilton Robotics</td>
              <td>compound mangement</td>
              <td>
                <ul>
                  <li>-20C Freezer</li>
                  <li>400K+ Tube Capacity</li>
                  <li>1-D & 2-D Bar code reader</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>96</li>
                  <li>384</li>
                  <li>1536</li>
                  <li>matrix tubes</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Projet 3500HD</td>
              <td>3DSystems</td>
              <td>3D printer</td>
              <td>
                <ul>
                  <li>high resolution 3D printer</li>
                  <li>able to print materials that are Class VI certified</li>
                </ul>
              </td>
              <td />
            </tr>
            <tr>
              <td>Dimatix DMP-2831</td>
              <td>FujiFilm</td>
              <td />
              <td>
                <ul>
                  <li>Ink Jet technology</li>
                  <li>able to print out various substrates</li>
                </ul>
              </td>
              <td />
            </tr>
            <tr>
              <td>xCELLigence</td>
              <td>ACEA Biosciences</td>
              <td />
              <td>
                <ul>
                  <li>96 well plate format</li>
                  <li>reader is placed inside a CO2 incubator</li>
                </ul>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Equipment;
