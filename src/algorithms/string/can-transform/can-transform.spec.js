import canTransform from "./can-transform";

describe("Can Transform", () => {
  test("assertions", () => {
    expect(canTransform("abca", "dced")).toBe(true);
    expect(canTransform("dced", "abca")).toBe(true);
    expect(canTransform("hello", "hello")).toBe(true);
    expect(canTransform("hello", "abc")).toBe(false);
    expect(canTransform("abca", "bdea")).toBe(false);
  });
});
