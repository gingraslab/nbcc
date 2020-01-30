import React from 'react';

import Wrench from '../../assets/icons/wrench';

const Services = () => (
  <section
    className="facilities__section facilities__services"
    id="services"
  >
    <div className="facilities__section-inner">
      <h2>
        <Wrench />
        Services
      </h2>
      <p>
        The High-Content screening unit provides access to cutting edge
        high-throughput imaging equipment, as well as powerful automated image
        and data analysis tools. This unit is a natural end point for automated
        assays including large-scale RNAi/chemical screens. Our expertise in
        high-throughput imaging and high-content analysis ensures the most
        efficient and robust screen design. The available microscopes enable
        high-speed automated imaging of multi-well plates and regular microscopy
        slides at either low or high resolution. Combined with advanced image
        analysis tools, this allows for the development of a wide range of standard
        and easily customized applications applicable to multiple areas of biomedical
        research. We provide full service for customer&apos;s high-content
        screening including (1) high-throughput image acquisition, (2) customized
        image analysis routine, as well as (3) data analysis and visualization.
        We also offer each of these services individually.
      </p>
      <h3>
        <span>I. High-throughput imaging</span>
      </h3>
      <p>
        Image acquisition can be performed on either a Celígo Cytometer
        (Nexcelom Bioscience) or an IN Cell Analyzer 6000 (GE Healthcare).
      </p>
      <h4>Celígo Cytometer (Nexcelom Bioscience)</h4>
      <p>
        This instrument is ideal for up to 4-channel imaging of multi-well plates
        at low-resolution. Proprietary F-theta lens installed on the cytometer
        provides great image flatness and contrast. Bright LED light-sources enable
        label-free brightfield imaging as well as acquisition of blue, green and
        red fluorophores.
      </p>
      <h4>IN Cell Analyzer 6000 (GE Healthcare)</h4>
      <p>
        The IN Cell is a high-end, laser-based, line-scanning confocal imaging platform.
        It utilizes a novel and proprietary optical engine to achieve both wide field and
        confocal imaging capabilities in one system. The Iris-like variable aperture and
        next-generation scientific CMOS camera (2048x2048) enable high quality imaging
        at a high speed. This instrument is designed for high-throughput imaging (up to 5
        channels and multiple z-sections) and assay development. It can be used for live
        cell and endpoint assays as well as 3D imaging, co-localization studies and low
        signal assays. Our facility has two IN Cell Analyzer 6000 microscopes, equipped with
        4x, 10x, 20x and 60x objectives. One of the microscopes is attached to a robotic
        platform to automate imaging of multiple plates.
      </p>
      <h4>Incuctye S3 (Essen Bioscience)</h4>
      <p>
      This instrument is ideal to acquire real-time, automated measurements of cell health, proliferation, 
      movement and function directly inside a standard tissue culture incubator. Specific live-cell assays, 
      including cell migration software application module and spheroid software module, are also available 
      on the IncuCyte S3 system.
      </p>
      <h3>
        <span>I. High-content analysis</span>
      </h3>
      <p>
        We have several tools for automated image analysis. They include ones which
        can be used without extensive training to create simple analysis algorithms
        (Celígo analysis and Columbus), as well as software for generation of
        highly-customized algorithms.
      </p>
      <h4>Celígo analysis (Nexcelom Bioscience)</h4>
      <p>
        This built-in image analysis tool allows on-the-fly analysis of acquired
        images. Recommended applications include label-free cell growth tracking,
        cell cycle analysis, cell viability and apoptosis, transfection optimization,
        multiplex fluorescent expression assays and many others. Once image acquisition
        is complete, data can be re-analyzed at an offline workstation.
      </p>
      <h4>Columbus (PerkinElmer)</h4>
      <p>
        Columbus is a universal image data storage and analysis system that enables
        access to stored images via a standard internet browser. The Columbus system
        allows scientists to remotely access, view, annotate and analyze images.
        Columbus is based on an OMERO server and therefore supports a variety of
        existing microscope file formats. Integrated image analysis tools are
        intuitive and efficient. A high-performance computing server enables
        hyper-threading of image analysis. PhenoLOGIC™ machine learning technology
        provides an easy way to classify cells or subcellular regions within a given data-set.
      </p>
      <h4>Acapella (PerkinElmer)</h4>
      <p>
        Acapella is a powerful tool for image analysis. It has a set of proprietary
        scripts for detection of typical cell shapes and sub-cellular organelles. This
        is combined with a versatile programming environment to create customized
        algorithms for a variety of biological applications.
      </p>
      <h4>Matlab (Mathworks)</h4>
      <p>
        Matlab is the most powerful application for advanced analysis of the images.
        Flexible image and data handling allows highly specialized routines for image
        analysis, including complex image filtering and segmentation. Costing for this
        analysis will be determined based on the complexity of the analysis.
      </p>
    </div>
  </section>
);

export default Services;
