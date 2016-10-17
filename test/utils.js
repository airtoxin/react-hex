import assert from 'assert';
import { hexCorners, gridPoint, gridPoints } from '../src/utils';

describe('hexCorners', () => {
  it('should return six corners of pointy-topped hex', () => {
    const result = hexCorners('pointy-topped', 100, 100, 100);
    const expected = [
      [186.60254037844388, 150],
      [100, 200],
      [13.397459621556123, 150],
      [13.397459621556138, 49.999999999999986],
      [99.99999999999999, 0],
      [186.60254037844385, 49.99999999999996],
    ];

    assert.deepEqual(result, expected);
  });

  it('should return six corners of flat-topped hex', () => {
    const result = hexCorners('flat-topped', 100, 100, 100);
    const expected = [
      [200, 100],
      [150, 186.60254037844385],
      [50.00000000000002, 186.60254037844388],
      [0, 100.00000000000001],
      [49.99999999999996, 13.397459621556166],
      [150, 13.397459621556138],
    ];

    assert.deepEqual(result, expected);
  });
});

describe('gridPoint', () => {
  it('should return center point of pointy-topped hexagonal grid system', () => {
    assert.deepEqual(gridPoint('pointy-topped', 100, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('pointy-topped', 10, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('pointy-topped', 1, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('pointy-topped', 0, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('pointy-topped', 100, 10, 10), [2598.0762113533156, 1500]);
    assert.deepEqual(gridPoint('pointy-topped', 10, 10, 10), [259.80762113533156, 150]);
    assert.deepEqual(gridPoint('pointy-topped', 1, 10, 10), [25.980762113533156, 15]);
  });

  it('should return center point of flat-topped hexagonal grid system', () => {
    assert.deepEqual(gridPoint('flat-topped', 100, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('flat-topped', 10, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('flat-topped', 1, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('flat-topped', 0, 0, 0), [0, 0]);
    assert.deepEqual(gridPoint('flat-topped', 100, 10, 10), [4500, 866.0254037844386]);
    assert.deepEqual(gridPoint('flat-topped', 10, 10, 10), [450, 86.60254037844385]);
    assert.deepEqual(gridPoint('flat-topped', 1, 10, 10), [45, 8.660254037844386]);
  });
});

describe('gridPoints', () => {
  it('should return sequential gridPoints (pointy-topped)', () => {
    const result = gridPoints('pointy-topped', 30, 13, 48, 3, 3);
    const expected = [
      gridPoint('pointy-topped', 30, 0, 0, 13, 48).concat([0, 0]),
      gridPoint('pointy-topped', 30, 1, 0, 13, 48).concat([1, 0]),
      gridPoint('pointy-topped', 30, 2, 0, 13, 48).concat([2, 0]),
      gridPoint('pointy-topped', 30, 0, 1, 13, 48).concat([0, 1]),
      gridPoint('pointy-topped', 30, 1, 1, 13, 48).concat([1, 1]),
      gridPoint('pointy-topped', 30, 2, 1, 13, 48).concat([2, 1]),
      gridPoint('pointy-topped', 30, 0, 2, 13, 48).concat([0, 2]),
      gridPoint('pointy-topped', 30, 1, 2, 13, 48).concat([1, 2]),
      gridPoint('pointy-topped', 30, 2, 2, 13, 48).concat([2, 2]),
    ];
    assert.deepEqual(result, expected);
  });

  it('should return sequential gridPoints (flat-topped)', () => {
    const result = gridPoints('flat-topped', 30, 13, 48, 3, 3);
    const expected = [
      gridPoint('flat-topped', 30, 0, 0, 13, 48).concat([0, 0]),
      gridPoint('flat-topped', 30, 1, 0, 13, 48).concat([1, 0]),
      gridPoint('flat-topped', 30, 2, 0, 13, 48).concat([2, 0]),
      gridPoint('flat-topped', 30, 0, 1, 13, 48).concat([0, 1]),
      gridPoint('flat-topped', 30, 1, 1, 13, 48).concat([1, 1]),
      gridPoint('flat-topped', 30, 2, 1, 13, 48).concat([2, 1]),
      gridPoint('flat-topped', 30, 0, 2, 13, 48).concat([0, 2]),
      gridPoint('flat-topped', 30, 1, 2, 13, 48).concat([1, 2]),
      gridPoint('flat-topped', 30, 2, 2, 13, 48).concat([2, 2]),
    ];
    assert.deepEqual(result, expected);
  });
});
