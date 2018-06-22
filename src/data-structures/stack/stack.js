import LinkedList from "../linked-list";

export default class Stack {
  constructor() {
    this.values = new LinkedList();
  }

  isEmpty() {
    return this.values.length === 0;
  }

  push(value) {
    this.values.push(value);
  }

  pop() {
    return this.values.pop();
  }

  peek() {
    return this.values.tail.value;
  }

  toArray() {
    return this.values.toArray().reverse();
  }
}
