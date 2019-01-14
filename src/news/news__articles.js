import React from 'react';

const articles = {
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
