function getRegionSize(matrix, row, col) {
  // row col position is out of bounds
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
    return 0;
  }

  if (matrix[row][col] === 0) {
    return 0;
  }

  matrix[row][col] = 0; // set as visited

  // recursively visit every neighbour
  return (
    1 +
    getRegionSize(matrix, row + 1, col) +
    getRegionSize(matrix, row - 1, col) +
    getRegionSize(matrix, row, col + 1) +
    getRegionSize(matrix, row, col - 1)
  );
}

export default function connectedCells(matrix) {
  let maxRegion = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 0) {
        const size = getRegionSize(matrix, row, col);
        maxRegion = Math.max(maxRegion, size);
      }
    }
  }

  return maxRegion;
}
