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

import HDMB11318Spike from './assets/reagents/plasmids/HDM_B.1.1.318_Spike Map.pdf';
import HDMB117Spike from './assets/reagents/plasmids/HDM_B.1.1.7_Spike Map.pdf';
import HDMB1351Spike from './assets/reagents/plasmids/HDM_B.1.351_Spike Map.pdf';
import HDMB16172Spike from './assets/reagents/plasmids/HDM_B.1.617.2_Spike Map.pdf';
import HDMB1621Spike from './assets/reagents/plasmids/HDM_B.1.621_Spike_Map.pdf';
import HDMDeltaB16172K417NSpike from './assets/reagents/plasmids/HDM_Delta+_(B.1.617.2_K417N)_Spike_Map.pdf';
import HDMDeltaQ613HSpike from './assets/reagents/plasmids/HDM_Delta_Q613H_Spike Map.pdf';
import HDMDeltaY145HSpike from './assets/reagents/plasmids/HDM_Delta_Y145H_Spike Map.pdf';
import HDMLambdaSpike from './assets/reagents/plasmids/HDM_Lambda_Spike_Map.pdf';
import HDMOmicronB11529Spike from './assets/reagents/plasmids/HDM_Omicron_(B.1.1529)_Spike Map.pdf';
import HDMP1Spike from './assets/reagents/plasmids/HDM_P.1_Spike Map.pdf';
import HDMWuhan1Spike from './assets/reagents/plasmids/HDM_Wuhan-1_Spike Map.pdf';
import HDMWuhan1D614G from './assets/reagents/plasmids/HDM_Wuhan-1_D614G_Map.pdf';
import pTwistAmpB117Spike from './assets/reagents/plasmids/pTwist-Amp_B.1.1.7_Spike Map.pdf';
import pTwistAmpB1351Spike from './assets/reagents/plasmids/pTwist-Amp_B.1.351_Spike Map.pdf';
import pTwistAmpB16172Spike from './assets/reagents/plasmids/pTwist-Amp_B.1.617.2_Spike Map.pdf';
import pTwistAmpP1Spike from './assets/reagents/plasmids/pTwist-Amp_P.1_Spike Map.pdf';
import pTwistAmpWuhan1Spike from './assets/reagents/plasmids/pTwist-Amp_Wuhan-1_Spike Map.pdf';

import HDMB11318SpikeSeq from './assets/reagents/plasmids/HDM_B.1.1.318_Spike.gb';
import HDMB117SpikeSeq from './assets/reagents/plasmids/HDM_B.1.1.7_Spike.gbk';
import HDMB1351SpikeSeq from './assets/reagents/plasmids/HDM_B.1.351_Spike.gbk';
import HDMB16172SpikeSeq from './assets/reagents/plasmids/HDM_B.1.617.2_Spike.gbk';
import HDMB1621SpikeSeq from './assets/reagents/plasmids/HDM_B.1.621_Spike.gbk';
import HDMDeltaB16172K417NSpikeSeq from './assets/reagents/plasmids/HDM_Delta+_(B.1.617.2_K417N)_Spike.gbk';
import HDMDeltaQ613HSpikeSeq from './assets/reagents/plasmids/HDM_Delta_Q613H_Spike.gbk';
import HDMDeltaY145HSpikeSeq from './assets/reagents/plasmids/HDM_Delta_Y145H_Spike.gbk';
import HDMLambdaSpikeSeq from './assets/reagents/plasmids/HDM_Lambda_Spike.gbk';
import HDMOmicronB11529SpikeSeq from './assets/reagents/plasmids/HDM_Omicron_(B.1.1529)_Spike.gbk';
import HDMP1SpikeSeq from './assets/reagents/plasmids/HDM_P.1_Spike.gbk';
import HDMWuhan1D614GSeq from './assets/reagents/plasmids/HDM_Wuhan-1_D614G.gbk';
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
      The NBCC is pleased to provide a number of vectors for use. To request a vector, please contact Cassandra
      Wong (cwong@lunenfeld.ca).
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
              <a href={NpSTV2} download><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV2seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTV2</td>
            <td>C-term BirA*-Flag with gateway cloning site; pTight promoter</td>
            <td>
              <a href={CpSTV2} download><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV2seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTVH5</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              YFP-2a-rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={NpSTV5} download><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV5seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTVH5</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              YFP-2a-rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={CpSTV5} download><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV5seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTV6</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puro-2A-rtTA driven by PGK promoter
            </td>
            <td>
              <a href={NpSTV6} download><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV6seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTV6</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puro-2A-rtTA driven by PGK promoter
            </td>
            <td>
              <a href={CpSTV6} download><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV6seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTVH7</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puromycin resistance gene driven by sEF1a promoter
            </td>
            <td>
              <a href={NpSTV7} download><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV7seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTVH7</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              Puromycin resistance gene driven by sEF1a promoter
            </td>
            <td>
              <a href={CpSTV7} download><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV7seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>N-pSTVH8</td>
            <td>
              N-term BirA*-Flag with gateway cloning site; pTight promoter;
              rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={NpSTV8} download><Pdf /></a>
            </td>
            <td>
              <a href={NpSTV8seq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>C-pSTVH8</td>
            <td>
              C-term BirA*-Flag with gateway cloning site; pTight promoter;
              rtTA driven by sEF1a promoter
            </td>
            <td>
              <a href={CpSTV8} download><Pdf /></a>
            </td>
            <td>
              <a href={CpSTV8seq} download><File /></a>
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
            <td>pTwist-Amp_B.1.1.7_Spike</td>
            <td>B.1.1.7 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpB117Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpB117SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_B.1.351_Spike</td>
            <td>B.1.351 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpB1351Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpB1351SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_B.1.617.2_Spike</td>
            <td>B.1.617.2 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpB16172Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpB16172SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_P.1_Spike</td>
            <td>P.1 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpP1Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpP1SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>pTwist-Amp_Wuhan-1_Spike</td>
            <td>Wuhan-1 Spike cDNA, not an expression plasmid</td>
            <td>
              <a href={pTwistAmpWuhan1Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={pTwistAmpWuhan1SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.1.318_Spike</td>
            <td>B.1.1.318 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB11318Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMB11318SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.1.7_Spike</td>
            <td>B.1.1.7 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB117Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMB117SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.351_Spike</td>
            <td>B.1.351 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB1351Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMB1351SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.617.2_Spike</td>
            <td>B.1.617.2 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB16172Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMB16172SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_B.1.621_Spike</td>
            <td>B.1.621 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMB1621Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMB1621SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Delta+_(B.1.617.2_K417N)_Spike</td>
            <td>
              Delta+ (B.1.617.2_K417N) Spike cDNA with CMV enhancer/promoter for cDNA expression
              in mammalian cells
            </td>
            <td>
              <a href={HDMDeltaB16172K417NSpike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMDeltaB16172K417NSpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Delta_Q613H_Spike</td>
            <td>
              Delta Q613H Spike cDNA with CMV enhancer/promoter for cDNA expression
              in mammalian cells
            </td>
            <td>
              <a href={HDMDeltaQ613HSpike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMDeltaQ613HSpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Delta_Y145H_Spike</td>
            <td>
              Delta Y145H Spike cDNA with CMV enhancer/promoter for cDNA expression
              in mammalian cells
            </td>
            <td>
              <a href={HDMDeltaY145HSpike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMDeltaY145HSpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Lambda_Spike</td>
            <td>Lambda Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMLambdaSpike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMLambdaSpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Omicron_(B.1.1529)_Spike</td>
            <td>Omicron Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMOmicronB11529Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMOmicronB11529SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_P.1_Spike</td>
            <td>P.1 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMP1Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMP1SpikeSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Wuhan-1_D614G</td>
            <td>Wuhan-1 D614G cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMWuhan1D614G} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMWuhan1D614GSeq} download><File /></a>
            </td>
          </tr>
          <tr>
            <td>HDM_Wuhan-1_Spike</td>
            <td>Wuhan-1 Spike cDNA with CMV enhancer/promoter for cDNA expression in mammalian cells</td>
            <td>
              <a href={HDMWuhan1Spike} download><Pdf /></a>
            </td>
            <td>
              <a href={HDMWuhan1SpikeSeq} download><File /></a>
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
      . Please cite CoVaRR-Net and link to the website (
      <a href="https://covarrnet.ca">
        covarrnet.ca
      </a>
      ) in your publications.
    </cite>
    <p>
      <small>
        Last updated: July 20, 2021
      </small>
    </p>
  </section>
);

export default Reagents;
