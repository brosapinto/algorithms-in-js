const createMatrix = (numRows, numCols) => {
  let matrix = Array(numRows + 1)
    .fill(null)
    .map(() => Array(numCols + 1).fill(null));

  // fill first row and column with zeros to provide initial values
  for (let col = 0; col <= numCols; col++) {
    matrix[0][col] = 0;
  }

  for (let row = 0; row <= numRows; row++) {
    matrix[row][0] = 0;
  }

  return matrix;
};

export default function longestCommonSubseq(set1, set2) {
  const numRows = set2.length;
  const numCols = set1.length;
  const lcsMatrix = createMatrix(numRows, numCols);

  // fill rest of the column that correspond to each of two strings.
  for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
      if (set1[col - 1] === set2[row - 1]) {
        lcsMatrix[row][col] = lcsMatrix[row - 1][col - 1] + 1;
      } else {
        lcsMatrix[row][col] = Math.max(
          lcsMatrix[row - 1][col],
          lcsMatrix[row][col - 1]
        );
      }
    }
  }

  // calculate LCS based on LCS matrix.
  if (!lcsMatrix[numRows][numCols]) {
    // return empty string if length of LCS is zero
    return [""];
  }

  const longestSequence = [];
  let columnIndex = numCols;
  let rowIndex = numRows;

  while (columnIndex > 0 || rowIndex > 0) {
    if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
      // move by diagonal left-top.
      longestSequence.unshift(set1[columnIndex - 1]);
      columnIndex--;
      rowIndex--;
    } else if (
      lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]
    ) {
      // Move left.
      columnIndex--;
    } else {
      // Move up.
      rowIndex--;
    }
  }

  return longestSequence;
}
