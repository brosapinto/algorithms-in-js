import { TreeNode } from "../data-structures/tree/binary-tree";

interface NodeQueue {
  node: TreeNode;
  level: number;
}
interface Table {
  [key: number]: any;
}

/**
 * Calculates the height of a binary tree iteratively
 * @param root Node of a binary tree
 * @returns Height of the tree
 */
function treeHeight(root: TreeNode): number {
  if (root === null) {
    return 0;
  }

  const nodes: Table = {};
  const queue: NodeQueue[] = [{ node: root, level: 0 }];

  while (queue.length) {
    const item = queue.shift();
    const level = item!.level;
    const node = item!.node;

    if (!nodes.hasOwnProperty(level)) {
      nodes[level] = node.value;
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return Object.keys(nodes).length - 1;
}

export { treeHeight };
