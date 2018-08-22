import HashTable from "../data-structures/hash-table";

/**
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 * @param {Array<String>} magazine
 * @param {Array<String>} note
 * @returns {Boolean}
 */
export default function checkMagazine(magazine, note) {
  const mag = magazine.reduce(
    (acc, word) => acc.insert(word, word),
    new HashTable()
  );

  return note.every(word => mag.delete(word) !== null);
}
