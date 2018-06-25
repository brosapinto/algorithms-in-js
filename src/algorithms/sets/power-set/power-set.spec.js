import { default as powerSet, powerSetRecur } from "./power-set";

describe("Power Set", () => {
  it("should calculate power set of given set", () => {
    const powerSets1 = powerSet([1]);
    const powerSets2 = powerSet([1, 2, 3]);

    expect(powerSets1).toEqual([[], [1]]);

    expect(powerSets2).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3]
    ]);
  });
});

describe("Power Set recursive tree", () => {
  it("should calculate power set of given set", () => {
    const powerSets1 = powerSetRecur([1]);
    const powerSets2 = powerSetRecur([1, 2, 3]);

    expect(powerSets1).toEqual([[], [1]]);

    expect(powerSets2).toEqual([
      [],
      [3],
      [2],
      [2, 3],
      [1],
      [1, 3],
      [1, 2],
      [1, 2, 3]
    ]);
  });
});
