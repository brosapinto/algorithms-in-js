import LinkedList from "./linked-list";

describe("LinkedList", () => {
  it("append", () => {
    const list = new LinkedList();
    list.append("hello");
    list.append("world");
    list.append("!");

    expect(list.toArray()).toEqual(["hello", "world", "!"]);
    expect(list.lenght()).toBe(3);
  });

  it("delete", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.lenght()).toBe(3);
    list.delete(2);

    expect(list.toArray()).toEqual([1, 3]);
    expect(list.lenght()).toBe(2);
  });

  it("insertAfter", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(0, 2);

    expect(list.lenght()).toBe(4);
    expect(list.toArray()).toEqual([1, 2, 0, 3]);
  });

  it("traverse", () => {
    const callbak = jasmine.createSpy("iter");

    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.traverse(callbak);
    expect(callbak.calls.allArgs()).toEqual([[1], [2], [3]]);
  });

  it("find", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.find({ value: 2 })).toEqual(2);
    expect(list.find({ callback: val => val === 2 })).toEqual(2);
  });
});