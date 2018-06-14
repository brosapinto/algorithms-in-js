export const memoizeOne = fn => {
  const isEquals = (a, b) =>
    a.length === b.length && a.every((arg, i) => arg === b[i]);

  let calledOnce = false;
  let lastArgs = [];
  let lastResult = null;

  return (...args) => {
    if (calledOnce && isEquals(lastArgs, args)) {
      return lastResult;
    }

    lastArgs = args;
    lastResult = fn.apply(this, args);
    calledOnce = true;

    return lastResult;
  };
};

export default function memoize(fn, genKey = i => i) {
  const cache = {};

  return (...args) => {
    const key = genKey(...args);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}
