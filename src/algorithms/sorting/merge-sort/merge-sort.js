// mutable concat
const concat = (dest, list) => [].push.apply(dest, list);

const merge = (left, right) => {
  let sorted = [];

  while (left.length && right.length) {
    const min = left[0] <= right[0] ? left.shift() : right.shift();

    sorted.push(min);
  }

  // if left or right still have elements, just concat them
  concat(sorted, left);
  concat(sorted, right);

  return sorted;
};

const split = list => {
  if (list.length <= 1) {
    return list;
  }

  // split into two halves
  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  // merge two halves into one
  return merge(split(left), split(right));
};

export default list => split(list);
