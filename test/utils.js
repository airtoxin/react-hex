import assert from 'assert';
import { gridPoint, gridPoints } from '../src/utils';

describe('gridPoint', () => {
  it('should return center point of pointy-topped hexagonal grid system', () => {
    assert.deepEqual(
      gridPoint('pointy-topped', 0, 0, 100, 0, 0),
      {
        corners: [
          [86.60254037844388, 49.99999999999999],
          [6.123233995736766e-15, 100],
          [-86.60254037844388, 49.99999999999999],
          [-86.60254037844386, -50.000000000000014],
          [-1.8369701987210297e-14, -100],
          [86.60254037844383, -50.00000000000004],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 100,
          type: 'pointy-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 0, 0, 10, 0, 0),
      {
        corners: [
          [8.660254037844387, 4.999999999999999],
          [6.123233995736766e-16, 10],
          [-8.660254037844387, 4.999999999999999],
          [-8.660254037844386, -5.000000000000001],
          [-1.8369701987210296e-15, -10],
          [8.660254037844384, -5.000000000000004],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 10,
          type: 'pointy-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 0, 0, 1, 0, 0),
      {
        corners: [
          [0.8660254037844387, 0.49999999999999994],
          [6.123233995736766e-17, 1],
          [-0.8660254037844387, 0.49999999999999994],
          [-0.8660254037844386, -0.5000000000000001],
          [-1.8369701987210297e-16, -1],
          [0.8660254037844384, -0.5000000000000004],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 1,
          type: 'pointy-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 0, 0, 0, 0, 0),
      {
        corners: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 0,
          type: 'pointy-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 10, 10, 100, 10, 10),
      {
        corners: [
          [2694.6787517317593, 1560],
          [2608.0762113533156, 1610],
          [2521.4736709748718, 1560],
          [2521.4736709748718, 1460],
          [2608.0762113533156, 1410],
          [2694.6787517317593, 1460],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 100,
          type: 'pointy-topped',
          x: 2608.0762113533156,
          y: 1510,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 10, 10, 10, 10, 10),
      {
        corners: [
          [278.4678751731759, 165],
          [269.80762113533154, 170],
          [261.1473670974872, 165],
          [261.1473670974872, 155],
          [269.80762113533154, 150],
          [278.4678751731759, 155],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 10,
          type: 'pointy-topped',
          x: 269.80762113533154,
          y: 160,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 10, 10, 1, 10, 10),
      {
        corners: [
          [36.8467875173176, 25.5],
          [35.98076211353316, 26],
          [35.11473670974872, 25.5],
          [35.11473670974872, 24.5],
          [35.98076211353316, 24],
          [36.8467875173176, 24.5],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 1,
          type: 'pointy-topped',
          x: 35.98076211353316,
          y: 25,
        },
      },
    );
    assert.deepEqual(
      gridPoint('pointy-topped', 10, 10, 0, 10, 10),
      {
        corners: [
          [10, 10],
          [10, 10],
          [10, 10],
          [10, 10],
          [10, 10],
          [10, 10],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 0,
          type: 'pointy-topped',
          x: 10,
          y: 10,
        },
      },
    );
  });

  it('should return center point of flat-topped hexagonal grid system', () => {
    assert.deepEqual(
      gridPoint('flat-topped', 0, 0, 100, 0, 0),
      {
        corners: [
          [100, 0],
          [50.000000000000014, 86.60254037844386],
          [-49.99999999999998, 86.60254037844388],
          [-100, 1.2246467991473532e-14],
          [-50.00000000000004, -86.60254037844383],
          [50.000000000000014, -86.60254037844386],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 100,
          type: 'flat-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 0, 0, 10, 0, 0),
      {
        corners: [
          [10, 0],
          [5.000000000000001, 8.660254037844386],
          [-4.999999999999998, 8.660254037844387],
          [-10, 1.2246467991473533e-15],
          [-5.000000000000004, -8.660254037844384],
          [5.000000000000001, -8.660254037844386],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 10,
          type: 'flat-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 0, 0, 1, 0, 0),
      {
        corners: [
          [1, 0],
          [0.5000000000000001, 0.8660254037844386],
          [-0.4999999999999998, 0.8660254037844387],
          [-1, 1.2246467991473532e-16],
          [-0.5000000000000004, -0.8660254037844384],
          [0.5000000000000001, -0.8660254037844386],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 1,
          type: 'flat-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 0, 0, 0, 0, 0),
      {
        corners: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        gridX: 0,
        gridY: 0,
        props: {
          size: 0,
          type: 'flat-topped',
          x: 0,
          y: 0,
        },
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 10, 10, 100, 10, 10),
      {
        corners: [
          [4610, 876.0254037844386],
          [4560, 962.6279441628825],
          [4460, 962.6279441628825],
          [4410, 876.0254037844386],
          [4460, 789.4228634059948],
          [4560, 789.4228634059947],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 100,
          type: 'flat-topped',
          x: 4510,
          y: 876.0254037844386,
        },
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 10, 10, 10, 10, 10),
      {
        corners: [
          [470, 96.60254037844385],
          [465, 105.26279441628823],
          [455, 105.26279441628823],
          [450, 96.60254037844385],
          [455, 87.94228634059947],
          [465, 87.94228634059947],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 10,
          type: 'flat-topped',
          x: 460,
          y: 96.60254037844385,
        },
      },
    );
    assert.deepEqual(
      gridPoint('flat-topped', 10, 10, 1, 10, 10),
      {
        corners: [
          [56, 18.660254037844386],
          [55.5, 19.526279441628823],
          [54.5, 19.526279441628823],
          [54, 18.660254037844386],
          [54.5, 17.794228634059948],
          [55.5, 17.794228634059948],
        ],
        gridX: 10,
        gridY: 10,
        props: {
          size: 1,
          type: 'flat-topped',
          x: 55,
          y: 18.660254037844386,
        },
      },
    );
  });
});

describe('gridPoints', () => {
  it('should return sequential gridPoints (pointy-topped)', () => {
    const result = gridPoints('pointy-topped', 13, 48, 30, 3, 3);
    const expected = [
      gridPoint('pointy-topped', 13, 48, 30, 0, 0),
      gridPoint('pointy-topped', 13, 48, 30, 1, 0),
      gridPoint('pointy-topped', 13, 48, 30, 2, 0),
      gridPoint('pointy-topped', 13, 48, 30, 0, 1),
      gridPoint('pointy-topped', 13, 48, 30, 1, 1),
      gridPoint('pointy-topped', 13, 48, 30, 2, 1),
      gridPoint('pointy-topped', 13, 48, 30, 0, 2),
      gridPoint('pointy-topped', 13, 48, 30, 1, 2),
      gridPoint('pointy-topped', 13, 48, 30, 2, 2),
    ];
    assert.deepEqual(result, expected);
  });

  it('should return sequential gridPoints (flat-topped)', () => {
    const result = gridPoints('flat-topped', 13, 48, 30, 3, 3);
    const expected = [
      gridPoint('flat-topped', 13, 48, 30, 0, 0),
      gridPoint('flat-topped', 13, 48, 30, 1, 0),
      gridPoint('flat-topped', 13, 48, 30, 2, 0),
      gridPoint('flat-topped', 13, 48, 30, 0, 1),
      gridPoint('flat-topped', 13, 48, 30, 1, 1),
      gridPoint('flat-topped', 13, 48, 30, 2, 1),
      gridPoint('flat-topped', 13, 48, 30, 0, 2),
      gridPoint('flat-topped', 13, 48, 30, 1, 2),
      gridPoint('flat-topped', 13, 48, 30, 2, 2),
    ];
    assert.deepEqual(result, expected);
  });
});
