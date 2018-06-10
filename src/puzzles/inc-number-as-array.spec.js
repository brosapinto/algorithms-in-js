import incNumberAsArray from "./inc-number-as-array";

describe("numArraySum", () => {
  test("assertions", () => {
    expect(incNumberAsArray([])).toEqual([1]);
    expect(incNumberAsArray([1, 3, 2, 4])).toEqual([1, 3, 2, 5]);
    expect(incNumberAsArray([1, 3, 2, 9])).toEqual([1, 3, 3, 0]);
    expect(incNumberAsArray([1, 8, 9, 9])).toEqual([1, 9, 0, 0]);
    expect(incNumberAsArray([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
  });
});
