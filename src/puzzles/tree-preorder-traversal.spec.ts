import preOrder from "./tree-preorder-traversal";
import BinarySearchTree from "../data-structures/tree/binary-tree";

describe("preOrder", () => {
  test("returns empty array when given an empty tree", () => {
    expect(preOrder(null, [])).toEqual([]);
  });

  test("returns an array keeping the same order as input", () => {
    const input = [1, 2, 5, 3, 4, 6];
    const tree = input.reduce((acc, num) => {
      return acc.insert(num);
    }, new BinarySearchTree());

    expect(preOrder(tree.root, [])).toEqual(input);
  });
});
