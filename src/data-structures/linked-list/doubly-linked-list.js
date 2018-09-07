export class DoublyLinkedNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new DoublyLinkedNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
    this.length += 1;

    return this;
  }

  reduce(fn, acc) {
    let curr = this.head;

    while (curr !== null) {
      acc = fn(acc, curr.value);
      curr = curr.next;
    }

    return acc;
  }

  toArray() {
    return this.reduce((acc, value) => {
      acc.push(value);
      return acc;
    }, []);
  }

  static fromArray(arr) {
    return arr.reduce((list, item) => list.push(item), new DoublyLinkedList());
  }

  static toArray(head) {
    let arr = [];
    let curr = head;

    while (curr !== null) {
      arr.push(curr.value);
      curr = curr.next;
    }

    return arr;
  }
}
