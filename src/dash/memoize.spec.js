import { memoizeOne } from "./memoize";

describe("memoize one", () => {
  test("repeatedly invoking with same args", () => {
    const spy = jest.fn().mockImplementation((a, b) => a + b);
    const fn = memoizeOne(spy);

    // invoke function the first time
    expect(fn(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1, 2);

    // the result should have been cached
    spy.mockClear();
    expect(fn(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(0);

    // cache is cleared, function is invoked again
    spy.mockClear();
    expect(fn(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  test("invoking with different args", () => {
    const spy = jest.fn().mockImplementation((a, b) => a + b);
    const fn = memoizeOne(spy);

    expect(fn(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledWith(1, 2);

    spy.mockClear();
    expect(fn(2, 3)).toBe(5);
    expect(spy).toHaveBeenCalledWith(2, 3);
  });
});
