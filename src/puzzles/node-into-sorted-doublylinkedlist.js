import { DoublyLinkedNode } from "../data-structures/linked-list";

/**
 * Insert a value in a sorted doubly linked list, keeping the list sorted
 * https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem
 * @param {Node} head DoublyLinkedList head
 * @param {Number} value Number to be inserted
 * @returns {Node} DoublyLinkedList head
 */
export default function sortedInsert(head, value) {
  let node = new DoublyLinkedNode(value);

  if (head === null) {
    return node;
  }

  // prepend if value is less than head
  if (head.value > value) {
    node.next = head;
    return node;
  }

  // insert at the middle
  let prev = head;
  let curr = head.next;

  while (curr !== null) {
    if (curr.value > value) {
      node.prev = curr.prev;
      curr.prev = node;
      node.next = curr;
      break;
    }

    prev = curr;
    curr = curr.next;
  }

  // we might be at the end of the list and the value wasn't
  // inserted because it's the new biggest value on the list
  if (prev.value <= value) {
    prev.next = node;
  }

  return head;
}
