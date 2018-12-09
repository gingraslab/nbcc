import PropTypes from 'prop-types';
import React from 'react';

import arrSort from '../helpers/arr-sort-by-key';
import Slices from './publication__pie-slice';

const DIAMETER = 280;
const RADIUS = DIAMETER / 2;

const Pie = ({
  details,
}) => {
  const sorted = arrSort(details, 'count', 'des', 'numeric');
  const slices = Slices(sorted, RADIUS);
  return (
    <svg
      className="publications__pie"
      height={DIAMETER}
      viewBox={`-${RADIUS} -${RADIUS} ${DIAMETER} ${DIAMETER}`}
      width={DIAMETER}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(-90)">
        {
          slices.map(slice => (
            <path
              className="enrichment__slice"
              d={`
                M ${slice.m.x} ${slice.m.y}
                A ${RADIUS} ${RADIUS} 0 ${slice.a.arc} 1 ${slice.a.x} ${slice.a.y}
                L 0 0
                Z
              `}
              fill={slice.fill}
              key={slice.name}
            />
          ))
        }
      </g>
    </svg>
  );
};

Pie.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      fill: PropTypes.string,
      range: PropTypes.string,
    }),
  ).isRequired,
};

export default Pie;
