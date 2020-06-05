import PropTypes from 'prop-types';
import React from 'react';

import TableFill from './publication__table-fill';

const Table = ({
  details,
}) => {
  const total = details.reduce((accum, detail) => accum + detail.count, 0);
  return (
    <table className="publication__table">
      <tbody>
        {
          details.map(detail => (
            <tr key={detail.range}>
              <td>
               {detail.range}
              </td>
              <td>{detail.count}</td>
            </tr>
          ))
        }
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
