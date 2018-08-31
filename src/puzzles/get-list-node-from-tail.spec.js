import getNode from "./get-list-node-from-tail";
import LinkedList from "../data-structures/linked-list";

describe("getNode", () => {
  test("assertions", () => {
    let list = LinkedList.fromArray([1, 2, 3, 4, 5, 6]);

    expect(getNode(list.head, 0)).toBe(6);
    expect(getNode(list.head, 1)).toBe(5);
    expect(getNode(list.head, 3)).toBe(3);
    expect(getNode(list.head, 5)).toBe(1);
  });
});
