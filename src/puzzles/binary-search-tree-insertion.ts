import { TreeNode } from "../data-structures/tree/binary-tree";

/**
 * Inserts a value in a binary tree (recursive approach)
 * @param root Tree node
 * @param value Value to be added
 * @returns Root node
 */
function insert(root: TreeNode, value: any): TreeNode {
  if (root === null) {
    return new TreeNode(value);
  }

  if (root.value > value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

export { insert };
