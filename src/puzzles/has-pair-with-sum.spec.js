import hasPairWithSum from "./has-pair-with-sum";

describe("hasPairWithSum", () => {
  test("test sorted lists", () => {
    expect(hasPairWithSum([1, 2, 3, 4], 6)).toBe(true);
    expect(hasPairWithSum([1, 2, 3, 4], 3)).toBe(true);
    expect(hasPairWithSum([1, 2, 3], 3)).toBe(true);
    expect(hasPairWithSum([1, 2], 3)).toBe(true);
    expect(hasPairWithSum([1, 2], 2)).toBe(false);
    expect(hasPairWithSum([], 3)).toBe(false);
  });

  test("unsorted lists", () => {
    expect(hasPairWithSum([3, 2, 1], 2)).toBe(false);
    expect(hasPairWithSum([5, 2, 8, 6, 0], 2)).toBe(true);
    expect(hasPairWithSum([5, 2, 8, 6, 0], 14)).toBe(true);
    expect(hasPairWithSum([2, 1], 2)).toBe(false);
    expect(hasPairWithSum([1, 2, 4, 4], 8)).toBe(true);
    expect(hasPairWithSum([1, -2, -4, 4], -6)).toBe(true);
  });
});
