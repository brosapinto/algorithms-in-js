import MyArray from "./array";

describe("Array", () => {
  let myArray;

  beforeEach(() => {
    myArray = new MyArray();
  });

  it("adds item to array", () => {
    myArray.add(1);
    myArray.add(2);

    expect(myArray.array).toEqual([1, 2]);
  });

  it("removes item from array", () => {
    myArray.add(1);
    myArray.add(2);
    myArray.remove(1);

    expect(myArray.array).toEqual([2]);
  });

  it("returns found item index", () => {
    myArray.add(1);
    myArray.add(2);
    myArray.add(3);

    expect(myArray.search(2)).toBe(1);
  });

  it("returns element at index", () => {
    myArray.add(1);
    myArray.add(2);
    myArray.add(3);

    expect(myArray.getAtIndex(0)).toBe(1);
  });

  it("returns length of the array", () => {
    myArray.add(1);
    myArray.add(2);
    myArray.add(3);

    expect(myArray.length(0)).toBe(3);
  });
});
