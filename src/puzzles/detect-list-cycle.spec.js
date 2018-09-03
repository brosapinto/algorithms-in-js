import hasCycle from "./detect-list-cycle";
import LinkedList, { Node } from "../data-structures/linked-list";

describe("hasCycle", () => {
  test("should return false", () => {
    let list = LinkedList.fromArray([]);
    expect(hasCycle(list.head)).toBe(false);

    list = LinkedList.fromArray([1, 2, 3]);
    expect(hasCycle(list.head)).toBe(false);
  });

  test("should return true", () => {
    // 1->2->1
    let list = new LinkedList();
    list.push(1);
    list.head.next = new Node(2, list.head);

    expect(hasCycle(list.head)).toBe(true);
  });
});
