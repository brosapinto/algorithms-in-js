import connectedCells from "./connected-cells-in-grid";

describe("Connected Cells", () => {
  test("calc max region of 1s", () => {
    const matrix = [
      [1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 1]
    ];

    expect(connectedCells(matrix)).toBe(5);
  });
});
