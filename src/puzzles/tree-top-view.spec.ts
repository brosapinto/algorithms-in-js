import BinarySearchTree from "../data-structures/tree/binary-tree";
import { topView } from "./tree-top-view";

describe("topView", () => {
  test("returns empty array if root node is null", () => {
    expect(topView(null)).toEqual([]);
  });

  test("returns the root when that is the whole tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);

    expect(topView(tree.root)).toEqual([1]);
  });

  test("returns the top view, for a right balanced tree", () => {
    const tree = new BinarySearchTree();
    tree
      .insert(1)
      .insert(2)
      .insert(5)
      .insert(3)
      .insert(6)
      .insert(4);

    expect(topView(tree.root)).toEqual([1, 2, 5, 6]);
  });

  test("returns the top view", () => {
    const tree = new BinarySearchTree();

    tree
      .insert(5)
      .insert(3)
      .insert(8)
      .insert(2)
      .insert(4)
      .insert(6)
      .insert(9);

    expect(topView(tree.root)).toEqual([2, 3, 5, 8, 9]);
  });

  test("top view for uneven tree", () => {
    const tree = [
      37,
      23,
      108,
      59,
      86,
      64,
      94,
      14,
      105,
      17,
      111,
      65,
      55,
      31,
      79,
      97,
      78,
      25,
      50,
      22,
      66,
      46,
      104,
      98,
      81,
      90,
      68,
      40,
      103,
      77,
      74,
      18,
      69,
      82,
      41,
      4,
      48,
      83,
      67,
      6,
      2,
      95,
      54,
      100,
      99,
      84,
      34,
      88,
      27,
      72,
      32,
      62,
      9,
      56,
      109,
      115,
      33,
      15,
      91,
      29,
      85,
      114,
      112,
      20,
      26,
      30,
      93,
      96,
      87,
      42,
      38,
      60,
      7,
      73,
      35,
      12,
      10,
      57,
      80,
      13,
      52,
      44,
      16,
      70,
      8,
      39,
      107,
      106,
      63,
      24,
      92,
      45,
      75,
      116,
      5,
      61,
      49,
      101,
      71,
      11,
      53,
      43,
      102,
      110,
      1,
      58,
      36,
      28,
      76,
      47,
      113,
      21,
      89,
      51,
      19,
      3
    ].reduce((acc, val) => acc.insert(val), new BinarySearchTree());

    expect(topView(tree.root)).toEqual([
      1,
      2,
      4,
      14,
      23,
      37,
      108,
      111,
      115,
      116,
      83,
      84,
      85
    ]);
  });
});
