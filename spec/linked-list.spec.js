import LinkedList from "../src/linked-list";

describe("LinkedList", () => {
  it("add", () => {
    const list = new LinkedList();
    list.add("hello");
    list.add("world");
    list.add("!");

    expect(list.toArray()).toEqual(["hello", "world", "!"]);
    expect(list.lenght()).toBe(3);
  });

  it("remove", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.lenght()).toBe(3);
    list.remove(2);

    expect(list.toArray()).toEqual([1, 3]);
    expect(list.lenght()).toBe(2);
  });

  it("insertAfter", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.insertAfter(0, 2);

    expect(list.lenght()).toBe(4);
    expect(list.toArray()).toEqual([1, 2, 0, 3]);
  });

  it("traverse", () => {
    const callbak = jasmine.createSpy("iter");

    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    list.traverse(callbak);
    expect(callbak.calls.allArgs()).toEqual([[1], [2], [3]]);
  });
});
