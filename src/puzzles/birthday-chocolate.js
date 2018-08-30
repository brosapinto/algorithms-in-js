/**
 * Given a list of numbers, find out how many contiguous segments of
 * length `m` exist that add up to `d`
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 * @param {Array} s Chocolate squares
 * @param {Number} d Birthday day
 * @param {Number} m Birthday month
 * @returns {Number} Number of contiguous segments
 */
export default function birthdayChocolate(s, d, m) {
  let ways = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let sum = s.slice(i, i + m).reduce((acc, item) => acc + item, 0);

    if (sum === d) {
      ways++;
    }
  }

  return ways;
}
