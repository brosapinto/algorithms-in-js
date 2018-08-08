/**
 * https://www.hackerrank.com/challenges/new-year-chaos/
 * test case: https://hr-testcases-us-east-1.s3.amazonaws.com/15305/input06.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1533222636&Signature=o8rlrTChJZ%2Fu%2BKFxwVNoHLJAXeY%3D&response-content-type=text%2Fplain
 */
export default function minBribes(q) {
  let bribes = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    let num = q[i];
    let offset = num - i - 1;

    // abort if `num` has moved ahead more than 2 positions
    if (offset > 2) {
      return -1;
    }

    // define a search subset to look up for numbers bigger than current `num`
    // that is, find all numbers that have moved ahead of `num` in the line
    let start = Math.max(0, num - 2);
    for (; start < i; start++) {
      if (q[start] > num) {
        bribes++;
      }
    }
  }

  return bribes;
}
