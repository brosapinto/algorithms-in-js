/**
 * A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence.
 */

// Complexity: access O(n), search O(n), insertion O(1), deletion O(1)
// inserting and deletion is O(n), if we don't separate the indexing op

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numValues = 0;
  }

  add(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.numValues++;
  }

  remove(data) {
    let current = this.head;
    let prev = this.head;

    while (current) {
      if (current.data === data) {
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
      if (current.data === nodeData) {
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
      fn(current.data);
      current = current.next;
    }
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
