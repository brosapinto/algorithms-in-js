# Priority Queue

A _priority queue_ is an abstract data type which is like a regular queue or stack, but where each element has a _priority_ associated with it.

In a _priority queue_, an element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.

Complexity (with Binary Heap):

* polling: `O(log(n)))`
* peeking: `O(1)``
* adding: `O(log(n))`
* removing: `O(n)` or `O(log(n))` with help from an HashTable
* contains: `O(n)` or `O(1)` with help from an HashTable

## Usages

* Certain implementations of Dijkstra's shortest path algorithm
* When it's necessary to fetch the _next best_ or _next worst_ element
* Used in Huffman coding (often used for lossless data compression)
* Best First Search (BFS) algorithms such as _A\*_, which use PQs to continously grab the next most promising node
* Used by Minimum Spanning Tree (MST) algorithms

## References

* [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue)
* [YouTube](https://www.youtube.com/watch?v=wptevk0bshY&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=6)
