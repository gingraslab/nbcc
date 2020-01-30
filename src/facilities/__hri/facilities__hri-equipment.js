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
      <h3>Elite Delta-Vision high-resolution optical microscopes</h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TruLight™</td>
            <td>Illumination System</td>
          </tr>
          <tr>
            <td>InsightSSI™</td>
            <td>Optimized solid state illumination</td>
          </tr>
          <tr>
            <td>UltimateFocus™</td>
            <td>Hardware based autofocus</td>
          </tr>
          <tr>
            <td>Microtiter Stage</td>
            <td>
              For customized scanning of multi-well plates in x, y and z for
              increased image collection capabilities
            </td>
          </tr>
          <tr>
            <td>Environmental Chamber</td>
            <td>
              Precise temperature control to improve cell viability and minimize thermal
              drift for superior live cell imaging
            </td>
          </tr>
          <tr>
            <td>Olympus objectives</td>
            <td>Multiple objective selection</td>
          </tr>
        </tbody>
      </table>
      <p>
        DeltaVision Elites can handle most imaging applications, including wide-field
        fluorescence, time-lapse live cell imaging, multi-point cell tracking, total internal
        reflection fluorescence (TIRF), fluorescence resonance energy transfer (FRET),
        photokinetics, and differential interference contrast (DIC).
      </p>
      <h3>OMX Blaze 4 super-resolution optical microscope</h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blaze™ SIM Module</td>
            <td>Ultra-fast, structured illumination module</td>
          </tr>
          <tr>
            <td>InsightSSI™</td>
            <td>Optimized solid state illumination</td>
          </tr>
          <tr>
            <td>UltimateFocus™</td>
            <td>Hardware based autofocus</td>
          </tr>
          <tr>
            <td>Multi-Line TIRF</td>
            <td>Chromatically corrected Total Internal Reflection Fluorescence microscopy</td>
          </tr>
          <tr>
            <td>DeltaVision Monet™</td>
            <td>Localization microscopy technique</td>
          </tr>
        </tbody>
      </table>
      <p>
        DeltaVision OMX supports multiple advanced and super-resolution imaging options,
        including high-speed four-colour imaging, fast 3D-SIM super resolution, localization
        imaging, and total internal reflection fluorescence (TIRF) imaging with photokinetic
        option.
      </p>
      <h3>Nikon Ti2E/A1R-Multiphoton System</h3>
      <table className="facilities__table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chameleon Discovery IR Laser</td>
            <td>Tunable from 660 to 1320 nm for deep section imaging</td>
          </tr>
          <tr>
            <td>Episcopic GaAsP Detector</td>
            <td>4 channel non-descanned detector for multiphoton detection</td>
          </tr>
          <tr>
            <td>LUN-V-6 Laser-line Unit</td>
            <td>Solid state acousto-optic tunable filter (AOTF)-controlled laser lines - 405 to 604 nm</td>
          </tr>
          <tr>
            <td>A1-DUG-2 GaAsP Multi Detector</td>
            <td>
            4 channel simultaneous detection with filter sets for DAPI, CFP, GFP, YFP, Red, Far Red
            </td>
          </tr>
          <tr>
            <td>DUT Diascopic Dectector</td>
            <td>
            PMT for brightfield imaging, simultaneous detection with DUG-2 detector
            </td>
          </tr>
          <tr>
            <td>A1R Scanhead</td>
            <td>Switchable Galvano and Resonant scanning up to 24 fps in Galvano mode and 420 fps 
              in Resonant mode
            </td>
          </tr>
          <tr>
            <td>Tokai Hit Stage-Top Incubator</td>
            <td>Complete temperature, CO2 and humidity control
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        This inverted two-photon/laser-scanning microscope is ideal for imaging fixed or live tissue.
      </p>
    </div>
  </section>
);

export default Equipment;
