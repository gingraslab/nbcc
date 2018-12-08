import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import NewsPaper from '../assets/icons/newspaper';
import RouterLink from '../components/router-link/router-link';

const List = ({
  articles,
}) => (
  <Fragment>
    <h1>
      <NewsPaper />
      News
    </h1>
    <ul className="news__list">
      {
        Object.entries(articles).map(([title, article]) => (
          <li key={title}>
            <h2>{title}</h2>
            <time>{article.date}</time>
            {article.summary}
            {
              article.text
              && (
                <RouterLink
                  to={`/news/${encodeURI(title)}`}
                  type="link"
                >
                  more...
                </RouterLink>
              )
            }
          </li>
        ))
      }
    </ul>
  </Fragment>
);

List.propTypes = {
  articles: PropTypes.shape({}).isRequired,
};

export default List;
