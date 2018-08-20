/**
 * https://hr-testcases-us-east-1.s3.amazonaws.com/1636/input07.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1533921273&Signature=2Ureeckqw11s6nAZyku6GMbbf7I%3D&response-content-type=text%2Fplain
 * @param {Number} n (3 <= n <= 10e7)
 * @param {Array<Array>} queries Matrix
 * @returns {Number}
 * @example
 * Input:
 * [
 *  [a, b, k],
 *  [a, b, k],
 *  [a, b, k]
 * ]
 * 1 <= a <= b <= n
 * 0 <= k <= 10e9
 *
 */
export default function arrayManipulation(n, queries) {
  let arr = Array(n).fill(0);

  // queries index start at 1, instead of 0
  // instead of adding `sum` to each elem from `start` to `end`,
  // add `sum` to `start` and remove `sum` from `end + 1`
  for (let i = 0; i < queries.length; i++) {
    let [start, end, sum] = queries[i];

    if (start < 1 || end > n + 1) {
      continue;
    }

    arr[start - 1] += sum;
    arr[end] -= sum;
  }

  let max = 0;
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];

    if (acc > max) {
      max = acc;
    }
  }

  return max;
}
