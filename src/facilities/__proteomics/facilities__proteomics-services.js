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
      <h3>
        <span>I. Sample preparation</span>
      </h3>
      <h4>Affinity purification (FLAG epitope)</h4>
      <p>
        This assay will identify interacting protein partners (prey) for a
        protein of interest (bait). These assays can be performed reiteratively
        with baits from the same pathway or protein family to create intricate
        and detailed maps of signalling networks. We will provide the appropriate
        vector containing a Triple-FLAG epitope for the generation of stable cell
        lines. Once stable cell lines are generated expressing the baits of interest,
        we will perform affinity purification from cell pellets by lysing the cells,
        purifying the bait(s) and interacting proteins using anti-FLAG magnetic
        beads, and digesting the protein into peptides in preparation for mass
        spectrometry analysis.
      </p>
      <h4>Affinity purification (BioID)</h4>
      <p>
        This assay will identify proteins in close proximity to a protein of
        interest (bait) within the cell. The bait is tagged with an abortive
        birA that adds a biotin moiety to proteins in close proximity. The
        biotinylated proteins are then captured with streptavidin beads and
        identified by mass spectrometry. We will provide the appropriate birA
        epitope-tagged vector for the generation of cell lines. Once stable cell
        lines are generated expressing the baits of interest, we will perform
        affinity purification from cell pellets by lysing the cells, purifying
        the biotinylated proteins using streptavidin-coated magnetic beads, and
        digesting the protein into peptides in preparation for mass spectrometry
        analysis.
      </p>
      <h4>Quantitative global proteomics</h4>
      <p>
      Quantitative global proteomics is used to determine the content of proteomes.
      It is most often used to detect and report differences between cell populations treated
      under various conditions. Proteins are isolated and digested with trypsin to generate
      peptides for mass spectrometry identification.
      </p>
      <h3>
        <span>II. Mass spectrometry analysis</span>
      </h3>
      <p>
        We offer a range of mass spectrometry analyses on high-resolution,
        high-sensitivity mass spectrometers. The first step in mass
        spectrometry-based proteomics analysis is the identification of
        proteins within the sample through discovery analysis using an
        approach termed &quot;data-dependent acquisition&quot;. If desired, we also
        offer additional services to quantify the relevant amount of proteins
        within samples using either comprehensive or targeted approaches.
      </p>
      <h4>Discovery analysis - Data-Dependent Acquisition (DDA)</h4>
      <p>
        Digested protein samples will be analyzed with a high-resolution,
        high-sensitivity mass spectrometer in a nano-LCMS/MS workflow. Data
        will be stored in a secure manner within the ProHits mass spectrometry
        LIMS system, and analyzed with leading search engines and algorithms.
        In the case of samples for identification, a confident list of protein
        identifications with peptide details will be reported. In the case of
        protein-protein interaction studies, the report will include a list of
        significant interacting proteins (with assigned pValues from the SAINT
        algorithm) in formats compatible for visualization (e.g. through cytoscape).
      </p>
      <h4>Comprehensive quantitative analysis - Data-Independent Acquisition (DIA-SWATH)</h4>
      <p>
        For projects where discovery proteomics has been successful and there
        is a desire to quantify changes in protein composition under different
        conditions, we will perform relative quantitative analysis. Unlabeled
        digested protein samples will be analyzed using a comprehensive
        quantification method (DIA-SWATH) that determines the relative intensity
        for all peptides above a signal-to-noise threshold within the mixture.
      </p>
      <h4>Targeted quantitative analysis</h4>
      <p>
        For quantification of a specific set of proteins, peptides or
        post-translational modifications, we offer targeted quantification analysis, such as
        multiple reaction monitoring-high resolution (MRM-HR), Targeted SWATH on a Triple
        TOF mass spectrometer and parallel reaction monitoring (PRM) on the Lumos. The costing
        will be determined after the project is defined and will include all assay setup costs.
      </p>
      <h4>Labelled quantitative analysis</h4>
      <p>
      We also offer the ability to multiplex samples for quantification using TMT, up to 18-plex.
      Please contact us to discuss your project and the most appropriate methodology.
      </p>
      <h4>Data analysis</h4>
      <p>
      For customers who wish for more detailed data analysis, we offer extended data analysis
      from our mass spectrometry specialists. Please contact us to discuss your project.
      </p>
    </div>
  </section>
);

export default Services;
