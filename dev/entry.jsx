import React from 'react';
import { render } from 'react-dom';
import { PointyToppedHex, FlatToppedHex, gridPoints, gridPoint } from '../src/index.jsx';

const size = 30;

const PTHComponent = () => {
  const Hexes = gridPoints('pointy-topped', size, 100, 100, 10, 10).map(([x, y]) =>
    <PointyToppedHex x={x} y={y} size={size} key={Math.random()} onClick={() => alert(`x=${x} y=${y}`)} />);
  return (
    <div>
      <h2>PointyToppedHex</h2>
      <svg width={1000} height={1000}>
        {Hexes}
      </svg>
    </div>
  );
};

const FTHComponent = () => {
  const Hexes = gridPoints('flat-topped', size, 100, 100, 10, 10).map(([x, y]) =>
    <FlatToppedHex x={x} y={y} size={size} key={Math.random()} />);
  return (
    <div>
      <h2>FlatToppedHex</h2>
      <svg width={1000} height={1000}>
        {Hexes}
      </svg>
    </div>
  );
};

const App = () => (
  <div>
    <PTHComponent />
    <FTHComponent />
  </div>
);

render(<App />, document.getElementById('app'));
