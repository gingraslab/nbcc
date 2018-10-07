import PropTypes from 'prop-types';
import React from 'react';

import Item from './news__item';
import List from './news__list';
import Missing from './news__missing';

import './news.css';

const News = ({
  articles,
  title,
}) => {
  let content;
  if (
    title
    && articles[title]
  ) {
    content = <Item article={articles[title]} />;
  } else if (title) {
    content = <Missing />;
  } else {
    content = (
      <List articles={articles} />
    );
  }
  return (
    <main className="news">
      <div className="news__inner">
        {content}
      </div>
    </main>
  );
};

News.defaultProps = {
  title: '',
};

News.propTypes = {
  articles: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
};

export default News;
