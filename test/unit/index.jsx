import assert from 'assert';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { PointyToppedHex, FlatToppedHex } from '../../src';

describe('PointyToppedHex', () => {
  it('pass through props options to svg polygon', () => {
    const polygon = shallow(
      <PointyToppedHex
        x={0}
        y={0}
        size={1}
        fill="red"
        hello="hex" />
    ).find('polygon');

    assert.ok(polygon.prop('fill'), 'red');
    assert.ok(polygon.prop('hello'), 'hex');
  });
});

describe('FlatToppedHex', () => {
  it('pass through props options to svg polygon', () => {
    const polygon = shallow(
      <FlatToppedHex
        x={0}
        y={0}
        size={1}
        fill="red"
        hello="hex" />
    ).find('polygon');

    assert.ok(polygon.prop('fill'), 'red');
    assert.ok(polygon.prop('hello'), 'hex');
  });
});
