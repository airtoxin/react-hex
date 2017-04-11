import assert from 'assert';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Hex from '../src';

describe('Hex', () => {
  it('pass through props options to svg polygon', () => {
    const polygon = shallow(
      <Hex
        type="pointy-topped"
        x={0}
        y={0}
        size={1}
        fill="red"
        hello="hex"
      />,
    ).find('polygon');

    assert.ok(polygon.prop('fill'), 'red');
    assert.ok(polygon.prop('hello'), 'hex');
  });

  it('can handle click event', () => {
    let passed = false;
    const handler = () => (passed = true);
    const wrapper = mount(
      <Hex
        type="pointy-topped"
        x={0}
        y={0}
        size={1}
        onClick={handler}
      />,
    );
    wrapper.find('polygon').simulate('click');

    assert.ok(passed);
  });
});
