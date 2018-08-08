import minBribes from "./new-year-chaos";

describe("Minimum bribes", () => {
  test("simple assertions", () => {
    expect(minBribes([])).toBe(0);
    expect(minBribes([1])).toBe(0);
    expect(minBribes([1, 2])).toBe(0);
    expect(minBribes([2, 3, 1])).toBe(2);
    expect(minBribes([1, 2, 3, 4, 5])).toBe(0);
    expect(minBribes([1, 2, 3, 5, 4])).toBe(1);
    expect(minBribes([1, 2, 5, 3, 4])).toBe(2);
    expect(minBribes([1, 2, 5, 4, 3])).toBe(3);
    expect(minBribes([2, 1, 5, 3, 4])).toBe(3);
    expect(minBribes([1, 2, 5, 3, 7, 8, 6, 4])).toBe(7);
  });

  test("invalid num of bribes", () => {
    expect(minBribes([5, 1, 2, 3, 4])).toBe(-1);
    expect(minBribes([6, 2, 1, 5, 3, 4])).toBe(-1);
    expect(minBribes([4, 1, 2, 3, 5, 6])).toBe(-1);
    expect(minBribes([5, 1, 2, 3, 7, 8, 6, 4])).toBe(-1);
  });
});
