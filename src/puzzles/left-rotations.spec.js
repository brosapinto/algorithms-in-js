import leftRotation from "./left-rotations";

describe("Array Left Rotation", () => {
  test("empty array is returned when provided array is empty", () => {
    expect(leftRotation([], 1)).toEqual([]);
  });

  test("returns unchanged array when num rotations is less than 1", () => {
    expect(leftRotation([1], -1)).toEqual([1]);
    expect(leftRotation([1, 2], 0)).toEqual([1, 2]);
  });

  test("rotates array as many times as num rotations", () => {
    expect(leftRotation([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
    expect(leftRotation([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    expect(leftRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    expect(leftRotation([1, 2, 3, 4], 5)).toEqual([2, 3, 4, 1]);
    expect(leftRotation([1, 2], 5)).toEqual([2, 1]);
  });
});
