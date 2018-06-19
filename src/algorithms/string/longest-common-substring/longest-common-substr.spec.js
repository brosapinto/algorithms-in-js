import longestCommonSubstr from "./longest-common-substr";

describe("Longest Common Substring", () => {
  it("should find longest common substring between two strings", () => {
    expect(longestCommonSubstr("", "")).toBe("");
    expect(longestCommonSubstr("ABC", "")).toBe("");
    expect(longestCommonSubstr("", "ABC")).toBe("");
    expect(longestCommonSubstr("ABABC", "BABCA")).toBe("BABC");
    expect(longestCommonSubstr("BABCA", "ABCBA")).toBe("ABC");
  });
});
