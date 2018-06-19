const defaultComparator = (a, b) => a - b;

export default function binary(
  haystack,
  needle,
  comparator = defaultComparator
) {
  let begin = 0;
  let end = haystack.length - 1;

  while (begin <= end) {
    const middle = begin + Math.floor((end - begin) / 2);
    // compare pivot against needle
    const comparison = comparator(haystack[middle], needle);

    if (comparison === 0) {
      return middle;
    }

    // decide which half of the array to search next
    if (comparison < 0) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}
