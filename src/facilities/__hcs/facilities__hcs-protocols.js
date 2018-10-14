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
