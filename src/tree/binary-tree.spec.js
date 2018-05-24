import BinaryTree from "./binary-tree";

describe("BinaryTree", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  it("inserts", () => {
    tree.insert(1);
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(2);

    expect(tree.contains(4)).toBeFalsy();
    expect(tree.contains(3)).toBeTruthy();
  });

  it("contains", () => {
    tree.insert(1);
    tree.insert(1);

    expect(tree.contains(2)).toBeFalsy();
    expect(tree.contains(1)).toBeTruthy();
  });

  it("size", () => {
    tree.insert(5);
    tree.insert(5);

    expect(tree.size()).toBe(1);

    tree.insert(3);
    expect(tree.size()).toBe(2);

    tree.insert(1);
    tree.insert(6);
    tree.insert(1);
    expect(tree.size()).toBe(4);
  });

  it("remove", () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(6);
    //   5
    //  | \
    // 3   8
    //    |
    //   6

    expect(tree.toArray()).toEqual([3, 5, 6, 8]);

    tree.remove(6);
    expect(tree.toArray()).toEqual([3, 5, 8]);

    tree.remove(3);
    expect(tree.toArray()).toEqual([5, 8]);

    tree.insert(6);
    tree.insert(9);
    tree.remove(8);
    expect(tree.toArray()).toEqual([5, 6, 9]);
  });

  it("toArray", () => {
    tree.insert(5);
    tree.insert(5);

    expect(tree.toArray()).toEqual([5]);

    tree.insert(3);
    tree.insert(8);
    tree.insert(6);
    tree.insert(1);
    tree.insert(2);
    expect(tree.toArray()).toEqual([1, 2, 3, 5, 6, 8]);
  });

  it("find", () => {
    tree.insert(5);
    tree.insert(1);
    tree.insert(8);
    tree.insert(6);

    expect(tree.find(8).value).toBe(8);
    expect(tree.find(8).left.value).toBe(6);
  });
});
