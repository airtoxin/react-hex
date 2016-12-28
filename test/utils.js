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
    assert.deepEqual(
      gridPoint('pointy-topped', 100, 0, 0),
      {
        center: [0, 0],
        grid: [0, 0],
        corners: [
          [86.60254037844388, 49.99999999999999],
          [6.123233995736766e-15, 100],
          [-86.60254037844388, 49.99999999999999],
          [-86.60254037844386, -50.000000000000014],
          [-1.8369701987210297e-14, -100],
          [86.60254037844383, -50.00000000000004],
        ],
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 10, 0, 0),
      {
        center: [0, 0],
        grid: [0, 0],
        corners: [
          [8.660254037844387, 4.999999999999999],
          [6.123233995736766e-16, 10],
          [-8.660254037844387, 4.999999999999999],
          [-8.660254037844386, -5.000000000000001],
          [-1.8369701987210296e-15, -10],
          [8.660254037844384, -5.000000000000004],
        ],
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 1, 0, 0),
      {
        center: [0, 0],
        grid: [0, 0],
        corners: [
          [0.8660254037844387, 0.49999999999999994],
          [6.123233995736766e-17, 1],
          [-0.8660254037844387, 0.49999999999999994],
          [-0.8660254037844386, -0.5000000000000001],
          [-1.8369701987210297e-16, -1],
          [0.8660254037844384, -0.5000000000000004],
        ],
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 0, 0, 0),
      {
        center: [0, 0],
        grid: [0, 0],
        corners: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 100, 10, 10),
      {
        center: [2598.0762113533156, 1500],
        grid: [10, 10],
        corners: [
          [2684.6787517317593, 1550],
          [2598.0762113533156, 1600],
          [2511.4736709748718, 1550],
          [2511.4736709748718, 1450],
          [2598.0762113533156, 1400],
          [2684.6787517317593, 1450],
        ],
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 10, 10, 10),
      {
        center: [259.80762113533156, 150],
        grid: [10, 10],
        corners: [
          [268.4678751731759, 155],
          [259.80762113533154, 160],
          [251.14736709748715, 155],
          [251.14736709748715, 145],
          [259.80762113533154, 140],
          [268.4678751731759, 145],
        ],
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 1, 10, 10),
      {
        center: [25.980762113533156, 15],
        grid: [10, 10],
        corners: [
          [26.846787517317594, 15.5],
          [25.980762113533157, 16],
          [25.11473670974872, 15.5],
          [25.11473670974872, 14.5],
          [25.980762113533157, 14],
          [26.846787517317594, 14.5],
        ],
      },
    );
  });

  it('should return center point of flat-topped hexagonal grid system', () => {
    assert.deepEqual(
      gridPoint('flat-topped', 100, 0, 0),
      {
        center: [0, 0],
        corners: [
          [100, 0],
          [50.000000000000014, 86.60254037844386],
          [-49.99999999999998, 86.60254037844388],
          [-100, 1.2246467991473532e-14],
          [-50.00000000000004, -86.60254037844383],
          [50.000000000000014, -86.60254037844386],
        ],
        grid: [0, 0],
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 10, 0, 0),
      {
        center: [0, 0],
        corners: [
          [10, 0],
          [5.000000000000001, 8.660254037844386],
          [-4.999999999999998, 8.660254037844387],
          [-10, 1.2246467991473533e-15],
          [-5.000000000000004, -8.660254037844384],
          [5.000000000000001, -8.660254037844386],
        ],
        grid: [0, 0],
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 1, 0, 0),
      {
        center: [0, 0],
        corners: [
          [1, 0],
          [0.5000000000000001, 0.8660254037844386],
          [-0.4999999999999998, 0.8660254037844387],
          [-1, 1.2246467991473532e-16],
          [-0.5000000000000004, -0.8660254037844384],
          [0.5000000000000001, -0.8660254037844386],
        ],
        grid: [0, 0],
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 0, 0, 0),
      {
        center: [0, 0],
        corners: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        grid: [0, 0],
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 100, 10, 10),
      {
        center: [4500, 866.0254037844386],
        corners: [
          [4600, 866.0254037844386],
          [4550, 952.6279441628825],
          [4450, 952.6279441628825],
          [4400, 866.0254037844386],
          [4450, 779.4228634059948],
          [4550, 779.4228634059947],
        ],
        grid: [10, 10],
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 10, 10, 10),
      {
        center: [450, 86.60254037844385],
        corners: [
          [460, 86.60254037844385],
          [455, 95.26279441628823],
          [445, 95.26279441628823],
          [440, 86.60254037844385],
          [445, 77.94228634059947],
          [455, 77.94228634059947],
        ],
        grid: [10, 10],
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 1, 10, 10),
      {
        center: [45, 8.660254037844386],
        corners: [
          [46, 8.660254037844386],
          [45.5, 9.526279441628825],
          [44.5, 9.526279441628825],
          [44, 8.660254037844386],
          [44.5, 7.794228634059947],
          [45.5, 7.794228634059947],
        ],
        grid: [10, 10],
      },
    );
  });
});

describe('gridPoints', () => {
  it('should return sequential gridPoints (pointy-topped)', () => {
    const result = gridPoints('pointy-topped', 30, 13, 48, 3, 3);
    const expected = [
      gridPoint('pointy-topped', 30, 0, 0, 13, 48),
      gridPoint('pointy-topped', 30, 1, 0, 13, 48),
      gridPoint('pointy-topped', 30, 2, 0, 13, 48),
      gridPoint('pointy-topped', 30, 0, 1, 13, 48),
      gridPoint('pointy-topped', 30, 1, 1, 13, 48),
      gridPoint('pointy-topped', 30, 2, 1, 13, 48),
      gridPoint('pointy-topped', 30, 0, 2, 13, 48),
      gridPoint('pointy-topped', 30, 1, 2, 13, 48),
      gridPoint('pointy-topped', 30, 2, 2, 13, 48),
    ];
    assert.deepEqual(result, expected);
  });

  it('should return sequential gridPoints (flat-topped)', () => {
    const result = gridPoints('flat-topped', 30, 13, 48, 3, 3);
    const expected = [
      gridPoint('flat-topped', 30, 0, 0, 13, 48),
      gridPoint('flat-topped', 30, 1, 0, 13, 48),
      gridPoint('flat-topped', 30, 2, 0, 13, 48),
      gridPoint('flat-topped', 30, 0, 1, 13, 48),
      gridPoint('flat-topped', 30, 1, 1, 13, 48),
      gridPoint('flat-topped', 30, 2, 1, 13, 48),
      gridPoint('flat-topped', 30, 0, 2, 13, 48),
      gridPoint('flat-topped', 30, 1, 2, 13, 48),
      gridPoint('flat-topped', 30, 2, 2, 13, 48),
    ];
    assert.deepEqual(result, expected);
  });
});
