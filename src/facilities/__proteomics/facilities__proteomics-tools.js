import React from 'react';

import Chart from '../../assets/icons/chart';
import LinkIcon from '../../assets/icons/link';

const Tools = () => (
  <section
    className="facilities__section facilities__tools"
    id="tools"
  >
    <div className="facilities__section-inner">
      <h2>
        <Chart />
        Analysis tools
      </h2>
      <h3>
        <span>I. Integrated within ProHits</span>
      </h3>
      <h4>Mass spectrometry data conversion</h4>
      <ul>
        <li>
          <a href="http://proteowizard.sourceforge.net/">
            <LinkIcon />
            ProteoWizard
          </a>
        </li>
      </ul>
      <h4>Mass spectrometry search engines</h4>
      <ul>
      <li>
          <a href="https://msfragger.nesvilab.org/">
            <LinkIcon />
            MSFragger
          </a>
      </li>
        <li>
          <a href="http://comet-ms.sourceforge.net/">
            <LinkIcon />
            Comet
          </a>
        </li>
        <li>
          <a href="http://www.matrixscience.com/search_intro.html">
            <LinkIcon />
            Mascot
          </a>
        </li>
        <li>
          <a href="http://proteomics.ucsd.edu/software-tools/ms-gf/">
            <LinkIcon />
            MSGF+
          </a>
        </li>
        <li>
          <a href="https://www.thegpm.org/tandem/">
            <LinkIcon />
            X!Tandem
          </a>
        </li>
      </ul>
      <h4>Mass spectrometry data analysis</h4>
      <ul>
        <li>
          <a href="http://www.openswath.org">
            <LinkIcon />
            OpenSWATH
          </a>
        </li>
        <li>
          <a href="http://saint-apms.sourceforge.net/Main.html">
            <LinkIcon />
            SAINT
          </a>
        </li>
        <li>
          <a href="http://tools.proteomecenter.org/wiki/index.php?title=Main_Page">
            <LinkIcon />
            Trans-Proteomics Pipeline (TPP), including iProphet
          </a>
        </li>
      </ul>
      <h4>DIA quantitation tools</h4>
      <ul>
        <li>
          <a href="https://sourceforge.net/projects/diaumpire/">
            <LinkIcon />
            DIA-Umpire
          </a>
        </li>
        <li>
          <a href="https://sourceforge.net/projects/mapdia/">
            <LinkIcon />
            mapDIA
          </a>
        </li>
        <li>
          <a href="http://proteomics.ucsd.edu/software-tools/msplit-dia/">
            <LinkIcon />
            MSPLIT-DIA
          </a>
        </li>
        <li>
          <a href="https://github.com/vdemichev/DiaNN">
            <LinkIcon />
            DIA-NN
          </a>
        </li>
      </ul>
      <h3>
        <span>II. ProHits-compatible repositories and tools</span>
      </h3>
      <h4>Mass spectrometry raw file storage</h4>
      <ul>
        <li>
          <a href="https://massive.ucsd.edu/ProteoSAFe/static/massive.jsp">
            <LinkIcon />
            MassIVE
          </a>
        </li>
      </ul>
      <h4>Protein interaction repositories</h4>
      <ul>
        <li>
          <a href="https://thebiogrid.org/">
            <LinkIcon />
            BioGRID
          </a>
        </li>
        <li>
          <a href="https://www.ebi.ac.uk/intact/">
            <LinkIcon />
            IntAct
          </a>
        </li>
        <li>
          <a href="http://irefindex.org/wiki/index.php?title=iRefIndex">
            <LinkIcon />
            iRefIndex-DIA
          </a>
        </li>
      </ul>
      <h4>Data visualization</h4>
      <ul>
        <li>
          <a href="http://www.cytoscape.org/">
            <LinkIcon />
            Cytoscape
          </a>
        </li>
        <li>
          <a href="https://prohits-viz.org">
            <LinkIcon />
            ProHits-viz
          </a>
        </li>
      </ul>
      <h4>AP-MS and BioID control data repository</h4>
      <ul>
        <li>
          <a href="http://www.crapome.org/">
            <LinkIcon />
            CRAPome
          </a>
        </li>
      </ul>
      <h4>BioID Proximity Map of a Human Cell</h4>
      <ul>
        <li>
          <a href="https://humancellmap.org//">
            <LinkIcon />
            Human Cell Map
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Tools;
