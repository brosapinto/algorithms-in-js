export default function longestCommonSubstr(str1, str2) {
  // init matrix of all substring lengths to use DP approach
  const substrMatrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  // fill first row and column with zeros to provide initial values
  for (let col = 0; col <= str1.length; col++) {
    substrMatrix[0][col] = 0;
  }

  for (let row = 0; row <= str2.length; row++) {
    substrMatrix[row][0] = 0;
  }

  let longestSubstrLength = 0;
  let longestSubstrCol = 0;
  let longestSubstrRow = 0;

  for (let row = 1; row <= str2.length; row++) {
    for (let col = 1; col <= str1.length; col++) {
      if (str1[col - 1] === str2[row - 1]) {
        substrMatrix[row][col] = substrMatrix[row - 1][col - 1] + 1;
      } else {
        substrMatrix[row][col] = 0;
      }

      // find the biggest length of all common substr lengths
      // and memoize its last character position (indices)
      if (substrMatrix[row][col] > longestSubstrLength) {
        longestSubstrLength = substrMatrix[row][col];
        longestSubstrCol = col;
        longestSubstrRow = row;
      }
    }
  }

  // nothing has been found
  if (longestSubstrLength === 0) {
    return "";
  }

  // detect the longest substring from the matrix
  let longestSubstr = "";

  while (substrMatrix[longestSubstrRow][longestSubstrCol] > 0) {
    longestSubstr = str1[longestSubstrCol - 1] + longestSubstr;
    longestSubstrRow -= 1;
    longestSubstrCol -= 1;
  }

  return longestSubstr;
}
