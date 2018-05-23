/**
 * An Array is a data structure consisting of a collection of elements, each
 * identified by at least one array index or key. The simplest type of data
 * structure is a linear array, also called one-dimensional array.
 */

// Complexity: access O(1), search O(n), insertion O(1), deletion O(n)

class MyArray {
  constructor() {
    this.array = [];
  }

  add(data) {
    this.array.push(data);
  }

  remove(data) {
    // findIndex stops once predicate returns truthy
    const index = this.array.findIndex(item => item === data);
    if (index !== -1) {
      this.array.splice(index, 1);
    }
  }

  search(data) {
    return this.array.findIndex(item => item === data);
  }

  getAtIndex(index) {
    return this.array[index];
  }

  length() {
    return this.array.length;
  }
}

export default MyArray;
