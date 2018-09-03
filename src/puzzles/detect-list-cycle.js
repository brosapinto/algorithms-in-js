/**
 * Find cycles in a linked list
 * https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
 * @param {Node} head LinkedList head
 * @returns {Boolean}
 */
export default function hasCycle(head) {
  let slow = head;
  let fast = head; // `fast` pointer moves twice as fast as the `slow`

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // the list has a cycle if both slow and fast are the same node
    if (slow === fast) {
      return true;
    }
  }

  return false;
}
