import palindrome from "./palindrome";

describe("Palindrome", () => {
  test("against valid palindromes", () => {
    expect(palindrome("a")).toBe(true);
    expect(palindrome("aa")).toBe(true);
    expect(palindrome("anna")).toBe(true);
    expect(palindrome("madam")).toBe(true);
    expect(palindrome("racecar")).toBe(true);
  });

  test("against regular words", () => {
    expect(palindrome("")).toBe(false);
    expect(palindrome("ab")).toBe(false);
    expect(palindrome("anca")).toBe(false);
    expect(palindrome("banana")).toBe(false);
  });
});
