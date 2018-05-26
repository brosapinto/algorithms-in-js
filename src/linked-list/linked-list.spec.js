import LinkedList from "./linked-list";

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it("append", () => {
    list.append("hello");
    list.append("world");
    list.append("!");

    expect(list.toArray()).toEqual(["hello", "world", "!"]);
    expect(list.lenght()).toBe(3);
  });

  it("delete", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.lenght()).toBe(3);
    list.delete(2);

    expect(list.toArray()).toEqual([1, 3]);
    expect(list.lenght()).toBe(2);
  });

  it("deleteTail", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toArray()).toEqual([1, 2, 3]);

    list.deleteTail();
    expect(list.toArray()).toEqual([1, 2]);
  });

  it("insertAfter", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(0, 2);

    expect(list.lenght()).toBe(4);
    expect(list.toArray()).toEqual([1, 2, 0, 3]);
  });

  it("traverse", () => {
    const callbak = jasmine.createSpy("iter");

    list.append(1);
    list.append(2);
    list.append(3);

    list.traverse(callbak);
    expect(callbak.calls.allArgs()).toEqual([[1], [2], [3]]);
  });

  it("find", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.find({ value: 2 })).toEqual(2);
    expect(list.find({ callback: val => val === 2 })).toEqual(2);
  });

  it("toArray", () => {
    list.append(1);
    list.append(2);
    expect(list.toArray()).toEqual([1, 2]);
  });

  it("last", () => {
    list.append(1);
    list.append(3);
    list.append(2);

    expect(list.last().value).toBe(2);
  });

  it("prev", () => {
    list.append(1);
    list.append(3);
    list.append(2);
    list.append(5);

    expect(list.prev(list.last()).value).toBe(2);
    expect(list.prev(list.prev(list.last())).value).toBe(3);
  });

  it("swap", () => {
    list.append(1);
    list.append(3);
    list.append(2);
    list.append(5);

    expect(list.toArray()).toEqual([1, 3, 2, 5]);
    expect(list.swap(list.head, list.last()));
    expect(list.toArray()).toEqual([5, 3, 2, 1]);

    expect(list.swap(list.head.next, list.prev(list.last())));
    expect(list.toArray()).toEqual([5, 2, 3, 1]);
  });
});
