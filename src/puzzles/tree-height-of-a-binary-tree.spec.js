import { treeHeight } from "./tree-height-of-a-binary-tree";
import BinaryTree from "../data-structures/tree/binary-tree";

describe("height of a binary tree", () => {
  test("returns 0 for an empty tree", () => {
    expect(treeHeight(null)).toBe(0);
  });

  test("balanced tree", () => {
    const tree = new BinaryTree()
      .insert(4)
      .insert(2)
      .insert(6)
      .insert(1)
      .insert(3)
      .insert(5)
      .insert(7);

    expect(treeHeight(tree.root)).toBe(2);
  });

  test("unbalanced tree", () => {
    const tree = new BinaryTree()
      .insert(3)
      .insert(2)
      .insert(5)
      .insert(4)
      .insert(6)
      .insert(7);

    expect(treeHeight(tree.root)).toBe(3);
  });
});
