import React from 'react';

import LinkIcon from '../../assets/icons/link';

const Links = () => (
  <section
    className="facilities__section facilities__other-links"
    id="links"
  >
    <div className="facilities__section-inner">
      <h2>
        <LinkIcon />
        Links
      </h2>
      <h3>Microscopy basics</h3>
      <ul>
        <li>
          <a href="https://www.microscopyu.com/">
            <LinkIcon />
            MicroscopyU by Nikon
          </a>
        </li>
        <li>
          <a href="https://www.olympusmicro.com/">
            <LinkIcon />
            Microscopy resource center by Olympus
          </a>
        </li>
        <li>
          <a href="https://micro.magnet.fsu.edu/">
            <LinkIcon />
            Molecular expressions
          </a>
        </li>
        <li>
          <a href="https://www.lifetechnologies.com/ca/en/home/life-science/cell-analysis/labeling-chemistry/fluorescence-spectraviewer.html">
            <LinkIcon />
            Fluorescence spectra viewer
          </a>
        </li>
      </ul>
      <h3>Imaging and image analysis tools</h3>
      <ul>
        <li>
          <a href="https://www.nature.com/nmeth/journal/v9/n7/index.html">
            <LinkIcon />
            Bioimage informatics
            (Issue in Nature Methods)
          </a>
        </li>
        <li>
          <a href="https://www.openmicroscopy.org/site/products/omero">
            <LinkIcon />
            OMERO free image repository and analysis tool
          </a>
        </li>
        <li>
          <a href="https://fiji.sc/Fiji">
            <LinkIcon />
            Fiji open source tool for image processing
          </a>
        </li>
        <li>
          <a href="http://www.cellprofiler.org/">
            <LinkIcon />
            CellProfiler open source image analysis platform
          </a>
        </li>
      </ul>
      <h3>Vendors</h3>
      <ul>
        <li>
          <a href="https://www.gelifesciences.com/webapp/wcs/stores/servlet/catalog/en/GELifeSciences-ca/brands/in-cell-analyzer/">
            <LinkIcon />
            GE Healthcare Life Sciences
            (IN Cell Analyzer 6000, IN Cell Analyzer 1000, IN Cell Investigator)
          </a>
        </li>
        <li>
          <a href="https://www.perkinelmer.com/product/image-data-storage-and-analysis-system-columbus">
            <LinkIcon />
            Perkin Elmer
            (Columbus, Acapella)
          </a>
        </li>
        <li>
          <a href="https://www.nexcelom.com/Celigo/">
            <LinkIcon />
            Nexcelom Bioscience
            (Celigo)
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Links;
