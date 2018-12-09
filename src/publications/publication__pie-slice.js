import percToCoord from '../helpers/percent-to-coordinate';
import roundNearest from '../helpers/round-nearest';

const pieSlice = (data, radius) => {
  let cumulativePercent = 0;
  let last = [radius, 0];
  const total = data.reduce((accum, datum) => accum + datum.count, 0);
  return data.map((datum) => {
    cumulativePercent += datum.count;

    /* Calculate arc position */
    const percent = roundNearest(cumulativePercent / total, 0.000001);
    const point = percToCoord(percent, radius);

    /* Update "last" position */
    const start = [...last];
    last = point;
    return {
      a: {
        arc: datum.count / total > 0.5 ? 1 : 0,
        x: point[0],
        y: point[1],
      },
      fill: datum.fill,
      m: {
        x: start[0],
        y: start[1],
      },
      name: datum.range,
    };
  });
};

export default pieSlice;
