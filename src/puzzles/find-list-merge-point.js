/**
 * Given two linked lists with a node in common, find that node (O(n) time)
 * https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
 * @param {Node} headA List A head
 * @param {Node} headB List B head
 * @returns {Any} Node value
 */
export default function findMergeNode(headA, headB) {
  let currA = headA;
  let currB = headB;
  let jumpedToHead = 0;

  // 1->2->a
  //       ^
  // 1->a->5->null
  //    ^

  // when the end of the list is reached, jump to the beginning
  // of the other list until both pointers are the same node
  while (currA !== currB) {
    // avoid infinite loops
    if (jumpedToHead > 2) {
      return null;
    }

    if (currA.next === null) {
      currA = headB;
      jumpedToHead++;
    } else {
      currA = currA.next;
    }

    if (currB.next === null) {
      currB = headA;
      jumpedToHead++;
    } else {
      currB = currB.next;
    }
  }

  return currB.value;
}
