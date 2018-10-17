import React from 'react';

import Books from '../../assets/icons/books';

const Protocols = () => (
  <section
    className="facilities__section facilities__protocols"
    id="protocols"
  >
    <div className="facilities__section-inner">
      <h2>
        <Books />
        Protocols
      </h2>
      <h3>Plate/slide selection</h3>
      <ul>
        <li>
          Celígo and IN Cell 6000 can image virtually any multi-well plate that fits
          SBS specifications (i.e. same size as a regular 6-well plate). Currently there
          are over 100 plate types in the instruments&apos; database and new plate types can
          be added upon request.
        </li>
        <li>
          It is important to specify what kind of plates (brand and catalogue number)
          are going to be used in an experiment.
        </li>
        <li>
          Some manufacturers supply technical drawing of the plates, which are very
          useful to generate a new plate profile.
        </li>
        <li>
          Please remember that use of high-resolution objectives requires special
          thin-bottom plates. Cell growth area can be either made of glass or special plastic.
        </li>
        <li>
          Regular 1x3&quot; glass slides as well as LabTek Chambered Coverglass can be imaged
          in both imagers, however it is not recommended to use the slides for
          high-throughput applications.
        </li>
        <li>
          IN Cell 6000 can be used as a slide imager (at 4x, 10x, 20x or 60x magnification)
          to output a stitched image of the entire sample.
        </li>
      </ul>
      <h3>Fluorophore selection</h3>
      <p>
        Below are the most popular fluorescent dyes and their compatibility with the
        facility&apos;s microscopes.
      </p>
      <table className="facilities__table">
        <thead>
          <tr>
            <th className="facilities__protocols-table-first-col" />
            <th />
            <th colSpan="2">Compatibility</th>
          </tr>
          <tr>
            <th className="facilities__protocols-table-first-col" />
            <th>Fluorophore</th>
            <th>Celígo</th>
            <th>IN Cell 6000</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="facilities__hcs-table_blue" rowSpan="2" />
            <td>DAPI</td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>Hoechst</td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_green" rowSpan="4" />
            <td>AlexaFluor® 488</td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>GFP</td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>Calcein</td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>
              FITC
              <sup>1</sup>
            </td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_yellow" rowSpan="2" />
            <td>AlexaFluor® 514</td>
            <td>
              Good
              <sup>2</sup>
            </td>
            <td>
              Good
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>YFP</td>
            <td>
              Good
              <sup>2</sup>
            </td>
            <td>
              Good
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_red" rowSpan="9" />
            <td>AlexaFluor® 532</td>
            <td>
              Fair
              <sup>2</sup>
            </td>
            <td>
              Fair
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Propidium Iodide (PI)</td>
            <td>Perfect</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>AlexaFluor® 546</td>
            <td>Good</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>AlexaFluor® 555</td>
            <td>Good</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>AlexaFluor® 568</td>
            <td>Good</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>AlexaFluor® 594</td>
            <td>Fair</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>Texas Red</td>
            <td>Fair</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>DRAQ5</td>
            <td>N/A</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>Cy5</td>
            <td>N/A</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_far-red" rowSpan="2" />
            <td>AlexaFluor® 633</td>
            <td>N/A</td>
            <td>Perfect</td>
          </tr>
          <tr>
            <td>AlexaFluor® 647</td>
            <td>N/A</td>
            <td>Perfect</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <sup>1</sup>
              If possible replace with AlexaFluor® 488.
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <sup>2</sup>
              Not in combination with red dye.
            </td>
          </tr>
        </tfoot>
      </table>
      <p>
        If fluorophore of interest is missing, please contact the facility or use
        Fluorescence SpectraViewer, using the following excitation/emission information:
      </p>
      <table className="facilities__table">
        <thead>
          <tr>
            <th className="facilities__protocols-table-first-col" rowSpan="2">Channel</th>
            <th colSpan="3">Celígo</th>
            <th colSpan="2">IN Cell 6000</th>
          </tr>
          <tr>
            <th><b>Excitation</b></th>
            <th><b>Dichroic</b></th>
            <th><b>Emission</b></th>
            <th><b>Laser</b></th>
            <th><b>Emission</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="facilities__hcs-table_blue">Blue</td>
            <td>377 / 50</td>
            <td>409</td>
            <td>470 / 22</td>
            <td>405</td>
            <td>455 / 50</td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_green">Green</td>
            <td>483 / 32</td>
            <td>506</td>
            <td>536 / 40</td>
            <td>488</td>
            <td>525 / 20</td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_red">Red</td>
            <td>531 / 40</td>
            <td>593</td>
            <td>629 / 53</td>
            <td>561</td>
            <td>605 / 52</td>
          </tr>
          <tr>
            <td className="facilities__hcs-table_far-red">Far-red</td>
            <td colSpan="3">N/A</td>
            <td>640</td>
            <td>706.5 / 72</td>
          </tr>
        </tbody>
      </table>
      <h3>Sample preparation</h3>
      <ul>
        <li>
          After fixation/staining is done, wells of a plate need to be filled with PBS.
          Wells have to be 50-80% full (e.g. if well volume is 200 ul, it has to be filled
          with 100 - 160 ul of PBS).
        </li>
        <li>
          Plates need to have clean bottom surfaces free of scratches, dust etc. Certain
          plates have a removable sticker at the bottom. Please do not remove the sticker
          prior to imaging.
        </li>
        <li>
          Before bringing the plates to the facility, they have to be sealed either with
          aluminum foil seals or with Parafilm. Plates have to then be placed in Ziploc®
          resealable bag(s).

        </li>
        <li>
          All the objectives are air objectives, so surface of plates/slides should be oil-free.
        </li>
      </ul>
      <h3>Live imaging</h3>
      <ul>
        <li>
          IN Cell 6000 allows for long-term live cell imaging. Heated stage and heated lid
          with CO2 supply keep cells in incubator-like conditions. Heated lid fits any
          SBS format plate.
        </li>
        <li>
          It is recommended to use gas-permeable membranes for imaging longer than 4 hours.
          Membranes are available at the Centre.
        </li>
        <li>
          Celígo is not equipped with an environmental chamber to keep cells in the optimal
          conditions, however temperature inside the instrument is around 37°C, thus minimizing
          stress on live cells.
        </li>
      </ul>
    </div>
  </section>
);

export default Protocols;
