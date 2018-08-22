import checkMagazine from "./check-magazine";

describe("checkMagazine", () => {
  test("testcase 1", () => {
    const magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
    const note = ["ive", "got", "some", "coconuts"];

    expect(checkMagazine(magazine, note)).toBe(false);
  });

  test("testcase 2", () => {
    const magazine = ["two", "times", "three", "is", "not", "four"];
    const note = ["two", "times", "two", "is", "four"];

    // because `two` only occurs once in the magazine
    expect(checkMagazine(magazine, note)).toBe(false);
  });

  test("testcase 3", () => {
    const magazine = ["give", "me", "one", "grand", "today", "night"];
    const note = ["give", "one", "grand", "today"];

    expect(checkMagazine(magazine, note)).toBe(true);
  });
});
