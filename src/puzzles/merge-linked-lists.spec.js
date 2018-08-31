import mergeLists from "./merge-linked-lists";
import LinkedList from "../data-structures/linked-list";

describe("mergeLists", () => {
  test("test1", () => {
    let h1 = LinkedList.fromArray([1, 5, 6]);
    let h2 = LinkedList.fromArray([2, 3]);

    expect(mergeLists(h1.head, h2.head).toArray()).toEqual([1, 2, 3, 5, 6]);
  });

  test("test2", () => {
    let h1 = LinkedList.fromArray([1, 2, 3]);
    let h2 = LinkedList.fromArray([3, 4]);

    expect(mergeLists(h1.head, h2.head).toArray()).toEqual([1, 2, 3, 3, 4]);
  });
  test("test3", () => {
    let h1 = LinkedList.fromArray([4, 5, 6]);
    let h2 = LinkedList.fromArray([1, 2, 10]);

    expect(mergeLists(h1.head, h2.head).toArray()).toEqual([1, 2, 4, 5, 6, 10]);
  });
});
