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
  });
});
