export default function powerSet(set) {
  let subsets = [];

  // we'll have 2^n possible combinations (where n is the length of the set)
  const numOfCombinations = 2 ** set.length;

  // each number in binary representation in a range from 0 to 2^n does what we
  // need: shows by its bits (0 or 1) whether to included or not
  // for example, for the set {1, 2, 3} the binary number of 010 means we only
  // need to include "2" to the current set
  for (let combination = 0; combination < numOfCombinations; combination++) {
    let subset = [];

    for (let elemIndex = 0; elemIndex < set.length; elemIndex++) {
      // decide whether to include current element into the subset or not
      if (combination & (1 << elemIndex)) {
        subset.push(set[elemIndex]);
      }
    }

    // add current subset to the list of all subsets
    subsets.push(subset);
  }

  return subsets;
}

// Find all subsets in a Set, by doing a recursion tree
export function powerSetRecur(set) {
  const helper = (list, subset, index, subsets) => {
    if (index === list.length) {
      // collect all sets
      return subsets.push(subset);
    }

    const nextIndex = index + 1;
    // recurive tree
    helper(list, subset, nextIndex, subsets);
    helper(list, subset.concat(list[index]), nextIndex, subsets);
  };

  let result = [];
  helper(set, [], 0, result);
  return result;
}
