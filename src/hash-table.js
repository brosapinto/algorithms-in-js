/**
 * A Hash Table is a data structure used to implement an associative array, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
 */

// Complexity: access -, search O(1), insertion O(1), deletion O(1)

class HashTable {
  static calcHash(key, size) {
    return key.toString().length % size;
  }

  constructor(size) {
    this.size = size;
    this.values = {};
    this.numValues = 0;
  }

  add(key, value) {
    const hash = HashTable.calcHash(key, this.size);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }

    if (!this.values[hash].hasOwnProperty(key)) {
      this.numValues++;
    }

    this.values[hash][key] = value;
  }

  remove(key) {
    const hash = HashTable.calcHash(key, this.size);

    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      delete this.values[hash][key];
      this.numValues--;
    }
  }

  search(key) {
    const hash = HashTable.calcHash(key, this.size);

    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    }
    return null;
  }

  length() {
    return this.numValues;
  }

  print() {
    console.log(JSON.stringify(this.values, null, 2));
  }
}

export default HashTable;
