import mergeSort from "./merge-sort";

describe("Merge Sort", () => {
  it("sorts a list of numbers", () => {
    const list = [7, 9, 3, 4, 8, 1, 1, 0];

    expect(mergeSort(list)).toEqual([0, 1, 1, 3, 4, 7, 8, 9]);
  });

  xit("perf against native sort", () => {
    const list = [7, 9, 3, 4, 8, 1, 1, 0];
    let count = 10e4;

    console.time("mergeSort");
    while (--count > 0) {
      mergeSort(list);
    }
    console.timeEnd("mergeSort");

    count = 10e4;
    console.time("sort");
    while (--count > 0) {
      list.sort();
    }
    console.timeEnd("sort");
  });
});
