import DoublyLinkedList from "./doubly-linked-list";

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe("push", () => {
    test("appends value to the list", () => {
      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    test("increments list length", () => {
      expect(list.length).toBe(0);

      list.push(1);
      expect(list.length).toBe(1);

      list.push(1).push(2);
      expect(list.length).toBe(3);
    });
  });

  describe("reduce", () => {
    test("returns accumulator when list is empty", () => {
      let acc = [];

      expect(list.reduce(() => {}, acc)).toBe(acc);
    });

    test("loops over the list and calls callback on each iteration", () => {
      let result = DoublyLinkedList.fromArray([1, 2, 3, 4]).reduce(
        (acc, item) => {
          acc.push(item * 10);
          return acc;
        },
        []
      );

      expect(result).toEqual([10, 20, 30, 40]);
    });
  });

  describe("fromArray", () => {
    test("converts an empty array into an empty list", () => {
      let dlist = DoublyLinkedList.fromArray([]);

      expect(dlist).toEqual({
        head: null,
        length: 0,
        tail: null
      });
    });

    test("converts an array into a list and keeps order", () => {
      let dlist = DoublyLinkedList.fromArray([10, 5, 3, 12, 8]);

      expect(dlist.toArray()).toEqual([10, 5, 3, 12, 8]);
    });
  });
});
