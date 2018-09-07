import { DoublyLinkedNode } from "../data-structures/linked-list";

export default function reverseList(head) {
  if (head === null) {
    return null;
  }

  let nhead = new DoublyLinkedNode(head.value);
  let curr = head.next;

  while (curr !== null) {
    let node = new DoublyLinkedNode(curr.value);
    node.next = nhead;
    nhead.prev = node;

    nhead = node;
    curr = curr.next;
  }

  return nhead;
}
