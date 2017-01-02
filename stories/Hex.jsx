import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hex from '../src/index.jsx';

storiesOf('Hex', module)
  .addWithInfo('simple usage', 'white point is center of hex', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <Hex type="pointy-topped" x={150} y={250} size={50} />
      <circle cx={150} cy={250} r={3} fill="white"/>
      <Hex type="flat-topped" x={350} y={250} size={50} />
      <circle cx={350} cy={250} r={3} fill="white"/>
    </svg>
  ), { inline: true, propTables: [Hex] })
  .addWithInfo('place in corner', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <Hex type="pointy-topped" x={0} y={0} size={50} />
      <Hex type="pointy-topped" x={500} y={0} size={50} />
      <Hex type="flat-topped" x={0} y={500} size={50} />
      <Hex type="flat-topped" x={500} y={500} size={50} />
    </svg>
  ), { inline: true, propTables: [Hex] })
  .addWithInfo('big size', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <Hex type="pointy-topped" x={150} y={250} size={50} />
      <Hex type="flat-topped" x={350} y={250} size={50} />
    </svg>
  ), { inline: true, propTables: [Hex] })
  .addWithInfo('pass through props', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <Hex
        type="pointy-topped"
        x={250}
        y={250}
        size={100}
        fill="none"
        stroke="black"
        strokeWidth="50"
        transform="rotate(15,250,250)"
        onClick={action('onClick')}
        onMouseEnter={action('onMouseEnter')}
      />
    </svg>
  ), { inline: true, propTables: [Hex] });
