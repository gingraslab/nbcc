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
      
      <h3>III.  Nikon Ti2E/A1R-Multiphoton System</h3>
      <p>
      The Ti2E/A1R-Multiphoton is Nikon’s newest confocal microscope equipped with a multiphoton 
      imaging system. In its standard confocal mode, the Ti2E/A1R has 6 laser lines controlled by 
      the A1R hybrid scan head capable of switching between Galvano and Resonant scan modes to balance 
      resolution and speed. The A1-DUG-2 multidetector unit simultaneously detects 4 fluorescence channels 
      with filters to detect DAPI, CFP, GFP, YFP, Red and Far red fluorophores. Additionally, a DUT diascopic 
      detector allows transmitted light imaging. Air and water- and oil-immersion objectives from 10x to 60x are 
      available for most imaging needs. The tunable Chameleon Discovery multiphoton laser permits high-resolution 
      imaging of thick specimens including organoids and tissues. The multiphoton excitation is paired with a four-channel 
      episcopic ultra-high sensitivity non-descanned detector for optimal signal capture.  Three multiphoton-specific objectives 
      are available. A Tokai Hit stage top incubator system allows live imaging using any modality.
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
