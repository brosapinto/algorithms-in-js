const sort = array => {
  // then it's already sorted
  if (array.length <= 1) {
    return array;
  }

  const left = [];
  const right = [];
  const pivot = array.shift();
  const middle = [pivot];

  while (array.length) {
    const current = array.shift();

    if (current === pivot) {
      middle.push(current);
    } else if (current < pivot) {
      left.push(current);
    } else {
      right.push(current);
    }
  }

  // keep sorting left and right arrays
  const leftSorted = sort(left);
  const rightSorted = sort(right);

  // finally, merge all sorted arrays
  return leftSorted.concat(middle, rightSorted);
};

export default function quickSort(list) {
  // clone array to prevent mutating args
  const array = [...list];

  return sort(array);
}
