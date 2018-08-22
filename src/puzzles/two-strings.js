/**
 * Check whether s1 and s2 share a common char
 * https://www.hackerrank.com/challenges/two-strings/problem
 * @param {String} s1
 * @param {String} s2
 * @returns {Boolean}
 */
export default function twoStrings(s1, s2) {
  if (s1 === s2) {
    return true;
  }

  const uniqChars = new Set(s1.split(""));

  for (let char of uniqChars) {
    if (s2.indexOf(char) !== -1) {
      return true;
    }
  }

  return false;
}
