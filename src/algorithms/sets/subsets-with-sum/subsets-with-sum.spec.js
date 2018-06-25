import subsetsWithSum from "./subsets-with-sum";

describe("subsetsWithSum", () => {
  test("assertions", () => {
    // because technically an empty set is valid
    expect(subsetsWithSum([2, 4, 6, 10], 0)).toBe(1);

    expect(subsetsWithSum([2, 4, 6, 10], 16)).toBe(2);
    expect(subsetsWithSum([2, 4, 6, 10], 2)).toBe(1);
    expect(subsetsWithSum([2, 4, 6, 10], 6)).toBe(2);
  });
});
