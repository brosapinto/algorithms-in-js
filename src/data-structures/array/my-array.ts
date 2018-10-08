/**
 * An Array is a data structure consisting of a collection of elements, each
 * identified by at least one array index or key. The simplest type of data
 * structure is a linear array, also called one-dimensional array.
 */

// Complexity: access O(1), search O(n), insertion O(1), deletion O(n)
class ArrayIndexOutOfBoundsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ArrayIndexOutOfBoundsError";
  }
}

class MyArray {
  private elements = new Array<any>(1);
  private n = 0;

  private resize(capacity: number, from = 0) {
    let newArr = new Array(capacity);

    // copy each element to the new array
    for (let i = 0; i < this.n; i++) {
      newArr[i] = this.elements[from++];
    }

    this.elements = newArr;
  }

  static of(...args: any[]): MyArray {
    return args.reduce((acc, arg) => {
      acc.push(arg);
      return acc;
    }, new MyArray());
  }

  static clone(array: MyArray): MyArray {
    return array.map((i: any) => i);
  }

  length(): number {
    return this.n;
  }

  push(value: any) {
    if (this.n === this.elements.length) {
      this.resize(this.n * 2);
    }

    this.elements[this.n++] = value;
  }

  get(index: number) {
    if (index < 0 || index >= this.n) {
      return undefined;
    }

    return this.elements[index];
  }

  set(index: number, value: any) {
    if (index < 0) {
      throw new ArrayIndexOutOfBoundsError(`index ${index} is out of bounds`);
    }

    if (index >= this.n) {
      this.resize(index + 1);
      this.n = index + 1;
    }

    this.elements[index] = value;
  }

  pop() {
    if (this.n === 0) {
      return undefined;
    }

    return this.elements[--this.n];
  }

  concat(other: MyArray): MyArray {
    let newArray = new MyArray();

    for (let i = 0; i < this.length(); i++) {
      newArray.push(this.get(i));
    }

    for (let i = 0; i < other.length(); i++) {
      newArray.push(other.get(i));
    }

    return newArray;
  }

  indexOf(value: any): number {
    for (let i = 0; i < this.length(); i++) {
      if (this.get(i) === value) {
        return i;
      }
    }

    return -1;
  }

  lastIndexOf(value: any): number {
    for (let i = this.length() - 1; i > 0; i--) {
      if (this.get(i) === value) {
        return i;
      }
    }

    return -1;
  }

  includes(value: any): boolean {
    return this.indexOf(value) !== -1;
  }

  find(fn: Function) {
    for (let i = 0; i < this.length(); i++) {
      let elem = this.get(i);

      if (fn(elem)) {
        return elem;
      }
    }
  }

  findIndex(fn: Function) {
    for (let i = 0; i < this.length(); i++) {
      if (fn(this.get(i))) {
        return i;
      }
    }

    return -1;
  }

  equals(other: MyArray): boolean {
    if (this.length() !== other.length()) {
      return false;
    }

    for (let i = 0; i < this.length(); i++) {
      if (this.get(i) !== other.get(i)) {
        return false;
      }
    }

    return true;
  }

  forEach(iterator: Function) {
    for (let i = 0; i < this.length(); i++) {
      iterator(this.get(i), i);
    }
  }

  join(separator: string = ","): string {
    let str = "";

    for (let i = 0; i < this.length() - 1; i++) {
      str += this.get(i) + separator;
    }

    return str + this.get(this.length() - 1);
  }

  toString() {
    return this.join();
  }

  map(fn: Function): MyArray {
    let newArr = new MyArray();
    this.forEach((elem: any) => newArr.push(fn(elem)));
    return newArr;
  }

  filter(fn: Function): MyArray {
    let newArr = new MyArray();

    for (let i = 0; i < this.length(); i++) {
      let elem = this.get(i);

      if (fn(elem)) {
        newArr.push(elem);
      }
    }

    return newArr;
  }

  some(fn: Function): boolean {
    for (let i = 0; i < this.length(); i++) {
      if (fn(this.get(i))) {
        return true;
      }
    }

    return false;
  }

  every(fn: Function): boolean {
    let negate = (elem: any): boolean => fn(elem) === false;
    return !this.some(negate);
  }

  fill(value: any, start: number = 0, end: number = this.length()) {
    for (; start < end; start++) {
      this.set(start, value);
    }
  }

  reverse() {
    if (this.length() < 2) {
      return;
    }

    for (let start = 0, end = this.length() - 1; start < end; start++, end--) {
      let tmp = this.get(start);
      this.set(start, this.get(end));
      this.set(end, tmp);
    }
  }

  shift() {
    let value = this.get(0);

    if (this.n > 0) {
      this.resize(--this.n, 1);
    }

    return value;
  }

  unshift(value: any) {
    let newArr = new Array(++this.n);

    newArr[0] = value;
    for (let i = 1; i < this.n; i++) {
      newArr[i] = this.elements[i - 1];
    }

    this.elements = newArr;
  }

  slice(start = 0, end = this.n): MyArray {
    let copy = new MyArray();

    for (; start < end; start++) {
      copy.push(this.elements[start]);
    }

    return copy;
  }

  splice(start: number, delCount = this.n - start, ...items: any[]) {
    let n = this.n + items.length - delCount;
    let copy = new Array(n);

    // first slice
    for (let i = 0; i < start; i++) {
      copy[i] = this.get(i);
    }

    // append middle (all new items)
    for (let i = 0; i < items.length; i++, start++) {
      copy[start] = items[i];
    }

    // append the rest, skip deleted count
    for (let i = start + delCount - items.length; i < this.n; i++, start++) {
      copy[start] = this.get(i);
    }

    this.elements = copy;
    this.n = n;
  }
}

export default MyArray;
