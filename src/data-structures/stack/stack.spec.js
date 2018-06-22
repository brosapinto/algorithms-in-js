import Stack from "./stack";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("isEmpty", () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("push", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.toArray()).toEqual([2, 1]);
  });

  it("pop", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
    expect(stack.pop()).toBe(3);
    expect(stack.toArray()).toEqual([2, 1]);
  });

  it("peek", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

  it("toArray", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
