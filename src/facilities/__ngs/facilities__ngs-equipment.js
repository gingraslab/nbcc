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
      <h4>NextSeq 500</h4>
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
      <h4>Pippin HT</h4>
      <ul>
        <li>targeted DNA size selection for library preparation</li>
        <li>automated gel-based separation</li>
        <li>24 samples/run</li>
        <li>DNA sizing from 100 bp to 1.5 Kb</li>
        <li>compatible with DNA sequencing and RNA-seq</li>
      </ul>
      <h4>5200 Fragment Analyzer System</h4>
      <ul>
        <li>parallel capillary electrophoresis of up to 12 samples </li>
        <li>QC of library preparation: size, concentration and extent of degradation of library preparation</li>
        <li>suitable for RNA and DNA</li>
        <li>kits available to analyze DNA from 50 bp to 60 Kb </li>
      </ul>
      <h4>QX200 Droplet Digital PCR System</h4>
      <ul>
        <li>absolute quantitation of DNA in digital form</li>
        <li>Droplet Generator separates samples into 20,000 nanoliter-sized droplets for PCR amplification</li>
        <li>after amplication, droplets from each sample are individually analyzed on the Droplet Reader</li>
      </ul>
      <h4>Qubit 2.0 Fluorometer</h4>
      <ul>
        <li>quantitation of DNA, RNA and protein</li>
        <li>measurments within seconds using as little as 1 ul of sample</li>
      </ul>
    </div>
  </section>
);

export default Equipment;
