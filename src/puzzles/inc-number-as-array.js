/**
 * Representing a number as an array (i.e. [1,2,3] is 123), add 1 to it
 * @param {Array} list List of numbers
 * @returns {Array} New list of numbers
 */
const numArraySumIter = list => {
  const result = [];
  let len = list.length;
  let carry = 1;

  while (len-- > 0) {
    const val = list[len];
    let sum = val + carry;

    if (sum > 9) {
      sum = 0;
    } else {
      carry = 0;
    }

    result.unshift(sum);
  }

  if (carry === 1) {
    result.unshift(1);
  }

  return result;
};

// This recursive approach mutates `list`
const numArraySum = (list, index = list.length - 1) => {
  const value = list[index];
  const sum = value + 1;

  if (index < 0) {
    list.unshift(1);
    return list;
  }

  if (sum > 9) {
    list[index] = 0;
    return numArraySum(list, index - 1);
  }

  list[index] = sum;
  return list;
};

export default numArraySumIter;
