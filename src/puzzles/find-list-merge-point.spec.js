import findMergeNode from "./find-list-merge-point";
import LinkedList, { Node } from "../data-structures/linked-list";

function append(head, node) {
  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = node;
}

describe("findMergeNode", () => {
  test("test 1", () => {
    // 1->2->a
    // 1->a->5->null
    let list1 = LinkedList.fromArray([1, 2]);
    let list2 = LinkedList.fromArray([1]);

    let node = new Node("a", new Node(5));

    append(list1.head, node);
    append(list2.head, node);

    expect(findMergeNode(list1.head, list2.head)).toBe("a");
  });

  test("when both args are the same list", () => {
    let list = LinkedList.fromArray([1, 2]);

    expect(findMergeNode(list.head, list.head)).toBe(1);
  });

  test("avoid infinite loops", () => {
    let list1 = LinkedList.fromArray([1, 2]);
    let list2 = LinkedList.fromArray([1]);
    expect(findMergeNode(list1.head, list2.head)).toBe(null);
  });
});
