import React from 'react';

import Server from '../../assets/icons/server';
import Illumina from './assets/Illumina.svg';

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
      <img
        alt="Illumina"
        height={40}
        src={Illumina}
        width={172}
      />
      <h4>NextSeq</h4>
      <ul>
        <li>mid-throughput sequencer</li>
        <li>1 lane/run</li>
        <li>
          can sequence as low as single reads 75
          cycles and up to paired-end 300 cycles per run
        </li>
        <li>multiplexing up to 96 samples per run</li>
        <li>1 human genome/run at 30x coverage</li>
        <li>8 transcriptomes/run at 50 million reads per sample</li>
      </ul>
      <h4>HiSeq 3000</h4>
      <ul>
        <li>high-throughput sequencer</li>
        <li>8 lanes/run</li>
        <li>
          can sequence as low as single reads 50 cycles and up to
          paired-end 300 cycles per lane
        </li>
        <li>multiplexing up to 96 samples per run</li>
        <li>6 human genomes/run at 30x coverage</li>
        <li>48 transcriptomes/run at 50 million reads per sample</li>
      </ul>
    </div>
  </section>
);

export default Equipment;
