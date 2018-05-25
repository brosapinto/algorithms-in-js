export default class MinHeap {
  constructor() {
    this.container = [];
  }

  _getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  _getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  _getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  _hasLeftChild(index) {
    const size = this.container.length;
    return this._getLeftChildIndex(index) < size;
  }

  _hasRightChild(index) {
    const size = this.container.length;
    return this._getRightChildIndex(index) < size;
  }

  _hasParent(index) {
    return this._getParentIndex(index) >= 0;
  }

  _leftChild(index) {
    return this.container[this._getLeftChildIndex(index)];
  }

  _rightChild(index) {
    return this.container[this._getRightChildIndex(index)];
  }

  _parent(index) {
    return this.container[this._getParentIndex(index)];
  }

  _swap(indexOne, indexTwo) {
    const tmp = this.container[indexOne];
    this.container[indexOne] = this.container[indexTwo];
    this.container[indexTwo] = tmp;
  }

  peek() {
    if (this.container.length === 0) {
      return null;
    }

    return this.container[0];
  }

  poll() {
    const size = this.container.length;

    if (size === 0) {
      return null;
    }

    if (size === 1) {
      return this.container.pop();
    }

    const item = this.container[0];
    // move the last element from the end to the head
    this.container[0] = this.container.pop();
    this._heapifyDown();

    return item;
  }

  add(item) {
    // add new item to the end
    this.container.push(item);
    this._heapifyUp();
    return this;
  }

  _heapifyUp() {
    let index = this.container.length - 1;

    // while things are out of order
    while (
      this._hasParent(index) &&
      this._parent(index) > this.container[index]
    ) {
      const parentIndex = this._getParentIndex(index);
      this._swap(parentIndex, index);
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;

    while (this._hasLeftChild(index)) {
      // if right child is even smaller, update `smallerChildIndex`
      let nextIndex = this._getLeftChildIndex(index);

      if (
        this._hasRightChild(index) &&
        this._rightChild(index) < this._leftChild(index)
      ) {
        nextIndex = this._getRightChildIndex(index);
      }

      if (this.container[index] < this.container[nextIndex]) {
        break;
      }

      this._swap(index, nextIndex);
      index = nextIndex;
    }
  }

  toString() {
    return this.container.toString();
  }
}
