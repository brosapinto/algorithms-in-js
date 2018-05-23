/**
 * A Set is an abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite Set.
 */

// Complexity: access -, search O(n), insertion O(n), deletion O(n)

class Set {
  constructor() {
    this.values = [];
    this.numValues = 0;
  }

  add(value) {
    // set only contains unique values
    if (!this.contains(value)) {
      this.values.push(value);
      this.numValues++;
    }
  }

  remove(value) {
    const index = this.values.indexOf(value);
    if (index !== -1) {
      this.values.splice(index, 1);
      this.numValues--;
    }
  }

  contains(value) {
    return this.values.indexOf(value) !== -1;
  }

  union(set) {
    const newSet = new Set();
    set.values.forEach(v => newSet.add(v));
    this.values.forEach(v => newSet.add(v));
    return newSet;
  }

  intersect(set) {
    const newSet = new Set();

    this.values.forEach(value => {
      if (set.contains(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  difference(set) {
    const newSet = new Set();

    this.values.forEach(value => {
      if (!set.contains(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  // is every value of `set` is contained in this.set
  isSubset(set) {
    return set.values.every(val => this.contains(val));
  }

  length() {
    return this.numValues;
  }
  print() {
    console.log(this.values.join(" "));
  }
}

export default Set;
