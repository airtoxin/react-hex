/* eslint-disable no-mixed-operators,consistent-return */

const THETAS = [0, 1, 2, 3, 4, 5].map(i => Math.PI / 3 * i);
const POINTY = 'pointy-topped';
const FLAT = 'flat-topped';
const RANGE6 = [0, 60, 120, 180, 240, 300];
const SQRT3 = Math.sqrt(3);

const getDiff = (type) => {
  if (type === POINTY) return Math.PI / 6;
  if (type === FLAT) return 0;
};
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

export const corners = (type, x, y, size) => {
  const diff = getDiff(type);
  return THETAS
    .map(theta => theta + diff)
    .map(theta => [x + size * Math.cos(theta), y + size * Math.sin(theta)]);
};

export const hexCorners = (type, x, y, size) => {
  const diff = type === POINTY ? 30 : 0;
  return RANGE6.map((baseDeg) => {
    const rad = Math.PI / 180 * (baseDeg + diff);
    return [x + size * Math.cos(rad), y + size * Math.sin(rad)];
  });
};

export const gridPoint = (oType, oX, oY, size, gridX, gridY) => {
  /* eslint-disable no-else-return */
  /* reason: it seems buggy */
  if (oType === POINTY) {
    const height = size * 2;
    const width = size * SQRT3;
    const diffXFromY = gridY * width / 2;
    const gridPointX = gridX * width + diffXFromY;
    const gridPointY = gridY * height * 0.75;

    const x = gridPointX + oX;
    const y = gridPointY + oY;

    return {
      center: [x, y],
      corners: hexCorners(oType, x, y, size),
      grid: [gridX, gridY],
    };
  } else if (oType === FLAT) {
    const width = size * 2;
    const height = size * SQRT3;
    const diffXFromY = gridY * width * 0.75;
    const gridPointX = gridX * width * 1.5 + diffXFromY;
    const gridPointY = gridY * height / 2;

    const x = gridPointX + oX;
    const y = gridPointY + oY;

    return {
      center: [x, y],
      corners: hexCorners(oType, x, y, size),
      grid: [gridX, gridY],
    };
  } else {
    throw new Error(`grid oType was either ${POINTY} or ${FLAT}`);
  }
  /* eslint-enable no-else-return */
};

export const gridPoints = (oType, oX, oY, size, gridWidth, gridHeight) =>
  product(gridHeight, gridWidth).map(([gridY, gridX]) =>
    gridPoint(oType, size, gridX, gridY, oX, oY));
