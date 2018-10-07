import PropTypes from 'prop-types';
import React from 'react';

const Item = ({
  article,
}) => (
  <article>
    <h1>{article.title}</h1>
    <time>{article.date}</time>
    {article.text}
  </article>
);

Item.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.node,
    title: PropTypes.string,
  }).isRequired,
};

export default Item;
