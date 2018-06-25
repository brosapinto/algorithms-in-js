export default function isPowerOf2(num) {
  if (num < 2) {
    return false;
  }

  // in binary format the last bit of a power of two is 0
  // (e.g 2 is 0010, 4 is 0100, 8 is 1000)
  // so we can use a clever trick to test that one and only one bit is set
  return (num & (num - 1)) === 0;
}
