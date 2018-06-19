import bfs from "./breadth-first-search";
import BinaryTree from "../../../data-structures/tree/binary-tree";

describe("Breadth First Search", () => {
  it("should perform BFS on tree", () => {
    const tree = new BinaryTree();
    const allowTraversal = jest.fn().mockReturnValue(true);
    const enterNode = jest.fn();
    const leaveNode = jest.fn();

    // create tree
    tree
      .insert(5)
      .insert(2)
      .insert(7)
      .insert(1);

    // traverse
    bfs(tree.root, {
      enterNode,
      leaveNode,
      allowTraversal
    });

    expect(enterNode).toHaveBeenCalledTimes(4);
    expect(leaveNode).toHaveBeenCalledTimes(4);
    expect(allowTraversal).toHaveBeenCalledTimes(3);
    expect(allowTraversal.mock.calls[0][0].value).toEqual(5);
    expect(allowTraversal.mock.calls[0][1].value).toEqual(2);
    expect(allowTraversal.mock.calls[1][0].value).toEqual(5);
    expect(allowTraversal.mock.calls[1][1].value).toEqual(7);
    expect(allowTraversal.mock.calls[2][0].value).toEqual(2);
    expect(allowTraversal.mock.calls[2][1].value).toEqual(1);
  });
});
