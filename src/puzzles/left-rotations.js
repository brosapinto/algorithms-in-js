/**
 * Shift an array to the left `numOfRotations` num of times
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/
 * Complexity: O(n)
 */
export default function leftRotation(list, numOfRotations) {
  if (list.length < 1) {
    return list;
  }

  let array = [...list];
  let numOfShifts = numOfRotations % list.length;

  while (numOfShifts-- > 0) {
    array.push(array.shift());
  }

  return array;
}
