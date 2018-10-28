import React from 'react';

import Chart from '../../assets/icons/chart';
import R from './assets/R.svg';
import SMARTKEGG from './assets/SMART_to_KEGG_mapper.png';
import SMARTKEGG2x from './assets/SMART_to_KEGG_mapper2x.png';
import SMARTKEGG3x from './assets/SMART_to_KEGG_mapper3x.png';

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
      <h3>R</h3>
      <div>
        <img
          alt="R"
          height={50}
          src={R}
          width={65}
        />
        <p>
          <a href="https://www.r-project.org/about.html">R</a>
          {' '}
          is a language and environment for statistical computing and graphics.
          We use the wide variety of statistical (linear and nonlinear modelling,
          classical statistical tests, time-series analysis, classification, clustering,
          ...) and graphical techniques that R provides to custom analyze the data for
          different projects.
        </p>
      </div>
      <h3>CoreFlow</h3>
      <div>
        <p>
          To organize and analyze data generated from high-throughput screening,
          we use the in-house developed CoreFlow pipepline.
          {' '}
          <a href="http://coreflow.mshri.on.ca/TestLab/CoreFlow/index.php">CoreFlow</a>
          {' '}
          provides us with a framework to manage data in real time. Data is uploaded
          into a relational database (MySQL), and custom scripts can be created in
          high-level languages such as R, Python, or Perl for processing,
          correcting and modeling this data. CoreFlow organizes these scripts into
          project-specific pipelines, tracks interdependencies between related tasks,
          and enables the generation of summary reports as well as publication-quality images.
        </p>
      </div>
      <h3>SMART to KEGG mapper</h3>
      <div className="facilities__hcs-kegg">
        <img
          alt="KEGG pathway"
          height={251}
          src={SMARTKEGG}
          srcSet={`
            ${SMARTKEGG} 1x,
            ${SMARTKEGG2x} 2x,
            ${SMARTKEGG3x} 3x
          `}
          width={333}
        />
        <p>
          SMART to KEGG mapper is an in-house developed web-based tool that shows what
          library components can be mapped to KEGG pathways.
        </p>
      </div>
    </div>
  </section>
);

export default Tools;
