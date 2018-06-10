import memoize from "../dash/memoize";

// dynamic programming (memoize)
// [1, 2, 3, 5, 8, ...]
const fibonacci = memoize(nth => {
  if (nth < 3) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
});

export default fibonacci;
