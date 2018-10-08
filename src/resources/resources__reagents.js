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

const Reagents = () => (
  <section
    className="resources__section"
    id="#reagents"
  >
    <h2>
      <Flask />
      <span>Reagents</span>
    </h2>
    <h3>Plasmic vectors</h3>
    <p>
      The NBCC is pleased to provide the following lentiviral vectors for use:
    </p>
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
    <p>
      To request a vector, please contact Hala Abdouni (habdouni@lunenfeld.ca)
    </p>
    <p>
      These vectors are being provided in collaboration with the Gingras lab to
      assist scientists in their functional proteomics experiments. We ask that
      you acknowledge their use in your publications by citing:
    </p>
    <cite>
      <a href="http://www.mcponline.org/content/early/2018/08/07/mcp.TIR118.000902.long">
        <LinkIcon />
        Samavarchi-Tehrani, P., H. Abdouni, R. Samson, and A.C. Gingras, A versatile
        lentiviral delivery toolkit for proximity-dependent biotinylation in diverse
        cell types. Mol Cell Proteomics, 2018. epub ahead of publication.
      </a>
    </cite>
    <p>
      <small>
        Last updated: Aug 30, 2018
      </small>
    </p>
  </section>
);

export default Reagents;
