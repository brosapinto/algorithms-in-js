class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
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
    let list = [];
    this.traverse(data => {
      list.push(data);
    });
    return list;
  }
}

export default LinkedList;
