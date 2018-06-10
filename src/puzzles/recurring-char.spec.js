import recurringChar from "./recurring-char";

describe("recurringChar", () => {
  test("assertions", () => {
    expect(recurringChar(["A", "B", "C", "A"])).toBe("A");
    expect(recurringChar(["B", "C", "A", "B", "A"])).toBe("B");
    expect(recurringChar(["A", "B", "C"])).toBe(null);
  });
});
