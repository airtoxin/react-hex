import React, { PropTypes } from 'react';
import { hexCorners, gridPoints, gridPoint } from './utils';

export const PointyToppedHex = props => {
  const points = hexCorners('pointy-topped', props.x, props.y, props.size);
  return <polygon {...props} points={points.map(point => point.join(',')).join(' ')} />;
};

export const FlatToppedHex = props => {
  const points = hexCorners('flat-topped', props.x, props.y, props.size);
  return <polygon {...props} points={points.map(point => point.join(',')).join(' ')} />
};

PointyToppedHex.displayName = 'PointyToppedHex';
FlatToppedHex.displayName = 'FlatToppedHex';

PointyToppedHex.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

FlatToppedHex.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export { gridPoints, gridPoint };
