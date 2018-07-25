/**
 * Checks if a string `a` can be converted to a string `b` using
 * "replace-all-X-with-Y" operation only, where X and Y are lower-case
 * letters from English alphabet
 * @param {String} a
 * @param {String} b
 * @returns {Boolean}
 */
export default function canTransform(a, b) {
  // it's redundant if they are the same string
  if (a === b) {
    return true;
  }

  // can't if strings don't have same length
  if (a.length !== b.length) {
    return false;
  }

  // collect all chars positions for the first string
  // and then check whether the second string has different
  //  chars at those positions
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    let indexes = [];

    for (let j = 0; j < a.length; j++) {
      if (char === a[j]) {
        indexes.push(j);
      }
    }

    // if string doesn't have the same char multiple times,
    // then it isn't necessary to check any further
    if (indexes.length > 1) {
      for (let i = 0; i < indexes.length - 1; i++) {
        if (b[indexes[i]] !== b[indexes[i + 1]]) {
          return false;
        }
      }
    }
  }

  return true;
}
