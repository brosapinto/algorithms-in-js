import removeDuplicates, { dropDuplicates } from "./remove-duplicated-nodes";
import LinkedList from "../data-structures/linked-list";

describe("removeDuplicates and dropDuplicates", () => {
  test("should return empty list, when given an empty list", () => {
    let list = new LinkedList();

    expect(removeDuplicates(list.head).toArray()).toEqual([]);
    dropDuplicates(list.head);
    expect(list.toArray()).toEqual([]);
  });

  test("should return all elements, when none occurs more than once", () => {
    let list = LinkedList.fromArray([1, 2, 3, 4]);

    expect(removeDuplicates(list.head).toArray()).toEqual([1, 2, 3, 4]);
    dropDuplicates(list.head);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  test("should keep only unique items", () => {
    let list = LinkedList.fromArray([3, 3, 3, 4, 5, 5]);

    expect(removeDuplicates(list.head).toArray()).toEqual([3, 4, 5]);
    dropDuplicates(list.head);
    expect(list.toArray()).toEqual([3, 4, 5]);
  });
});
