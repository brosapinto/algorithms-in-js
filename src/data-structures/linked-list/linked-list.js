class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a value to the beginning of the list
   * @param {*} value Value to be prepended
   * @returns This instance
   */
  unshift(value) {
    this.head = new Node(value, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
    this.length += 1;

    return this;
  }

  /**
   * Adds a value to the end of the list
   * @param {*} value Value to be appended
   * @returns This instance
   */
  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  /**
   * Removes last item from the list
   * @returns The removed value
   */
  pop() {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current === this.tail) {
        if (prev === null) {
          this.head = null;
        } else {
          prev.next = null;
        }

        this.tail = prev;
        this.length -= 1;
        break;
      }

      prev = current;
      current = current.next;
    }

    return current === null ? null : current.value;
  }

  delete(predicate) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (predicate(current.value)) {
        if (prev === null) {
          this.head = current.next;
          prev = this.head;
        } else {
          prev.next = current.next;
        }

        if (this.tail === current) {
          this.tail = prev;
        }

        this.length -= 1;
        return current.value;
      }

      prev = current;
      current = current.next;
    }

    return null;
  }

  /**
   * Reverses the list in place (mutates the list)
   */
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
    return this;
  }

  /**
   * Iterates over the whole list
   * @param {Function} fn Invoked for each value
   * @returns This instance
   */
  forEach(fn) {
    let current = this.head;

    while (current) {
      fn(current.value);
      current = current.next;
    }

    return this;
  }

  /**
   * New LinkedList where every value was mapped by mapping function
   * @param {Function} fn Mapping function
   * @returns {LinkedList} New list instance
   */
  map(fn) {
    const list = new LinkedList();
    this.forEach(value => list.push(fn(value)));
    return list;
  }

  /**
   * Looks up the first element on the List where predicate returns true
   * @param {Function} predicate Filter function
   * @returns {*} Found element, null otherwise
   */
  find(predicate) {
    let current = this.head;
    let found = null;

    while (current) {
      if (predicate(current.value)) {
        found = current.value;
        break;
      }

      current = current.next;
    }

    return found;
  }

  /**
   * Converts the LinkedList into an array
   * @returns {Array} Array of the List values
   */
  toArray() {
    const array = [];
    this.forEach(value => array.push(value));
    return array;
  }

  static fromArray(arr) {
    return arr.reduce((list, item) => list.push(item), new LinkedList());
  }

  toString() {
    return this.toArray().toString();
  }
}
