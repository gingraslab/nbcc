import React from 'react';

import File from '../assets/icons/file-blank';
import Flask from '../assets/icons/flask';
import LinkIcon from '../assets/icons/link';
import Pdf from '../assets/icons/pdf';

import CpSTV2 from './assets/reagents/plasmids/pSTV2 C-BirA pDest.pdf';
import NpSTV2 from './assets/reagents/plasmids/pSTV2 N-BirA pDest.pdf';
import CpSTV6 from './assets/reagents/plasmids/pSTV6 C-BirA pDest.pdf';
import NpSTV6 from './assets/reagents/plasmids/pSTV6 N-BirA pDest.pdf';
import CpSTV5 from './assets/reagents/plasmids/pSTVH5 C-BirA pDest.pdf';
import NpSTV5 from './assets/reagents/plasmids/pSTVH5 N-BirA pDest.pdf';
import CpSTV7 from './assets/reagents/plasmids/pSTVH7 C-BirA pDest.pdf';
import NpSTV7 from './assets/reagents/plasmids/pSTVH7 N-BirA pDest.pdf';
import CpSTV8 from './assets/reagents/plasmids/pSTVH8 C-BirA pDest.pdf';
import NpSTV8 from './assets/reagents/plasmids/pSTVH8 N-BirA pDest.pdf';

import CpSTV2seq from './assets/reagents/plasmids/pSTV2 C-BirA pDest.gb';
import NpSTV2seq from './assets/reagents/plasmids/pSTV2 N-BirA pDest.gb';
import CpSTV6seq from './assets/reagents/plasmids/pSTV6 C-BirA pDest.gb';
import NpSTV6seq from './assets/reagents/plasmids/pSTV6 N-BirA pDest.gb';
import CpSTV5seq from './assets/reagents/plasmids/pSTVH5 C-BirA pDest.gb';
import NpSTV5seq from './assets/reagents/plasmids/pSTVH5 N-BirA pDest.gb';
import CpSTV7seq from './assets/reagents/plasmids/pSTVH7 C-BirA pDest.gb';
import NpSTV7seq from './assets/reagents/plasmids/pSTVH7 N-BirA pDest.gb';
import CpSTV8seq from './assets/reagents/plasmids/pSTVH8 C-BirA pDest.gb';
import NpSTV8seq from './assets/reagents/plasmids/pSTVH8 N-BirA pDest.gb';

import HDMB117Spike from './assets/reagents/plasmids/HDM_B.1.1.7_Spike Map.pdf';
import HDMB1351Spike from './assets/reagents/plasmids/HDM_B.1.351_Spike Map.pdf';
import HDMB16172Spike from './assets/reagents/plasmids/HDM_B.1.617.2_Spike Map.pdf';
import HDMP1Spike from './assets/reagents/plasmids/HDM_P.1_Spike Map.pdf';
import HDMWuhan1Spike from './assets/reagents/plasmids/HDM_Wuhan-1_Spike Map.pdf';
import pTwistAmpB117Spike from './assets/reagents/plasmids/pTwist-Amp_B.1.1.7_Spike Map.pdf';
import pTwistAmpB1351Spike from './assets/reagents/plasmids/pTwist-Amp_B.1.351_Spike Map.pdf';
import pTwistAmpB16172Spike from './assets/reagents/plasmids/pTwist-Amp_B.1.617.2_Spike Map.pdf';
import pTwistAmpP1Spike from './assets/reagents/plasmids/pTwist-Amp_P.1_Spike Map.pdf';
import pTwistAmpWuhan1Spike from './assets/reagents/plasmids/pTwist-Amp_Wuhan-1_Spike Map.pdf';

import HDMB117SpikeSeq from './assets/reagents/plasmids/HDM_B.1.1.7_Spike.gbk';
import HDMB1351SpikeSeq from './assets/reagents/plasmids/HDM_B.1.351_Spike.gbk';
import HDMB16172SpikeSeq from './assets/reagents/plasmids/HDM_B.1.617.2_Spike.gbk';
import HDMP1SpikeSeq from './assets/reagents/plasmids/HDM_P.1_Spike.gbk';
import HDMWuhan1SpikeSeq from './assets/reagents/plasmids/HDM_Wuhan-1_Spike.gbk';
import pTwistAmpB117SpikeSeq from './assets/reagents/plasmids/pTwist-Amp_B.1.1.7_Spike.gbk';
import pTwistAmpB1351SpikeSeq from './assets/reagents/plasmids/pTwist-Amp_B.1.351_Spike.gbk';
import pTwistAmpB16172SpikeSeq from './assets/reagents/plasmids/pTwist-Amp_B.1.617.2_Spike.gbk';
import pTwistAmpP1SpikeSeq from './assets/reagents/plasmids/pTwist-Amp_P.1_Spike.gbk';
import pTwistAmpWuhan1SpikeSeq from './assets/reagents/plasmids/pTwist-Amp_Wuhan-1_Spike.gbk';

const Reagents = () => (
  <section
    className="resources__section"
    id="reagents"
  >
    <h2>
      <Flask />
      <span>Reagents</span>
    </h2>
    <h3>Plasmid vectors</h3>
    <p>
      The NBCC is pleased to provide a number of vectors for use. To request a vector, please contact Bhavisha
      Rathod (bkhatri@lunenfeld.ca).
    </p>
    <p>
      These vectors are being provided in collaboration with the Gingras lab to
      assist scientists in their functional proteomics experiments. We ask that
      you acknowledge their use in your publications by citing the appropriate reference.
    </p>
    <h4>BioID vectors</h4>
    <div className="resources__table-wrapper">
      <table className="resources__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Map</th>
            <th>Sequence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>N-pSTV2</td>
            <td>N-term BirA*-Flag with gateway cloning site; pTight promoter</td>
            <td>
              <a href={NpSTV2}><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV2seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTV2</td>
            <td>C-term BirA*-Flag with gateway cloning site; pTight promoter</td>
            <td>
              <a href={CpSTV2}><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV2seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTVH5</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              YFP-2a-rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={NpSTV5}><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV5seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTVH5</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              YFP-2a-rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={CpSTV5}><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV5seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTV6</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puro-2A-rtTA driven by PGK promoter
            </td>
            <td>
              <a href={NpSTV6}><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV6seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTV6</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puro-2A-rtTA driven by PGK promoter
            </td>
            <td>
              <a href={CpSTV6}><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV6seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTVH7</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puromycin resistance gene driven by sEF1a promoter
            </td>
            <td>
              <a href={NpSTV7}><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV7seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTVH7</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puromycin resistance gene driven by sEF1a promoter
            </td>
            <td>
              <a href={CpSTV7}><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV7seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTVH8</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={NpSTV8}><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV8seq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTVH8</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={CpSTV8}><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV8seq}><File /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <cite className="resources__reagent-citation">
      <a href="http://www.mcponline.org/content/early/2018/08/07/mcp.TIR118.000902.long">
        <LinkIcon />
        Samavarchi-Tehrani, P., H. Abdouni, R. Samson, and A.C. Gingras, A versatile
        lentiviral delivery toolkit for proximity-dependent biotinylation in diverse
        cell types. Mol Cell Proteomics, 2018. 17(11):2256-2269.
      </a>
    </cite>
    <h4>CoVaRR-Net</h4>
    <div className="resources__table-wrapper">
      <table className="resources__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Map</th>
            <th>Sequence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>pTwist-Amp_Wuhan-1_Spike</td>
            <td>Wuhan-1 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpWuhan1Spike}><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpWuhan1SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_B.1.1.7_Spike</td>
            <td>B.1.1.7 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpB117Spike}><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpB117SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_B.1.351_Spike</td>
            <td>B.1.351 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpB1351Spike}><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpB1351SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_P.1_Spike</td>
            <td>P.1 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpP1Spike}><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpP1SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_B.1.617.2_Spike</td>
            <td>B.1.617.2 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpB16172Spike}><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpB16172SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Wuhan-1_Spike</td>
            <td>Wuhan-1 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMWuhan1Spike}><Pdf /></a>
            </td>
            <td>
              <a href={HDMWuhan1SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.1.7_Spike</td>
            <td>B.1.1.7 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB117Spike}><Pdf /></a>
            </td>
            <td>
              <a href={HDMB117SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.351_Spike</td>
            <td>B.1.351 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB1351Spike}><Pdf /></a>
            </td>
            <td>
              <a href={HDMB1351SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_P.1_Spike</td>
            <td>P.1 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMP1Spike}><Pdf /></a>
            </td>
            <td>
              <a href={HDMP1SpikeSeq}><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.617.2_Spike</td>
            <td>B.1.617.2 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB16172Spike}><Pdf /></a>
            </td>
            <td>
              <a href={HDMB16172SpikeSeq}><File /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <cite className="resources__reagent-citation">
      The HDM reagents were generated by Rod Hardy for
      {' '}
      <a href="https://covarrnet.ca">
        CoVaRR-Net
      </a>
      . Please cite CoVaRR-Net and link to the website (covarrnet.ca) in your publications.
    </cite>
    <p>
      <small>
        Last updated: July 20, 2021
      </small>
    </p>
  </section>
);

export default Reagents;
