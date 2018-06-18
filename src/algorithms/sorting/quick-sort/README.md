# Quicksort

Is a divide and conquer algorithm that first divides a large array into two smaller sub-arrays (the low elements and the high elements) and it then recursively sorts each sub-array.

The steps are:

1.  Pick an element, called a pivot
1.  Reorder the array so that all elements with values less than the pivot come before it, while elements greater than the pivot come after it (partition operation)
1.  Recursively apply the above steps to each sub-array

Animated visualization of the quicksort algorithm. The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

- Worst-case: O(n^2)
- Best-case: O(n log n)
- Average: O(n log n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
