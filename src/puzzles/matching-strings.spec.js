import matchingStrings from "./matching-strings";

describe("matchingStrings", () => {
  test("when strings and queries match exactly", () => {
    const strings = ["ab", "abc", "hello"];

    expect(matchingStrings(strings, strings)).toEqual([1, 1, 1]);
  });

  test("when there are no matches", () => {
    const strings = ["ab", "cd", "ef"];
    const queries = ["gh", "ij"];

    expect(matchingStrings(strings, queries)).toEqual([0, 0]);
  });

  test("when there are repeating results", () => {
    const strings = ["aba", "baba", "aba", "xzxb"];
    const queries = ["aba", "xzxb", "ab"];

    expect(matchingStrings(strings, queries)).toEqual([2, 1, 0]);
  });

  test("when query is empty", () => {
    const strings = ["aba", "baba", "aba", "xzxb"];

    expect(matchingStrings(strings, [])).toEqual([]);
  });

  test("when strings are empty", () => {
    const queries = ["aba", "xzxb", "ab"];

    expect(matchingStrings([], queries)).toEqual([0, 0, 0]);
  });
});
