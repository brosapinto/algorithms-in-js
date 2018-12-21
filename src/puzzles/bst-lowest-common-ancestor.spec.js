import { lowestAncestor } from "./bst-lowest-common-ancestor";
import BinaryTree from "../data-structures/tree/binary-tree";

xdescribe("find lowest ancestor of two nodes", () => {
  test("returns null when root is null", () => {
    const tree = new BinaryTree().insert(1).insert(2);

    expect(lowestAncestor(null, tree.root.left, tree.root.right)).toEqual(null);
  });

  test("returns null when one of the nodes does not have an ancestor", () => {
    const tree = new BinaryTree().insert(1).insert(2);

    expect(lowestAncestor(tree.root, tree.root, tree.root.right)).toEqual(null);
  });

  test("returns null when both nodes are null", () => {
    const tree = new BinaryTree().insert(1);
    expect(lowestAncestor(tree.root, null, null)).toEqual(null);
  });

  test("returns null when one of the nodes is null", () => {
    const tree = new BinaryTree().insert(1);

    expect(lowestAncestor(tree.root, tree.node, null)).toEqual(null);
    expect(lowestAncestor(tree.root, null, tree.node)).toEqual(null);
  });

  test("returns ancestor when nodes are siblings", () => {
    const tree = new BinaryTree()
      .insert(2)
      .insert(1)
      .insert(3);

    expect(lowestAncestor(tree.root, tree.root.left, tree.root.right)).toEqual(
      tree.root
    );
  });

  test("returns ancestor for nodes far apart", () => {
    const tree = new BinaryTree()
      .insert(4)
      .insert(6)
      .insert(3)
      .insert(5)
      .insert(2);

    expect(
      lowestAncestor(tree.root, tree.root.left.left, tree.root.right)
    ).toEqual(tree.root);
  });
});
