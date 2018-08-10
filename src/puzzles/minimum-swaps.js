/**
 * https://www.hackerrank.com/challenges/minimum-swaps-2/
 * The array must be of consecutive numbers
 */
export default function minSwaps(arr) {
  let list = [...arr];
  let swaps = 0;

  for (let i = 0, iLen = list.length; i < iLen; i++) {
    if (list[i] - 1 === i) {
      continue;
    }

    let tmp = list[i];
    list[i] = list[tmp - 1];
    list[tmp - 1] = tmp;
    swaps++;
    i--;
  }

  return swaps;
}
