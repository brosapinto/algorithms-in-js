import isPowerOfTwo from "./is-power-of-two";
import isPowerOf2 from "./is-power-of-two-bitwise";

describe("isPowerOfTwo", () => {
  it("should check if the number is made by multiplying twos", () => {
    expect(isPowerOfTwo(0)).toBeFalsy();
    expect(isPowerOfTwo(1)).toBeFalsy();
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(3)).toBeFalsy();
    expect(isPowerOfTwo(4)).toBeTruthy();
    expect(isPowerOfTwo(5)).toBeFalsy();
    expect(isPowerOfTwo(6)).toBeFalsy();
    expect(isPowerOfTwo(7)).toBeFalsy();
    expect(isPowerOfTwo(8)).toBeTruthy();
    expect(isPowerOfTwo(10)).toBeFalsy();
    expect(isPowerOfTwo(12)).toBeFalsy();
    expect(isPowerOfTwo(16)).toBeTruthy();
    expect(isPowerOfTwo(31)).toBeFalsy();
    expect(isPowerOfTwo(64)).toBeTruthy();
    expect(isPowerOfTwo(1024)).toBeTruthy();
    expect(isPowerOfTwo(1023)).toBeFalsy();
  });

  it("should check if the number is made by multiplying twos", () => {
    expect(isPowerOf2(0)).toBeFalsy();
    expect(isPowerOf2(1)).toBeFalsy();
    expect(isPowerOf2(2)).toBeTruthy();
    expect(isPowerOf2(3)).toBeFalsy();
    expect(isPowerOf2(4)).toBeTruthy();
    expect(isPowerOf2(5)).toBeFalsy();
    expect(isPowerOf2(6)).toBeFalsy();
    expect(isPowerOf2(7)).toBeFalsy();
    expect(isPowerOf2(8)).toBeTruthy();
    expect(isPowerOf2(10)).toBeFalsy();
    expect(isPowerOf2(12)).toBeFalsy();
    expect(isPowerOf2(16)).toBeTruthy();
    expect(isPowerOf2(31)).toBeFalsy();
    expect(isPowerOf2(64)).toBeTruthy();
    expect(isPowerOf2(1024)).toBeTruthy();
    expect(isPowerOf2(1023)).toBeFalsy();
  });
});
