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
              <th>Features</th>
              <th>Formats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Biomek FX (x2)</td>
              <td>Beckman</td>
              <td>disposible tip</td>
              <td>
                <ul>
                  <li>versatile handling of a broad range of liquid viscosity</li>
                  <li>custom scripting</li>
                  <li>96- and 384-channel dispense heads</li>
                  <li>accurate volumes in the 2-200ml range</li>
                  <li>routinely used to seed cells and dispense reagents</li>
                </ul>
              </td>
              <td>
                96, 384, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Biomek NX</td>
              <td>Beckman</td>
              <td>disposible tip</td>
              <td>
                <ul>
                  <li>same features as the Biomek FX but with a more compact footprint</li>
                  <li>equipped with 96 and 384 heads</li>
                </ul>
              </td>
              <td>
                96, 384, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Echo 555</td>
              <td>Labcyte</td>
              <td>acoustic liquid transfer, touchless technology (no tips required)</td>
              <td>
                <ul>
                  <li>DMSO or aqueous solvents</li>
                  <li>can handle different liquid viscosity</li>
                  <li>cherry-pick applications</li>
                  <li>dose response titration</li>
                  <li>accurate volume range: 2.5-1000nl</li>
                </ul>
              </td>
              <td>
                96, 384, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>STARplus</td>
              <td>Hamilton</td>
              <td>disposible tip</td>
              <td>
                <ul>
                  <li>can handle a broad range of liquid viscosity</li>
                  <li>custom scripting</li>
                  <li>cherry picking applications</li>
                  <li>can accommodate a large variety of source containers</li>
                  <li>accurate volume range: 2-250ml</li>
                </ul>
              </td>
              <td>
                96, 384, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Mutidrop Combi (x2)</td>
              <td>ThermoFisher</td>
              <td>bulk dispenser, non-contact</td>
              <td>
                <ul>
                  <li>broad range of liquid viscosities</li>
                  <li>reagent dispensing</li>
                  <li>cell seeding</li>
                  <li>accurate volume range: 0.5-2500ul</li>
                </ul>
              </td>
              <td>
                96, 384, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Mutidrop NL (x2)</td>
              <td>ThermoFisher</td>
              <td>low volume dispenser, non-contact</td>
              <td>
                <ul>
                  <li>broad range of liquid viscosities</li>
                  <li>bulk non-contact dispenser</li>
                  <li>volume: 0.05-50ul</li>
                </ul>
              </td>
              <td>
                96, 384, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Multimek</td>
              <td>Beckman</td>
              <td>dedicated pin tool</td>
              <td>
                drug delivery by 200nl slotted pins
              </td>
              <td>
                96- and 384-well microplates
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
              <th>Type</th>
              <th>Features</th>
              <th>Formats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Envision</td>
              <td>Perkin Elmer</td>
              <td>
                <ul>
                  <li>Filter-based Absorbance and Fluorescence</li>
                  <li>Laser-based Luminescence</li>
                  <li>AlphaScreen</li>
                </ul>
              </td>
              <td>
                multimode options (filter-based):
                <ul>
                  <li>Absorbance</li>
                  <li>Fluorescence Intensity</li>
                  <li>Time-Resolved Fluorescence</li>
                  <li>TR-FRET</li>
                  <li>Luminescence</li>
                </ul>
              </td>
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>PHERAstar 1</td>
              <td>BMG LABTECH</td>
              <td>
                <ul>
                  <li>multi-mode signal detection</li>
                  <li>simultaneous dual emission signal capture</li>
                </ul>
              </td>
              <td>
                multimode options (filter-based):
                <ul>
                  <li>Absorbance (also by monochromator)</li>
                  <li>Fluorescence Intensity</li>
                  <li>Time-Resolved Fluorescence</li>
                  <li>TR-FRET</li>
                  <li>Luminescence</li>
                  <li>Alphascreen</li>
                </ul>
                injectors available
              </td>
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>PHERAstar 2</td>
              <td>BMG LABTECH</td>
              <td>
                <ul>
                  <li>multi-mode signal detection</li>
                  <li>simultaneous dual emission signal capture</li>
                </ul>
              </td>
              <td>
                multimode options (filter-based):
                <ul>
                  <li>Absorbance</li>
                  <li>Fluorescence Intensity</li>
                  <li>Time-Resolved Fluorescence</li>
                  <li>TR-FRET</li>
                  <li>Luminescence</li>
                  <li>Alphascreen</li>
                </ul>
                injectors available
              </td>
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Cytation 3</td>
              <td>Biotek</td>
              <td>
                <ul>
                  <li>digital microsopy and multimode detection</li>
                  <li>monochromator</li>
                </ul>
              </td>
              <td>
                multimode options:
                <ul>
                  <li>Absorbance (monochromator)</li>
                  <li>Fluorescence Intensity (monochromator)</li>
                  <li>Luminescence</li>
                </ul>
              </td>
              <td>
                6-384-well microplates, slides, dishes, TC flasks
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
              <th>Features</th>
              <th>Formats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>405 LS (x2)</td>
              <td>Biotek</td>
              <td>
                applicable to magnetic bead assay, large variety of flow rates
              </td>
              <td>
                96- and 384-well microplates
              </td>
            </tr>
            <tr>
              <td>Bluewasher</td>
              <td>Blue Cat Bio</td>
              <td>
                centrifugation instead of aspiration to remove liquid
              </td>
              <td>
                24-, 96-, 384-, 1536-well microplates
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
              <th>Features</th>
              <th>Formats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Robotic sample storage system (x2)</td>
              <td>Hamilton Company</td>
              <td>Compound Management</td>
              <td>
                <ul>
                  <li>robotic freezer</li>
                  <li>400K+ sample capacity</li>
                  <li>1-D & 2-D Bar code reader</li>
                </ul>
              </td>
              <td>
                96- and 384-well microplates
              </td>
            </tr>
            <tr>
              <td>CyBi®-Print Vario</td>
              <td>Analytik Jena</td>
              <td>Barcode printer</td>
              <td>
                <ul>
                  <li>1-D label application</li>
                  <li>equipped with microplate stackers for automation</li>
                </ul>
              </td>
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Microplate Centrifuge</td>
              <td>Agilent</td>
              <td>Robot-accessible, automated</td>
              <td>
                used to spin microplates for subsequent, robot-assisted manipulation of reagents
              </td>
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>X-Peel®</td>
              <td>Brooks Life Sciences</td>
              <td>Automated plate seal removal</td>
              <td />
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>ALPS 3000™</td>
              <td>ThermoFisher</td>
              <td>Automated Microplate Heat Sealer</td>
              <td>can seal 10 microplates/minute</td>
              <td>
                24-, 96-, 384-, 1536-well microplates
              </td>
            </tr>
            <tr>
              <td>Capit-All™</td>
              <td>ThermoFisher</td>
              <td>Screw Cap Tube Capper/Decapper</td>
              <td>capping/decapping of Matrix™ and Nunc™</td>
              <td>
                ScrewTop tubes (all at once) in 24-, 48-, and 96-well racks
              </td>
            </tr>
            <tr>
              <td>DeCapper</td>
              <td>Hamilton Company</td>
              <td>Screw Cap Tube Capper/Decapper</td>
              <td>capping/decapping of Matrix™ and Nunc™ Tubes</td>
              <td>
                ScrewTop tubes (12 per round) in 24-, 48-, and 96-well racks
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Equipment;
