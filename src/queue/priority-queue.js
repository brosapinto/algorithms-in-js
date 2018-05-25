import { MinHeap } from "../heap";

export default class PriorityQueue {
  // FILO
  constructor() {
    this.heap = new MinHeap();
    this.priorities = {}; //HashTable?
  }

  add(item, priority = 0) {
    this.heap.add(priority);

    if (!this.priorities.hasOwnProperty(priority)) {
      this.priorities[priority] = [];
    }

    this.priorities[priority].push(item);

    return this;
  }

  poll() {
    const priority = this.heap.poll();
    return this.priorities[priority].shift();
  }

  peek() {
    return this.priorities[this.heap.peek()][0];
  }
}
