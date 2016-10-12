import assert from 'assert';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src';

describe('react-hex', () => {
  it('contains h1 (shallow)', () => {
    const result = shallow(<App />).contains(<h1>hello react-hex</h1>);
    assert.ok(result);
  });

  it('contains h1 (mount)', () => {
    const result = mount(<App />).find('h1');
    assert.ok(result);
  });
});
