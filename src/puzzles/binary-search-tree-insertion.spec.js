import { insert } from "./binary-search-tree-insertion";
import BinaryTree, { TreeNode } from "../data-structures/tree/binary-tree";

describe("insert node in binary tree", () => {
  test("inserting first node", () => {
    expect(insert(null, 1)).toEqual(new TreeNode(1));
  });

  test("inserting last node", () => {
    const tree = new BinaryTree()
      .insert(2)
      .insert(1)
      .insert(3);

    insert(tree.root, 5);
    expect(tree.toArray()).toEqual([1, 2, 3, 5]);
  });

  test("inserting somewhere in the tree", () => {
    const tree = new BinaryTree()
      .insert(4)
      .insert(1)
      .insert(6);

    insert(tree.root, 3);
    expect(tree.toArray()).toEqual([1, 3, 4, 6]);
  });
});
