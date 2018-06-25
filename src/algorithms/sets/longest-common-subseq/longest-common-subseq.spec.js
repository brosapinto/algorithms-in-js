import longestCommonSubseq from "./longest-common-subseq";

describe("Longest Common SubSequence", () => {
  it("should find longest common subsequence for two strings", () => {
    expect(longestCommonSubseq([""], [""])).toEqual([""]);

    expect(longestCommonSubseq([""], ["A", "B", "C"])).toEqual([""]);

    expect(longestCommonSubseq(["A", "B", "C"], [""])).toEqual([""]);

    expect(longestCommonSubseq(["A", "B", "C"], ["D", "E", "F", "G"])).toEqual([
      ""
    ]);

    expect(
      longestCommonSubseq(
        ["A", "B", "C", "D", "G", "H"],
        ["A", "E", "D", "F", "H", "R"]
      )
    ).toEqual(["A", "D", "H"]);

    expect(
      longestCommonSubseq(
        ["A", "G", "G", "T", "A", "B"],
        ["G", "X", "T", "X", "A", "Y", "B"]
      )
    ).toEqual(["G", "T", "A", "B"]);

    expect(
      longestCommonSubseq(
        ["A", "B", "C", "D", "A", "F"],
        ["A", "C", "B", "C", "F"]
      )
    ).toEqual(["A", "B", "C", "F"]);
  });
});
