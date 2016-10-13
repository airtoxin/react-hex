import React, { Component } from 'react';
import { hexCorners, gridPoints, gridPoint } from './utils';

export const PointyToppedHex = props => {
  const points = hexCorners("pointy-topped", props.x, props.y, props.size);
  return <polygon points={points.map(point => point.join(",")).join(" ")} />;
};

export const FlatToppedHex = props => {
  const points = hexCorners("flat-topped", props.x, props.y, props.size);
  return <polygon points={points.map(point => point.join(",")).join(" ")} />
};

export { gridPoints, gridPoint };
