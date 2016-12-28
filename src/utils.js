/* eslint-disable no-mixed-operators */
/* reason: optimize calculations */
const POINTY = 'pointy-topped';
const FLAT = 'flat-topped';
const RANGE6 = [0, 60, 120, 180, 240, 300];
const SQRT3 = Math.sqrt(3);

const range = n => Array.from(Array(n).keys());
const product = (p, q) => {
  const l = [];
  range(p).forEach((i) => {
    range(q).forEach((j) => {
      l.push([i, j]);
    });
  });
  return l;
};

export const hexCorners = (type, x, y, size) => {
  const diff = type === POINTY ? 30 : 0;
  return RANGE6.map((baseDeg) => {
    const rad = Math.PI / 180 * (baseDeg + diff);
    return [x + size * Math.cos(rad), y + size * Math.sin(rad)];
  });
};

export const gridPoint = (type, size, gridX, gridY, oX = 0, oY = 0) => {
  /* eslint-disable no-else-return */
  /* reason: it seems buggy */
  if (type === POINTY) {
    const height = size * 2;
    const width = size * SQRT3;
    const diffXFromY = gridY * width / 2;
    const gridPointX = gridX * width + diffXFromY;
    const gridPointY = gridY * height * 0.75;

    const x = gridPointX + oX;
    const y = gridPointY + oY;

    return {
      center: [x, y],
      corners: hexCorners(type, x, y, size),
      grid: [gridX, gridY],
    };
  } else if (type === FLAT) {
    const width = size * 2;
    const height = size * SQRT3;
    const diffXFromY = gridY * width * 0.75;
    const gridPointX = gridX * width * 1.5 + diffXFromY;
    const gridPointY = gridY * height / 2;

    const x = gridPointX + oX;
    const y = gridPointY + oY;

    return {
      center: [x, y],
      corners: hexCorners(type, x, y, size),
      grid: [gridX, gridY],
    };
  } else {
    throw new Error(`grid type was either ${POINTY} or ${FLAT}`);
  }
  /* eslint-enable no-else-return */
};

export const gridPoints = (type, size, oX, oY, gridWidth, gridHeight) =>
  product(gridHeight, gridWidth).map(([gridY, gridX]) =>
    gridPoint(type, size, gridX, gridY, oX, oY));
