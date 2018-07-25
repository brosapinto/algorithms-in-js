/**
 * Checks whether a word is a palindrome
 * @param {String} word
 * @returns {Boolean}
 */
export default function palindrome(word) {
  if (word.length === 0) {
    return false;
  }

  let begin = 0;
  let end = word.length - 1;

  while (begin < end) {
    if (word[begin] !== word[end]) {
      return false;
    }

    begin++;
    end--;
  }

  return true;
}
