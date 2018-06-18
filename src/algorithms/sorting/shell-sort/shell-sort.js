export default function shellsort(list) {
  // shallow copy `list` to prevent mutating args
  const array = [...list];

  // define gap distance
  let gap = Math.floor(array.length / 2);

  // compare and swap elements while gap is greater than 0
  while (gap > 0) {
    // compare all distant element pairs
    for (let i = 0; i < array.length - gap; i++) {
      let currentIndex = i;
      let gapShiftedIndex = i + gap;

      while (currentIndex >= 0) {
        // compare and swap elements
        if (array[gapShiftedIndex] < array[currentIndex]) {
          const tmp = array[currentIndex];
          array[currentIndex] = array[gapShiftedIndex];
          array[gapShiftedIndex] = tmp;
        }

        gapShiftedIndex = currentIndex;
        currentIndex -= gap;
      }
    }

    // shrink the gap
    gap = Math.floor(gap / 2);
  }

  return array;
}
