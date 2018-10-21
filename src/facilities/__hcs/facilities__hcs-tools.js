import React from 'react';

import Chart from '../../assets/icons/chart';
import InCellDeveloper from './assets/InCellDeveloper.svg';
import Matlab from './assets/Matlab.png';
import Matlab2x from './assets/Matlab2x.png';
import Matlab3x from './assets/Matlab3x.png';
import Volocity from './assets/Volocity.png';
import Volocity2x from './assets/Volocity2x.png';
import Volocity3x from './assets/Volocity3x.png';

const Tools = () => (
  <section
    className="facilities__section facilities__tools"
    id="tools"
  >
    <div className="facilities__section-inner facilities__hcs-software">
      <h2>
        <Chart />
        Analysis tools
      </h2>
      <h3>Columbus / Acapella (Perkin-Elmer)</h3>
      <div>
        <p>
          <a href="http://www.perkinelmer.ca/en-ca/pages/020/cellularimaging/products/columbus.xhtml">
            Columbus™
          </a>
          {' '}
          is a universal image data storage and analysis system that enables access to stored images
          via a regular internet browser. The Columbus system lets scientists remotely access, view,
          annotate and analyze images. Columbus is based on
          {' '}
          <a href="http://www.openmicroscopy.org/site/products/omero">
            OMERO server
          </a>
          {' '}
          and therefore supports a variety of existing microscope file formats. Integrated image
          analysis tools are intuitive and efficient. PhenoLOGIC™ machine learning technology
          provides an easy way to classify cells or subcellular regions within a given data-set.
        </p>
      </div>
      <h3>Matlab (Mathworks)</h3>
      <div>
        <img
          alt="Matlab"
          height={50}
          src={Matlab}
          srcSet={`
            ${Matlab} 1x,
            ${Matlab2x} 2x,
            ${Matlab3x} 3x
          `}
          width={151}
        />
        <p>
          <a href="http://www.mathworks.com/products/matlab">
            MATLAB®
          </a>
          {' '}
          is a high-level language and interactive environment for numerical computation,
          visualization, and programming. MATLAB allows the analysis of numerical data
          (including images) and further development of algorithms for simple and advanced
          applications. The language, tools, built-in math functions as well as scripts written
          by end-users enable efficient solutions to any specific task.
        </p>
      </div>
      <h3>IN Cell Investigator / IN Cell Developer</h3>
      <div>
        <img
          alt="In Cell Developer"
          height={66.2}
          src={InCellDeveloper}
          width={151}
        />
        <p>
          <a href="https://www.gelifesciences.com/gehcls_images/GELS/Related%20Content/Files/1334667184731/litdoc28992632_20120420130759.pdf">
            IN Cell Investigator
          </a>
          {' '}
          is a highly adaptable image analysis software tool that requires no specialist
          programming knowledge, with flexibility linked not only to the analysis, but also
          to the experience of the user. In combination with Spotfire™ DecisionSite™ analytics
          software, IN Cell Investigator contains a comprehensive set of tools for analyzing and
          visualizing data from high-content assays. When used in conjunction with IN Cell Miner
          data management software, IN Cell Investigator offers an integrated solution for analysis,
          management, and visualization.
        </p>
      </div>
      <h3>Volocity (Perkin-Elmer)</h3>
      <div>
        <div className="facilities__hcs-volocity">
          <img
            alt="Volocity"
            height={80}
            src={Volocity}
            srcSet={`
              ${Volocity} 1x,
              ${Volocity2x} 2x,
              ${Volocity3x} 3x
            `}
            width={58}
          />
        </div>
        <p>
          <a href="http://www.perkinelmer.ca/en-CA/pages/020/cellularimaging/products/volocity.xhtml">
            Volocity®
          </a>
          {' '}
          provides all the tools you need to visualize, analyze and validate 3D fluorescence
          images from a wide range of confocal microscopy, widefield and high content screening
          systems and is fully integrated for a seamless user experience.
        </p>
      </div>
    </div>
  </section>
);

export default Tools;
