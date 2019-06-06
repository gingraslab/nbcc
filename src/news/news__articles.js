import React from 'react';

const articles = {
  'Publication Update': {
    date: 'June 5, 2019',
    summary: (
      <p>
        We have updated our <a
          href="https://nbcc.lunenfeld.ca/publications"
        >
          publication list
        </a> with 13 new publications linked to the NBCC in the past 6 months.
      <br></br>
      <br></br>
        <b>Highlighted Paper: </b> <i>Single-cell transcriptomes of the regenerating intestine reveal a revival stem cell.</i> Ayyaz et al., Nature, 2019 May;569(7754):121-125, PMID: 31019301
      <br></br>
      <br></br>
        Jeff Wrana and his team identify a new type of stem cell in the intestine that is critical to regeneration of the intestine after damage. Single cell RNA sequencing analysis performed in collaboration with the NBCC was key to finding this revival stem cell that is only active for 24 hours.
.
        {' '}
        <a
          href="https://www.sinaihealthsystem.ca/news/the-wrana-group-follows-a-gut-feeling-and-discovers-a-new-type-of-stem-cell/"
        >
          See details.
        </a>
      </p>
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
