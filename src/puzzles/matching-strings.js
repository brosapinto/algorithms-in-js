/**
 * Return an array with how many times a _query_ appears in a list of _strings_
 * https://www.hackerrank.com/challenges/sparse-arrays/problem
 * @param {Array} strings
 * @param {Array} queries
 * @returns {Array}
 */
export default function matchingStrings(strings, queries) {
  if (!queries.length) {
    return [];
  }

  const dict = strings.reduce((acc, str) => {
    if (!acc.hasOwnProperty(str)) {
      acc[str] = 0;
    }

    acc[str] += 1;
    return acc;
  }, {});

  return queries.map(query => dict[query] || 0);
}
