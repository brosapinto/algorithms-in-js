import shellSort from "./shell-sort";

describe("Shell Sort", () => {
  it("sorts a list of numbers", () => {
    const list = [7, 9, 3, 4, 8, 1, 1, 0];

    expect(shellSort(list)).toEqual([0, 1, 1, 3, 4, 7, 8, 9]);
  });
});
