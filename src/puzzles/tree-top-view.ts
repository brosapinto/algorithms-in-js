import { TreeNode } from "../data-structures/tree/binary-tree";

interface Table {
  [key: number]: any;
}

interface QueueNode {
  node: TreeNode;
  level: number;
}

// https://www.hackerrank.com/challenges/tree-top-view
export const topView = (root: TreeNode): Array<any> => {
  let nodes: Table = {};
  let queue: QueueNode[] = [];

  if (root === null) {
    return [];
  }

  queue.push({ node: root, level: 0 });

  while (queue.length > 0) {
    const n = queue.shift();
    const level = n!.level;
    const node = n!.node;

    if (!nodes.hasOwnProperty(level)) {
      nodes[level] = node.value;
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level - 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return Object.keys(nodes)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map(k => nodes[parseInt(k, 10)]);
};
