import PropTypes from 'prop-types';
import React from 'react';

import TableFill from './publication__table-fill';

const Table = ({
  average,
  details,
}) => {
  const total = details.reduce((accum, detail) => accum + detail.count, 0);
  return (
    <table className="publication__table">
      <thead>
        <tr>
          <th>
            Impact factor
            <sup>1</sup>
          </th>
          <th>
            Number
          </th>
        </tr>
      </thead>
      <tbody>
        {
          details.map(detail => (
            <tr key={detail.range}>
              <td>
                <TableFill fill={detail.fill} />
                {detail.range}
              </td>
              <td>{detail.count}</td>
            </tr>
          ))
        }
        <tr>
          <td>
            Total
            <sup>2</sup>
          </td>
          <td>{ total }</td>
        </tr>
        <tr>
          <td>
            Average
          </td>
          <td>{ average }</td>
        </tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  average: PropTypes.number.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      fill: PropTypes.string,
      range: PropTypes.string,
    }),
  ).isRequired,
};

export default Table;
