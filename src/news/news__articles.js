import React from 'react';

import Link from '../components/router-link/router-link';

const articles = {
  'Updated Publication List - June 2020': {
    date: 'June 5, 2020',
    summary: (
      <section>
        <p>
          We have updated our
          {' '}
          <Link
            to="/publications"
            type="link"
            underline
          >
            publication list
          </Link>
          {' '}
          with new publications linked to the NBCC in the past 4 months.
        </p>
        <p>
          <strong>Highlighted Paper:</strong>
          {' '}
          <em>
            Rare driver mutations in head and neck squamous cell carcinomas converge on NOTCH signaling.
          </em>
          {' '}
          Loganathan et al., Science. 2020 Mar;367(6483):1264-1269, PMID: 32165588.
        </p>
        <p>
          The Next-Gen Sequencing and Proteomics nodes of the NBCC contributed to a Science paper
          in March by Daniel Schramek’s lab in which his team used reverse CRISPR screens to
          functionally assess rare HNSCC gene mutations in mice. They identified 15 tumour
          suppressor genes that converge on the NOTCH signalling pathway.
          {' '}
          <a
            href="https://science.sciencemag.org/content/367/6483/1264/tab-article-info"
          >
            Loganathan et al. article.
          </a>
        </p>
      </section>
    ),
    title: 'Updated Publication List - June 2020',
  },
  'NBCC in the News for our COVID-19 detection efforts': {
    date: 'April 9, 2020',
    summary: (
      <section>
        <p>
          Our development of a high-throughput serology assay to detect SARS CoV-2 antibodies was
          featured in the
          {' '}
          <a href="https://www.theglobeandmail.com/business/technology/science/article-robotic-system-to-survey-for-widespread-exposure-to-covid-19">
            Globe and Mail
          </a>
          . This automated ELISA-based assay will be used in
          serosurveillance studies at the NBCC under the direction of co-Directors Anne-Claude Gingras and Jeff Wrana.
        </p>
      </section>
    ),
    title: 'NBCC in the News for our COVID-19 detection efforts',
  },
  'NBCC now on Google Scholar': {
    date: 'January 30, 2020',
    summary: (
      <section>
        <p>
          Follow our publications on
          {' '}
          <a href="https://scholar.google.com/citations?hl=en&user=CDjBA1AAAAAJ&view_op=list_works&sortby=pubdate">
            Google Scholar
          </a>
          .
        </p>
        <p>
          We have also updated our
          {' '}
          <Link
            to="/publications"
            type="link"
            underline
          >
            publication list
          </Link>
          {' '}
          with new publications linked to the NBCC in the past 4 months.
        </p>
        <p>
          <strong>Highlighted Paper:</strong>
          {' '}
          <em>
            ROCK inhibitors upregulate the neuroprotective Parkin-mediated mitophagy pathway.
          </em>
          {' '}
          Moskal et al., Nat Commun. 2020 Jan;11(1):88, PMID: 31900402.
        </p>
        <p>
          The NBCC worked with the McQuibban lab from the University of Toronto on an HTP screen
          that identified Rock inhibitors as potentiators of the Parkin-mediated mitophagy pathway
          that is required to remove damaged mitochondria from dopaminergic neurons. This discovery
          may lead to new treatments for Parkinson&apos;s Disease or other diseases characterized by
          mitochondrial dysfunction.
          {' '}
          <a
            href="https://www.nature.com/articles/s41467-019-13781-3.pdf"
          >
            Moskal et al. article.
          </a>
        </p>
      </section>
    ),
    title: 'NBCC now on Google Scholar',
  },
  'Latest Publications': {
    date: 'September 10, 2019',
    summary: (
      <section>
        <p>
          We have updated our
          {' '}
          <Link
            to="/publications"
            type="link"
            underline
          >
            publication list
          </Link>
          {' '}
          with new publications linked to the NBCC in the past 3 months.
        </p>
        <p>
          <strong>Highlighted Paper:</strong>
          {' '}
          <em>
            Gene Information eXtension (GIX): effortless retrieval of gene product information on any
            website.
          </em>
          {' '}
          Knight et al., Nat Methods. 2019 Aug;16(8):665-666, PMID: 31217594.
        </p>
        <p>
          Correspondence in Nature Methods describing a handy tool developed by James Knight to
          retrieve gene and protein information directly from a web browser. Ideally suited for
          scientists analyzing long list of hits from proteomics and genomics data.
          {' '}
          <a
            href="https://gene-info.org"
          >
            For more information and to download.
          </a>
        </p>
      </section>
    ),
    title: 'Latest Publications',
  },
  'Positions Available': {
    date: 'July 31, 2019',
    summary: (
      <section>
        <p>
          Positions are now available for talented scientists to work in collaboration with
          the NBCC.
        </p>
        <p>
          <strong>
            Position #1: Research Associate in Mass Spectrometry and Chemical Proteomics.
          </strong>
          {' '}
          A position is available in the Gingras laboratory to extend chemical proteomics
          capabilities in pre-clinical drug discovery and structural proteomics.
          Application deadline: August 30, 2019.
          {' '}
          <a href="https://contact2.mshri.on.ca/hr/DEFAULT.ASP?page=jobDetail&job=1225">
            For more details and to apply
          </a>
          {' '}
        </p>
        <p>
          <strong>Position #2: Post-Doctoral Fellow in Chemical Proteomics. </strong>
          A position is available in the Gingras laboratory to extend chemical proteomics
          capabilities in pre-clinical drug discovery and structural proteomics.
          Application deadline: September 30, 2019.
          {' '}
          <a href="https://apply.interfolio.com/66200">For more details and to apply</a>
          {' '}
        </p>
        <p>
          <strong>Position #3: Post-Doctoral Fellow in Computational Proteomics. </strong>
          Positions are available in the Rost and Gingras laboratories to conduct bioinformatics
          research in proteomics and metabolomics focusing on the quantitative analysis of
          Data-Independent Acquisition (DIA) data generated by mass spectrometry.
          Application deadline: September 30, 2019.
          {' '}
          <a href="https://apply.interfolio.com/58107">For more details and to apply</a>
          {' '}
        </p>
      </section>
    ),
    title: 'Positions Available',
  },
  'Publication Update': {
    date: 'June 5, 2019',
    summary: (
      <section>
        <p>
          We have updated our
          {' '}
          <a href="https://nbcc.lunenfeld.ca/publications">publication list</a>
          {' '}
          with 13 new publications linked to the NBCC in the past 6 months.
        </p>
        <p>
          <strong>Highlighted Paper:</strong>
          {' '}
          <em>
            Single-cell transcriptomes of the regenerating intestine reveal a revival stem cell.
          </em>
          {' '}
          Ayyaz et al., Nature, 2019 May;569(7754):121-125, PMID: 31019301
        </p>
        <p>
          Jeff Wrana and his team identify a new type of stem cell in the intestine that
          is critical to regeneration of the intestine after damage. Single cell RNA sequencing
          analysis performed in collaboration with the NBCC was key to finding this revival stem
          cell that is only active for 24 hours.
          {' '}
          <a
            href="https://www.sinaihealth.ca/news/dr-jeff-wrana-and-team-follow-a-gut-feeling-and-discover-a-new-type-of-stem-cell/"
          >
            See details.
          </a>
        </p>
      </section>
    ),
    title: 'Publication Update',
  },
  'A new look for our website': {
    date: 'January 14, 2019',
    summary: (
      <p>
        We have updated our website for a better user experience. We have also
        expanded our resources page to provide users with updated protocols and technical
        notes.
      </p>
    ),
    title: 'A new look for our website',
  },
  'New funding for the NBCC': {
    date: 'January 23, 2018',
    summary: (
      <p>
        The Network Biology Collaborative Centre is one of 10 advanced
        genomics technology platforms funded by Genome Canada in Canada.  The funding
        was announced at a press conference by the Federal Minister of Science, the Honourable
        Kirsty Duncan.
        {' '}
        <a
          href="https://www.genomecanada.ca/en/news/canadian-patients-benefit-major-investment-genomics-and-precision-health-research"
        >
          See details.
        </a>
      </p>
    ),
    title: 'New Funding for the NBCC',
  },
};

export default articles;
