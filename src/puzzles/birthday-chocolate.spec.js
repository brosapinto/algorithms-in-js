import birthdayChocolate from "./birthday-chocolate";

describe("birthdayChocolate", () => {
  test("assertions", () => {
    expect(birthdayChocolate([], 4, 1)).toBe(0);
    expect(birthdayChocolate([1, 2, 2, 3, 4], 4, 8)).toBe(0);
    expect(birthdayChocolate([1, 2, 2, 3, 4], 12, 5)).toBe(1);
    expect(birthdayChocolate([1, 2, 2, 3, 4], 4, 2)).toBe(1);
    expect(birthdayChocolate([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    expect(birthdayChocolate([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
    expect(birthdayChocolate([4], 4, 1)).toBe(1);
  });
});
