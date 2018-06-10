const helper = (list, subset, index, result) => {
  if (index === list.length) {
    // collect all sets
    return result.push(subset);
  }

  const nextIndex = index + 1;
  // recursive tree
  helper(list, subset, nextIndex, result);
  helper(list, subset.concat(list[index]), nextIndex, result);
};

/**
 * Find all subsets in a Set, by doing a recursion tree
 * @param {Array} list List of items
 * @param {Array} List of sets
 */
const allSubsets = list => {
  const result = [];
  helper(list, [], 0, result);
  return result;
};

export default allSubsets;
