import React, { PropTypes } from 'react';
import { corners } from './utils';

const Hex = (props) => {
  const { type, x, y, size } = props;
  const points = corners(type, x, y, size);
  return <polygon {...props} points={points.map(p => p.join(',')).join(' ')} />;
};

Hex.propTypes = {
  type: PropTypes.oneOf(['pointy-topped', 'flat-topped']).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Hex;
