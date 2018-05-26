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
    this.numValues = 0;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.numValues++;
    return this;
  }

  delete(value) {
    let current = this.head;
    let prev = this.head;

    while (current) {
      if (current.value === value) {
        // removing the head
        if (current === this.head) {
          this.head = this.head.next;
        }

        // if node is the tail
        if (current === this.tail) {
          this.tail = prev;
        }

        // current: found node
        // prev: the node that linked to this node that must go away
        // so, prev.next now needs to point to the next node, which is the
        // node that the found node points to
        prev.next = current.next;
        this.numValues--;
      } else {
        prev = current;
      }

      current = current.next;
    }
  }

  deleteTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let current = this.head.next;
    let prev = this.head;
    while (current) {
      if (current === this.tail) {
        prev.next = null;
        this.tail = prev;
        break;
      }

      prev = current;
      current = current.next;
    }
  }

  insertAfter(data, nodeData) {
    let current = this.head;

    while (current) {
      if (current.value === nodeData) {
        const node = new Node(data);

        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node; // it's the new tail
        } else {
          node.next = current.next;
          current.next = node;
        }

        this.numValues++;
      }

      current = current.next;
    }
  }

  traverse(fn) {
    let current = this.head;

    while (current) {
      fn(current.value);
      current = current.next;
    }
  }

  find({ value, callback }) {
    let current = this.head;

    while (current) {
      if (callback && callback(current.value)) {
        return current.value;
      }

      if (value !== undefined && current.value === value) {
        return current.value;
      }

      current = current.next;
    }

    return null;
  }

  last() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  prevNode(node) {
    let current = this.head;

    if (current === node) {
      return null;
    }

    while (current) {
      if (current.next === node) {
        break;
      }

      current = current.next;
    }

    return current;
  }

  swap(a, b) {
    // simple swap (close to each other)
    if (a.next === b) {
      a.next = b.next;
      b.next = a;
    } else {
      // farther apart
      const prevOfB = this.prevNode(b);
      const tmp = a.next;

      a.next = b.next;
      b.next = tmp;
      prevOfB.next = a;
    }

    // a might be the head, in which case b is now the head
    const prevOfA = this.prevNode(a);
    if (prevOfA === null) {
      this.head = b;
    } else {
      prevOfA.next = b;
    }
  }

  at(index) {
    let node = this.head;
    while (--index >= 0 && node) {
      node = node.next;
    }
    return node;
  }

  // O(n^2)
  swapReverse() {
    for (let i = 0; i < Math.floor(this.numValues / 2); i++) {
      this.swap(this.at(i), this.at(this.numValues - (i + 1)));
    }
  }

  // O(n)
  reverse() {
    let list = new LinkedList();
    let node = this.head;

    while (node) {
      list.prepend(node.value);
      node = node.next;
    }

    this.head = list.head;
    this.tail = list.tail;
    this.numValues = list.numValues;
    return this;
  }

  lenght() {
    return this.numValues;
  }

  print() {
    let output = "";
    this.traverse(data => {
      output += `${data} `;
    });
    console.log(output);
  }

  toArray() {
    let values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}
