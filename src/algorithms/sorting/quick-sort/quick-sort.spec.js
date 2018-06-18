import quickSort from "./quick-sort";

describe("Quick Sort", () => {
  test("assertions", () => {
    const list = [7, 9, 3, 4, 8, 1, 1, 0];

    expect(quickSort(list)).toEqual([0, 1, 1, 3, 4, 7, 8, 9]);
  });
});
