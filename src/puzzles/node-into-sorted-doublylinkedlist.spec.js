import sortedInsert from "./node-into-sorted-doublylinkedlist";
import { DoublyLinkedList } from "../data-structures/linked-list";

describe("sortedInsert", () => {
  test("returns a new head given an empty list", () => {
    let list = new DoublyLinkedList();

    expect(sortedInsert(list.head, 1)).toEqual({
      next: null,
      prev: null,
      value: 1
    });
  });

  test("prepends value to the list, when it is the smallest value", () => {
    let list = DoublyLinkedList.fromArray([2, 3, 4]);
    let head = sortedInsert(list.head, 1);

    expect(DoublyLinkedList.toArray(head)).toEqual([1, 2, 3, 4]);
  });

  test("inserts at the middle of the list", () => {
    let list = DoublyLinkedList.fromArray([1, 3, 4, 10]);
    let head = sortedInsert(list.head, 5);

    expect(DoublyLinkedList.toArray(head)).toEqual([1, 3, 4, 5, 10]);
  });

  test("appends value to the list, when it is the new biggest value", () => {
    let list = DoublyLinkedList.fromArray([1, 3, 4]);
    let head = sortedInsert(list.head, 6);

    expect(DoublyLinkedList.toArray(head)).toEqual([1, 3, 4, 6]);
  });
});
