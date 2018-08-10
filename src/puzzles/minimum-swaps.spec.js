import minSwaps from "./minimum-swaps";

describe("Minimum swaps", () => {
  test("no swaps required", () => {
    expect(minSwaps([])).toBe(0);
    expect(minSwaps([1])).toBe(0);
    expect(minSwaps([1, 2])).toBe(0);
    expect(minSwaps([1, 2, 3])).toBe(0);
    expect(minSwaps([1, 2, 3, 4])).toBe(0);
  });

  test("had swaps", () => {
    expect(minSwaps([4, 2, 3, 1])).toBe(1);
    expect(minSwaps([2, 4, 3, 1])).toBe(2);
    expect(minSwaps([4, 3, 1, 2])).toBe(3);
    expect(minSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
    expect(minSwaps([7, 6, 5, 4, 3, 2, 1])).toBe(3);
    expect(minSwaps([1, 3, 5, 2, 7, 4, 6])).toBe(5);
    expect(minSwaps([7, 1, 3, 2, 4, 5, 6])).toBe(5);
  });
});
