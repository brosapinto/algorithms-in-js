import MinHeap from "./min-heap";

describe("MinHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  it("add items and heapify it up", () => {
    heap.add(5);
    expect(heap.peek()).toBe(5);
    expect(heap.toString()).toBe("5");

    heap.add(3);
    expect(heap.peek()).toBe(3);
    expect(heap.toString()).toBe("3,5");

    heap.add(10);
    expect(heap.peek()).toBe(3);
    expect(heap.toString()).toBe("3,5,10");

    heap.add(1);
    expect(heap.peek()).toBe(1);
    expect(heap.toString()).toBe("1,3,10,5");

    heap.add(1);
    expect(heap.peek()).toBe(1);
    expect(heap.toString()).toBe("1,1,10,5,3");

    expect(heap.poll()).toBe(1);
    expect(heap.toString()).toBe("1,3,10,5");

    expect(heap.poll()).toBe(1);
    expect(heap.toString()).toBe("3,5,10");

    expect(heap.poll()).toBe(3);
    expect(heap.toString()).toBe("5,10");
  });

  it("poll items and heapify it down", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);
    heap.add(11);
    heap.add(1);

    expect(heap.toString()).toBe("1,3,10,11,5");

    expect(heap.poll()).toBe(1);
    expect(heap.toString()).toBe("3,5,10,11");

    expect(heap.poll()).toBe(3);
    expect(heap.toString()).toBe("5,11,10");

    expect(heap.poll()).toBe(5);
    expect(heap.toString()).toBe("10,11");

    expect(heap.poll()).toBe(10);
    expect(heap.toString()).toBe("11");

    expect(heap.poll()).toBe(11);
    expect(heap.toString()).toBe("");

    expect(heap.poll()).toBeNull();
    expect(heap.toString()).toBe("");
  });

  it("should heapify down through the right branch", () => {
    heap.add(3);
    heap.add(12);
    heap.add(10);

    expect(heap.toString()).toBe("3,12,10");

    heap.add(11);
    expect(heap.toString()).toBe("3,11,10,12");

    expect(heap.poll()).toBe(3);
    expect(heap.toString()).toBe("10,11,12");
  });

  it("remove items from heap and heapify down", () => {
    heap.add(3);
    heap.add(12);
    heap.add(10);
    heap.add(11);
    heap.add(11);

    expect(heap.toString()).toBe("3,11,10,12,11");

    expect(heap.remove(3).toString()).toEqual("10,11,11,12");
    expect(heap.remove(3).peek()).toEqual(10);
    expect(heap.remove(11).toString()).toEqual("10,12");
    expect(heap.remove(3).peek()).toEqual(10);
  });

  it("remove items from heap and heapify up", () => {
    heap.add(3);
    heap.add(10);
    heap.add(5);
    heap.add(6);
    heap.add(7);
    heap.add(4);
    heap.add(6);
    heap.add(8);
    heap.add(2);
    heap.add(1);

    expect(heap.toString()).toBe("1,2,4,6,3,5,6,10,8,7");
    expect(heap.remove(8).toString()).toEqual("1,2,4,6,3,5,6,10,7");
    expect(heap.remove(7).toString()).toEqual("1,2,4,6,3,5,6,10");
    expect(heap.remove(1).toString()).toEqual("2,3,4,6,10,5,6");
    expect(heap.remove(2).toString()).toEqual("3,6,4,6,10,5");
    expect(heap.remove(6).toString()).toEqual("3,5,4,10");
    expect(heap.remove(10).toString()).toEqual("3,5,4");
    expect(heap.remove(5).toString()).toEqual("3,4");
    expect(heap.remove(3).toString()).toEqual("4");
    expect(heap.remove(4).toString()).toEqual("");
  });
});
