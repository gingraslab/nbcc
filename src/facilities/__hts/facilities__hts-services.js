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
      <p>
        We provide a wide variety of services associated with lab automation and
        high-throughput technologies aimed at screening purposes or, more generally,
        large-scale experimental procedures. Initially, we will require from users a
        detailed description of their research program, including, but not limited to,
        a comprehensive overview of the biological system investigated, the overall
        objectives pursued, preliminary data, estimated timelines, budgetary considerations
        and availability of funds and, finally, distribution of roles and responsibilities.
        Services can be listed and briefly described as follows:
      </p>
      <h4>I. Assay design</h4>
      <p>
        We provide consultation on the assay design that is the most suitable to
        address the biological question asked by the user. To this end, the first
        step typically consists of assessing the screenability of the biological
        system. Should a given system be considered screenable, we will provide proven
        expertise to define a cell-free or cell-based assay method with the most convenient
        and effective combination of features, such as sensitivity, reproducibility,
        selectivity, speed, and costs. This process is strongly facilitated by our
        capability to precisely perform multi-step procedures (including separation and
        ultrafiltration steps) and achieve the widest arrays of detection modes (both as
        endpoint or kinetic) for assay measurements, which include absorbance, fluorescence,
        time-resolved fluorescence (TRF), fluorescence polarization (FP), fluorescence
        resonance energy transfer (FRET), time-resolved FRET (TRF-FRET), bioluminescence
        resonance energy transfer (BRET), and luminescence.
      </p>
      <p>
        Our personnel may review and assess, if available, preliminary data to determine
        whether a benchtop assay protocol may be adapted to high-throughput conditions. To
        this end, screening parameters as well as budgetary and logistic issues are properly
        evaluated prior to finalization. If necessary, miniaturization strategies or alternative
        assay procedures (either direct or indirect) may be proposed and carefully appraised for
        benefits, drawbacks and overall risks.
      </p>
      <h4>II. Access to screening reagents</h4>
      <p>
       Compound collections have been acquired from commercial sources and through collaborative
       programs with other Institutes to tackle specific screening rationales, namely i) the
       identification of chemical rings or pharmacophores with biochemical, biological or
       pharmacological properties; ii) the elucidation of molecular mechanisms or signaling
       pathways associated with a given cell phenotype; and iii) the discovery of innovative
       or repositioned drugs. To these ends, we can provide access to the following collections:
      </p>
      <strong>Chemical libraries</strong>
      <ul>
        <li>
          Approximately 220,000 drug-like chemicals, obtained from several vendors
          (Maybridge, Chembridge, Asinex, Enamine), designed through computational screens
          in order to provide lead-like motifs and minimize  promiscuous hitters while
          enhancing chemical diversity.
        </li>
        <li>
          4000 semi-natural compounds to explore chemical space around natural motifs
          (that is, small molecules decorated around  8 natural scaffolds (500 molecules per
          scaffold such as (i) quinic acid and shikimic acid, (ii) acidhydroxy proline, (iii)
          santonine, (iv) dianhydro-D-Glucitol, (v) hydroxy pipecolinic acid, (vi) andrographolide,
          (vii) piperazine-2-carboxylic acid, and (viii) cytosine).
        </li>
        <li>
          A wide-range of biologically- and pharmacologically-active (some are FDA-approved
          drugs) compounds with an impact on specific molecular targets, cell signaling pathways
          and/or biological processes (TOCRIS Bioscience (n=1296), LOPAC (SIGMA, n=1280), Spectrum
          (MicroSource, n=2000), and Biomol (n=360) collections.
        </li>
        <li>
          Prestwick Chemical collection (n=1120), mostly composed (85%) of off-patent,
          FDA-approved drugs.
        </li>
        <li>
          NIHcollection (n=727), small molecules with a history of use in human
          clinical trials.
        </li>
        <li>480 protein kinase inhibitors.</li>
        <li>
          160 morphogens (namely, small molecules with a direct impact on cellular processes).
        </li>
      </ul>
      <strong>siRNA libraries</strong>
      <ul>
        <li>
          Dharmacon Reversioned siRNA SMARTpool Library, Whole Human siGENOME (~18,150 gene
          targets) available in the following subset collections: GPCR, Druggable targets,
          Ubiquitin Conjugation, Ion Channels, Proteases, Kinases, Phosphatases, and
          epigenetics custom-mad collection.
        </li>
        <li>
          Dharmacon siRNA SMARTpool Library, Whole Mouse siGENOME (~16,500 gene targets)
          available in the following subset collections: Kinases, GPCR, Druggable targets.
        </li>
        <li>
          Dharmacon Reversioned Deconvolved siRNA Library, whole Human siGENOME composed of 4
          siRNA unique sequences for each SMARTpool sample of the Whole Human Genome Library
          (~72,600 samples).
        </li>
        <li>
          Dharmacon Deconvolved siRNA Library Whole Mouse siGENOME composed of 4 siRNA
          unique sequences for each SMARTpool reagent in the Whole Mouse Genome Library
          (~66,000 samples).
        </li>
      </ul>
      <strong>miRNA libraries</strong>
      <ul>
        <li>Dharmacon miRIDIAN™ microRNA Mimics (n=810) and Hairpin Inhibitors (n=810) (HUMAN).</li>
        <li>Dharmacon miRIDIAN™ microRNA Mimics (n=642) and Hairpin Inhibitors (n=642) (MOUSE).</li>
      </ul>
      <p>
        In addition, customized collections of any kind and format can be realiquotted for use in
        specific project upon a user&apos;s request or HTS personnel recommendation.
      </p>
      <h4>III. Lab automation setups</h4>
      <p>
        We can develop, validate and execute robotic methods that accommodate and fine-tune
        technical requirements and mechanical aspects necessary to precisely reproduce an
        experimental protocol previously validated at the benchtop level. During validation
        of the automation, manual steps are replaced systematically with instruments to ensure
        accuracy and robustness of the procedure. Once the sequence of events and the corresponding
        instrumentation are determined, a scheduling program is finalized and subsequently tested
        in a pilot experiment prior to final acceptance of technical and mechanical conditions
        (e.g. harshness of washing conditions, flow rates of dispensed liquid, mixing steps etc.).
      </p>
      <h4>IV. Data management</h4>
      <p>
        We can assist users with data management, that is, the capture, storage and analysis of
        results. For screens performed in a sequential manner, screening parameters (variability
        of controls, variability of samples, dynamic range, hit rate) are monitored throughout
        the entire process to determine consistency of data and whether any screening run should
        be repeated. The approach for data normalization and hit selection may depend on several
        factors associated with type, format, duration etc. of any given assay, and the nature of
        the library used for the screen. Generally, a variety of methods (e.g. control-based, Z-
        or B-score) is assessed each time to find the most reliable and informative approach for
        subsequent data interpretation and hit finalization.
      </p>
      <h4>V. Cherry-picks, confirmatory tests, and dose-response curves</h4>
      <p>
        These are typical follow-up tests after a primary screen that we offer to users as a
        routine procedure aimed at the definition of a short-list of candidates for subsequent,
        more stringent validation strategies.
      </p>
      <h4>VI. Sample combination arrays</h4>
      <p>
        This is a procedure that may offer valuable information to better understand the
        molecular mechanisms that underlie a given phenotype (using combinations of bioactive
        molecules). Alternatively, it may be used to discover synergic effects of drugs. Sample
        arrays may be experimentally challenging due to a large variety of combinations that may
        arise when different concentrations and different dispensing times are tested. Through
        advanced robotic capabilities, we can however provide users with this experimental option.
      </p>
      <h4>VII. Sample combination arrays</h4>
      <p>
        LUMIER (LUminescence-based Mamalian IntERactome) is a high-throughput automated platform
        developed in the Wrana lab for identification of novel protein-protein interactions in
        mammalian cells. In this assay, a Luciferase (LUC)-tagged fusion protein is co-transfected
        with a FLAG-tagged protein in mammalian cells. The interaction between the two proteins is
        determined by co-immunoprecipitating the FLAG-tagged protein and detecting the LUC-tagged
        interactor in the complex by its luciferase activity. LUMIER can easily identify
        transmembrane protein partners, dynamic interactions that are signaling- or
        isoform-dependent, as well as those that may occur only in the presence of
        post-translational modifications. The assay can be performed in 96 or 384-well format.
      </p>
    </div>
  </section>
);

export default Services;
