import React from 'react';

import Wrench from '../../assets/icons/wrench';

const Services = () => (
  <section
    className="facilities__section facilities__services"
    id="services"
  >
    <div className="facilities__section-inner">
      <h2>
        <Wrench />
        Services
      </h2>
      <h3>I. DeltaVision Elite microscopes</h3>
      <p>
        Our DeltaVision Elite (DV Elite) microscopes can handle most imaging applications,
        including wide-field fluorescence, time-lapse live cell imaging, multi-point cell
        tracking and differential interference contrast (DIC). Our DV Elite microscopes are
        equipped with fast sCMOS cameras and various Olympus objectives (from 10x to 100X)
        and precision environmental control for long live imaging.
      </p>
      <h3>II. DeltaVision OMX platform</h3>
      <p>
        Our DeltaVision OMX imaging platform is a state-of-the-art, multimode, super-resolution
        microscope system representing the next generation of optical microscopy. Our DeltaVision
        OMX offers simultaneous, fast, multi-channel, super-resolution imaging (120 nm lateral
        and 340 nm axial resolution, wavelength and optics dependent) using 3D structured
        illumination (3D-SIM), super fast wide-field acquisition, MONET localization microscopy
        and Fluorescence Resonance Energy Transfer (FRET) imaging. It supports fixed and live
        samples.
      </p>
      <p>
        As part of our service, we offer expertise in functional genomics screening using either
        siRNA or CRISPR reagents as well as automated high-resolution imaging using customized
        G-slides. Please contact us for more details.
      </p>
    </div>
  </section>
);

export default Services;
