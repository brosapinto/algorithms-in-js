/**
 * A Hash Table is a data structure used to implement an associative array, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
 */

// Complexity: access -, search O(1), insertion O(1), deletion O(1)
import LinkedList from "../linked-list";

const DEFAULT_HASH_SIZE = 32;

export class HashTable {
  constructor(size = DEFAULT_HASH_SIZE) {
    // create a list of buckets
    // each bucket is a LinkedList
    this.buckets = Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    return (
      Array.from(key).reduce((acc, k) => acc + k.charCodeAt(0), 0) %
      this.buckets.length
    );
  }

  insert(key, value) {
    const bucketList = this.buckets[this.hash(key)];
    const node = bucketList.find(value => value.key === key);

    if (!node) {
      bucketList.push({ key, value });
    } else {
      node.value = value;
    }

    return this;
  }

  delete(key) {
    const bucketList = this.buckets[this.hash(key)];
    const node = bucketList.find(value => value.key === key);

    if (node) {
      const item = bucketList.delete(val => val.value === node.value);
      if (item !== null) {
        return item.value;
      }
    }

    return null;
  }

  get(key) {
    const bucketList = this.buckets[this.hash(key)];
    const node = bucketList.find(value => value.key === key);

    return node ? node.value : null;
  }
}

export default HashTable;
