import reverseList from "./reverse-doublylinkedlist";
import { DoublyLinkedList } from "../data-structures/linked-list";

describe("reverseList", () => {
  test("returns null when reversing an empty list", () => {
    let list = new DoublyLinkedList();

    expect(reverseList(list.head)).toBe(null);
  });

  test("returns the head of a reversed list", () => {
    let list = DoublyLinkedList.fromArray([1, 2, 3, 4]);
    let rlist = reverseList(list.head);

    expect(DoublyLinkedList.toArray(rlist)).toEqual([4, 3, 2, 1]);
  });
});
