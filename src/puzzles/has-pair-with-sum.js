/**
 * O(n), both time and space
 * @param {Array} list An unsorted list of numbers
 * @param {Number} sum The sum we're looking for
 * @returns {Boolean} True if a pair that summed up totals `sum`, False otherwise
 */
const hasPairWithSum = (list, sum) => {
  const compls = new Set();

  for (let value of list) {
    const diff = sum - value;

    if (compls.has(value)) {
      return true;
    }

    compls.add(diff);
  }

  return false;
};

// if we could rely list is sorted
const hasPairWithSumSorted = (list, sum) => {
  let minIndex = 0;
  let maxIndex = list.length - 1;

  while (minIndex < maxIndex) {
    let s = list[minIndex] + list[maxIndex];

    if (s < sum) {
      minIndex++;
    } else if (s > sum) {
      maxIndex--;
    } else {
      return true;
    }
  }

  return false;
};

export default hasPairWithSum;
