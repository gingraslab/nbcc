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
      <h3>Cell Sorters:</h3>
      <h4>BD FACS Discover S8 cell sorter (location L4-421)</h4>
      <ul>
        <li>5 laser excitation (UV,V,B,Y,R) utilizing spectral detection (78 detectors) 
          to enable enhanced fluorochrome sensitivity, 
          expanded fluorochrome selection/separation and autofluorescence subtraction.
        </li>
        <li>
          CellView Image technology enabling cell sorts based on six imaging 
          features including morphometric parameters and spatially distributed fluorescence.
        </li>
        <li>
          Cell sort rates comparable to traditional cell sorters.
        </li>
        <li>6-way sorting</li>
        <li>Single cell indexed plate sorting.</li>
        <li>Nozzles 70mm, 100 mm,130 mm</li>
      </ul>

      <h4>Beckman Coulter MoFlo EQ ASTRIOS cell sorter (location L4-421)</h4>
      <ul>
        <li>Jet-in -Air</li>
        <li>5 laser (UV,V,B,Y,R-23 detectors)</li>
        <li>6-way sorting</li>
        <li>Single cell indexed plate sorting.</li>
        <li>Nozzles 70mm, 100 mm,130 mm</li>
        <li>Small particle detection (EQ)</li>
      </ul>

      <h4>Sony MA900 cell sorter (location L4-421)</h4>
      <ul>
        <li>4-laser (B,Y,V,R-14 detectors)</li>
        <li>Chip based nozzles (70mm, 100 mm,130 mm)</li>
        <li>Supports client directed cell sorts without core staff supervision.</li>
        <li>4-way sorts </li>
        <li>Single cell indexed plate sorting.</li>
      </ul>

      <hr/>
      <h3>Cell Analyzers:</h3>
      <h4>Amnis ImageStream Imaging flow cytometer (location MSH980)</h4>
      <ul>
        <li>5-laser (B,Y,O,V,R)</li>
        <li>12 imaging channels</li>
        <li>High Gain camera option</li>
        <li>Objectives (magnification 20X,40X,60x) </li>
        <li>High power 400mw 488nm laser</li>
        <li>IDEAS v6.3 with machine Learning module for enhanced feature extraction/analysis</li>
      </ul>

      <h4>Beckman Coulter Gallios analyzer (location L4-421)</h4>
      <ul>
        <li>4-laser (B,Y,V,R-12 detectors)</li>
        <li>32 tube carousel</li>
      </ul>

      <h4>BD Biosciences Fortessa X-20 (location MSH980)</h4>
      <ul>
        <li>5-laser (UV,V,B,Y,R-20 detectors)</li>
        <li>High Throughput plate sampler (HTS) </li>
      </ul>

      <h4>BD Biosciences Fortessa (location MSH980)</h4>
      <ul>
        <li>4-laser (V,B,Y,R-16 detectors)</li>
        <li>High Throughput plate sampler (HTS)</li>
      </ul>

      <h4>Thermo Fisher Scientific Attune NXT (location MSH980)</h4>
      <ul>
        <li>4-laser (V,B,Y,R-16 detectors)</li>
        <li>High Throughput plate sampler (CytKick max)</li>
      </ul>

      <hr/>
      <h5>Data analysis workstations are available at both locations.</h5>


    </div>
  </section>
);

export default Equipment;
