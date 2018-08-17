export default function divisibleSumPairs(ar, k) {
  let counter = 0;
  let { length } = ar;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }

  return counter;
}
