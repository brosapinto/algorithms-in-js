import LinkedList from "../linked-list";

export default class Stack {
  constructor() {
    this.values = new LinkedList();
  }

  isEmpty() {
    return !this.values.tail;
  }

  push(value) {
    this.values.append(value);
  }

  pop() {
    this.values.deleteTail();
  }

  peek() {
    return this.values.tail.value;
  }

  toArray() {
    return this.values.toArray().reverse();
  }
}
