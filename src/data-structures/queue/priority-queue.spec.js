import PriorityQueue from "./priority-queue";

describe("PriorityQueue", () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  it("should queue items and respect priorities", () => {
    priorityQueue.add(10, 1);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(5, 2);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(100, 0);
    expect(priorityQueue.peek()).toBe(100);
  });

  it("should poll from queue while respecting priority", () => {
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
    expect(priorityQueue.poll()).toBe(5);
  });

  it("should correctly state whether it is empty or not", () => {
    expect(priorityQueue.isEmpty()).toBeTruthy();

    priorityQueue.add(1);
    expect(priorityQueue.isEmpty()).toBeFalsy();

    priorityQueue.poll();
    expect(priorityQueue.isEmpty()).toBeTruthy();
  });
});
