import flatlandSpaceStations from "./flatland-space-stations";

describe("flatland space stations", () => {
  test("assertions", () => {
    expect(flatlandSpaceStations(0, [])).toBe(0);
    expect(flatlandSpaceStations(5, [0, 3])).toBe(1);
    expect(flatlandSpaceStations(5, [1, 4])).toBe(1);
    expect(flatlandSpaceStations(5, [0, 4])).toBe(2);
    expect(flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5])).toBe(0);
    expect(flatlandSpaceStations(20, [13, 1, 11, 10, 6])).toBe(6);
    expect(
      flatlandSpaceStations(95, [
        68,
        81,
        46,
        54,
        30,
        11,
        19,
        23,
        22,
        12,
        38,
        91,
        48,
        75,
        26,
        86,
        29,
        83,
        62
      ])
    ).toBe(11);
  });
});
