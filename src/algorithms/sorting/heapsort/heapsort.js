import { MinHeap } from "../../../data-structures/heap";

export default function heapsort(list) {
  const sorted = [];
  const minHeap = new MinHeap();

  // insert all elements to the heap
  list.forEach(element => minHeap.add(element));

  // now we have a min heap with minimal elements always on top
  // just by polling each element one by one, we get a sorted array
  while (!minHeap.isEmpty()) {
    sorted.push(minHeap.poll());
  }

  return sorted;
}
