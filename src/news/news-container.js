import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import articles from './news__articles';
import News from './news';

const NewsContainer = ({
  match,
}) => (
  <News
    articles={articles}
    title={match.params.title && decodeURI(match.params.title)}
  />
);

NewsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(NewsContainer);
