/**
 * Get the value of a node at a position, counting from the tail
 * In O(n) time and O(1) space
 * Start by incrementing a _runner pointer_ `posFromTail` number of times and
 * then start incrementing the _needle_ pointer until _runner pointer_ reaches
 * the end of the list. When that happens, the _needle_ pointer should be at
 * the position we're looking for, due to the gap between both pointers.
 * https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/
 * @param {Node} head LinkedList node
 * @param {Number} posFromTail Positive index from end of the list (0 means tail)
 * @returns {Any} Node value
 */
export default function getNode(head, posFromTail) {
  let current = head;
  let runner = head;

  // increment pointer `posFromTail` num of times
  for (let i = 0; i < posFromTail; i++) {
    runner = runner.next;
  }

  while (runner.next !== null) {
    runner = runner.next;
    current = current.next;
  }

  return current.value;
}
