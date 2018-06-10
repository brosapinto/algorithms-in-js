const memoize = (fn, genKey) => {
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

const find = memoize((list, total, index) => {
  if (total === 0) {
    return 1;
  }

  if (total < 0 || index < 0) {
    return 0;
  }

  if (total < list[index]) {
    return find(list, total, index - 1);
  }

  return (
    find(list, total - list[index], index - 1) + find(list, total, index - 1)
  );
}, (_, total, index) => `${total}:${index}`);

// https://www.youtube.com/watch?v=nqlNzOcnCfs
export default (list, total) => find(list, total, list.length - 1);
