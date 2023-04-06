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
      <h4>Nikon BioPipeline</h4>
      <p>
      The Biopipeline is a line scanning confocal platform based on Nikon’s Eclipse fully-motorized,
      inverted Ti2 microscope and the A1R-HD25 hybrid confocal system with the world’s largest 25 mm
      field of view.  It features two scanners: a low-noise galvano scanner, e.g. 10 frames per second
      (fps) at 512*512 pixels and a fast resonant scanner, e.g. 30 fps at the same field-of-view.
      </p>
      <p>
      It is equipped with a Perfect Focus System for long-term focus maintenance, a high speed,
      high stability motorized XY stage and Z-drive, and a water immersion dispenser for long-term
      automated imaging using high resolution water immersion objectives.
      </p>
      <p>
      For confocal imaging, the Nikon BioPipeline is equipped with a 4-line laser of wavelengths 405, 488, 561, 640 nm,
      and the following emission detection wavelengths:
      </p>
      <li>
      447/57 495DCXR 1FW (405) – for DAPI-like emission detection
      </li>
      <li>
      521/42 562DCXR 2FW (488) – for GFP-like emission detection
      </li>
      <li>
      600/45 652DCXR + 650LP (561/640) – for red and far red emission detection
      </li>
      <p>
      Two high-sensitivity PMT and two GaAsP PMT detectors enable simultaneous image acquisition in
      five channels (four fluorescent and one transmitted light for brightfield imaging). An 8-line
      epifluorescence light source enables observation by eye in the following channels: DAPI, CFP, GFP,
      YFP, Red and Far-red.
      </p>
      <p>
      It can image regular glass microscope slides, microscope chambers and multi-well glass or
      plastic-bottom plates. Environmental stability of live imaging is maintained by a full imaging
      enclosure combined with a 44 multi-well plate capacity incubator (with automated plate handling).
      </p>
      <h4>IN Cell 6000</h4>
      <p>
        The IN Cell Analyzer 6000 is a high-end, laser-based, line-scanning confocal
        imaging platform. It utilizes a novel and proprietary optical engine to
        achieve both wide field and confocal imaging capabilities in one system. The
        Iris-like variable aperture and next-generation scientific CMOS camera enable
        high quality imaging at high speeds without compromising data quality. This
        instrument is designed for high-throughput imaging and assay development. It
        can be used for live cell and endpoint assays as well as 3-D imaging, co-localization
        studies and low signal assays.
      </p>
      <p>
        Our facility has two IN Cell 6000 microscopes, equipped with 10x, 20x, 40x and
        60x objectives. Both microscopes are also equipped with temperature and environmental
        controls, enabling live-cell screens.
      </p>
      <h4>Celígo</h4>
      <p>
        Celígo is a low-resolution high-throughput microscope, equipped with
        LED-based light sources (brightfield and 3 fluorescent channels). Uniform
        well illumination and large-chip CCD camera allow users to image entire wells
        at a high-speed. Built-in image analysis tools allow performing on-the-fly
        analysis in a variety of biological applications (cell/colony counting, migrations
        assays, expression analysis and many others).
      </p>
      <h4>Incucyte S3</h4>
      <p>
      The Incucyte S3 is equipped with high definition phase contrast optics and two fluorescent
      wavelengths (red: ex565-605nm, em625-705nm; green: ex440-480nm, em504-544nm), and with the
      following three objectives on an automated turret: 4x PLAN, 10x PLAN FLUOR, and 20x PLAN
      FLUOR. It can accommodate up to six microplates at a time.
      </p>
    </div>
  </section>
);

export default Equipment;
