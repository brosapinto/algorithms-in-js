import { TreeNode } from "../data-structures/tree/binary-tree";

export default function preOrder(
  node: TreeNode | null,
  accumulator: Array<any>
): Array<any> {
  if (node !== null) {
    accumulator.push(node.value);

    if (node.left !== null) {
      preOrder(node.left, accumulator);
    }

    if (node.right !== null) {
      preOrder(node.right, accumulator);
    }
  }

  return accumulator;
}
