import LinkedList from "../data-structures/linked-list";

/**
 * Given a sorted LinkedList, return a new list without duplicate elements
 * https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem
 * @param {Node} head Node of a LinkedList
 * @returns {LinkedList}
 */
export default function removeDuplicates(head) {
  let list = new LinkedList();
  let prevVal = null;

  while (head !== null) {
    if (head.value !== prevVal) {
      list.push(head.value);
      prevVal = head.value;
    }

    head = head.next;
  }

  return list;
}

/**
 * Given a sorted LinkedList, remove any duplicate element (mutates list)
 * https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem
 * @param {Node} head Node of a LinkedList
 * @returns {Node}
 */
export function dropDuplicates(head) {
  if (head === null) {
    return head;
  }

  let prev = head;
  let curr = head.next;

  while (curr !== null) {
    if (prev.value === curr.value) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return prev;
}
