import arrayManipulation from "./array-manipulation";

describe("Array Manipulation", () => {
  test("testcase 1", () => {
    const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

    expect(arrayManipulation(5, queries)).toBe(200);
  });

  test("testcase 2", () => {
    const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];

    expect(arrayManipulation(10, queries)).toBe(31);
  });

  test("testcase 3", () => {
    const queries = [[2, 3, 603], [1, 1, 286], [4, 4, 882]];

    expect(arrayManipulation(4, queries)).toBe(882);
  });
});
