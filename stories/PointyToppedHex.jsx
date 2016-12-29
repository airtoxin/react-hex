import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { PointyToppedHex } from '../src/index.jsx';

storiesOf('PointyToppedHex', module)
  .addWithInfo('simple usage', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <PointyToppedHex x={250} y={250} size={50} />
    </svg>
  ), { inline: true, propTables: [PointyToppedHex] })
  .addWithInfo('place in corner', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <PointyToppedHex x={0} y={0} size={50} />
    </svg>
  ), { inline: true, propTables: [PointyToppedHex] })
  .addWithInfo('big size', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <PointyToppedHex x={250} y={250} size={250} />
    </svg>
  ), { inline: true, propTables: [PointyToppedHex] })
  .addWithInfo('pass through props', '', () => (
    <svg width="500" height="500" style={{ border: '1px solid' }}>
      <PointyToppedHex
        x={250}
        y={250}
        size={50}
        fill="white"
        stroke="black"
        strokeWidth="10"
        transform="rotate(15,250,250)"
        onClick={action('onClick')}
        onMouseEnter={action('onMouseEnter')}
      />
    </svg>
  ), { inline: true, propTables: [PointyToppedHex] });
