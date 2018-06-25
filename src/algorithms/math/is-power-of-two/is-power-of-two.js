export default function isPowerOfTwo(num) {
  if (num < 2) {
    return false;
  }

  while (true) {
    num /= 2;

    if (num === 1) {
      return true;
    }

    if (num < 1) {
      return false;
    }
  }
}
