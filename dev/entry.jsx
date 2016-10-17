import React from 'react';
import { render } from 'react-dom';
import randomColor from 'random-color';
import { PointyToppedHex, FlatToppedHex, gridPoints } from '../src/index.jsx';

const size = 30;

const PTHComponent = () => {
  const Hexes = gridPoints('pointy-topped', size, 100, 100, 10, 10).map(([x, y, gridX, gridY]) => {
    return (
      <g key={`${x}-${y}`}>
        <PointyToppedHex
          x={x}
          y={y}
          size={size}
          fill="white"
          stroke="black"
          onClick={() => alert(`x=${x} y=${y}`)}
        />
        <text x={x - size / 2} y={y + size / 4}>{`${gridX},${gridY}`}</text>
      </g>
    );
  });
  return (
    <div>
      <h2>PointyToppedHex</h2>
      <svg width={900} height={600}>
        {Hexes}
      </svg>
    </div>
  );
};

const FTHComponent = () => {
  const Hexes = gridPoints('flat-topped', size, 100, 100, 10, 10).map(([x, y, gridX, gridY]) => {
    return (
      <g key={`${x}-${y}`}>
        <FlatToppedHex
          x={x}
          y={y}
          size={size}
          fill={randomColor().hexString()}
          stroke="white"
        />
        <text x={x - size / 2} y={y + size / 4}>{`${gridX},${gridY}`}</text>
      </g>
    );
  });
  return (
    <div>
      <h2>FlatToppedHex</h2>
      <svg width={1500} height={400}>
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
