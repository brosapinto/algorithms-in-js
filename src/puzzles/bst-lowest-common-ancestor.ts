import { TreeNode } from "../data-structures/tree/binary-tree";

/**
 * Find the lowest common ancestor of two nodes, in a binary search tree
 * @param n1 Tree node
 * @param n2 Tree noe
 * @returns Lowest common ancestor
 */
function lowestAncestor(
  root: TreeNode,
  n1: TreeNode,
  n2: TreeNode
): TreeNode | null {
  if (n1 === null || n2 === null) {
    return null;
  }

  return null;
}

export { lowestAncestor };
