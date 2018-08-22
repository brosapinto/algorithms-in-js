import twoStrings from "./two-strings";

describe("twoStrings", () => {
  test("assertions", () => {
    expect(twoStrings("", "")).toBe(true);
    expect(twoStrings("hello", "world")).toBe(true);
    expect(twoStrings("abcd", "world")).toBe(true);
    expect(twoStrings("bac", "b")).toBe(true);
    expect(twoStrings("hackerrankcommunity", "cdecdecdecde")).toBe(true);
    expect(twoStrings("jackandjill", "wentupthehill")).toBe(true);
    expect(twoStrings("hi", "world")).toBe(false);
    expect(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc")).toBe(false);
    expect(twoStrings("writetoyourparents", "fghmqzldbc")).toBe(false);
  });
});
