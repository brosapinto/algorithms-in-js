import allSubsets from "./all-subsets";

describe("allSubsets", () => {
  test("assertions", () => {
    expect(allSubsets([])).toEqual([[]]);
    expect(allSubsets([1])).toEqual([[], [1]]);
    expect(allSubsets([1, 2])).toEqual([[], [2], [1], [1, 2]]);
    expect(allSubsets([1, 2, 3])).toEqual([
      [],
      [3],
      [2],
      [2, 3],
      [1],
      [1, 3],
      [1, 2],
      [1, 2, 3]
    ]);
  });
});
