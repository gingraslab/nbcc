import PropTypes from 'prop-types';
import React from 'react';

const TableSvg = ({
  fill,
}) => (
  <svg height={15} width={15}>
    <rect x={0} y={0} height={15} width={15} fill={fill} />
  </svg>
);

TableSvg.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default TableSvg;
