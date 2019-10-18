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
      <h4>Chromium Controller</h4>
      <ul>
        <li>microfluidic platform for single cell isolation and barcoding</li>
        <li>partitions cells into GEMs (Gel beads in EMulsion)</li>
        <li>can process 8 samples in parallel in under 20 minutes</li>
        <li>can generate &gt;100,000 barcode-partitions in minutes</li>
      </ul>
      <h4>C1 System</h4>
      <ul>
        <li>microfluidic platform for single cell isolation and template preparation</li>
        <li>isolates up to 800 individual cells in separate reaction chambers</li>
        <li>cells can be immunostained and imaged in chambers prior to lysing and barcoding </li>
      </ul>
      <h4>Pippin HT</h4>
      <ul>
        <li>targeted DNA size selection for library preparation</li>
        <li>automated gel-based separation</li>
        <li>24 samples/run</li>
        <li>DNA sizing from 100 bp to 1.5 Kb</li>
        <li>ChIP-seq and miRNA-seq applications </li>
      </ul>
      <h4>5200 Fragment Analyzer System</h4>
      <ul>
        <li>parallel capillary electrophoresis of up to 12 samples </li>
        <li>
          QC of library preparation: adapter dimer contamination, library size and
          concentration
        </li>
        <li>suitable for RNA and DNA</li>
        <li>kits available to analyze RNA, genomic DNA and sequencing library </li>
      </ul>
      <h4>QX200 Droplet Digital PCR System</h4>
      <ul>
        <li>absolute quantitation of DNA in digital form</li>
        <li>
          Droplet Generator separates samples into 20,000 nanoliter-sized droplets for
          PCR amplification
        </li>
        <li>
          after amplication, droplets from each sample are individually analyzed on the
          Droplet Reader
        </li>
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
