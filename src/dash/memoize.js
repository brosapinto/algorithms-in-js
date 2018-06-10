const memoize = (fn, genKey = i => i) => {
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
};

export default memoize;
