import nthFib from "./nth-fibonacci";

describe("nthFib", () => {
  test("assertions", () => {
    expect(nthFib(1)).toBe(1);
    expect(nthFib(2)).toBe(1);
    expect(nthFib(3)).toBe(2);
    expect(nthFib(4)).toBe(3);
    expect(nthFib(5)).toBe(5);
    expect(nthFib(6)).toBe(8);
    expect(nthFib(35)).toBe(9227465);
  });
});
