import LinkedList from "./linked-list";

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe("push", () => {
    it("should append value to the list", () => {
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      list.push(1).push(2);
      expect(list.head).toEqual({ next: { next: null, value: 2 }, value: 1 });
      expect(list.tail).toEqual({ next: null, value: 2 });
    });

    it("should increment list length", () => {
      expect(list.length).toBe(0);

      list.push(1);
      expect(list.length).toBe(1);

      list.push(1).push(2);
      expect(list.length).toBe(3);
    });
  });

  describe("unshift", () => {
    it("should prepend value on empty list", () => {
      list.unshift(1);

      expect(list.length).toBe(1);
      expect(list.head).toEqual({ next: null, value: 1 });
      expect(list.tail).toEqual({ next: null, value: 1 });
    });

    it("should prepend value", () => {
      list.unshift(1).unshift(2);

      expect(list.length).toBe(2);
      expect(list.head).toEqual({ next: { next: null, value: 1 }, value: 2 });
      expect(list.tail).toEqual({ next: null, value: 1 });
    });
  });

  describe("pop", () => {
    it("returns null when list is empty", () => {
      expect(list.pop()).toBe(null);
    });

    it("pops last item in the list", () => {
      list
        .push(1)
        .push(2)
        .push(3);

      expect(list.length).toBe(3);

      expect(list.pop()).toBe(3);
      expect(list.length).toBe(2);

      expect(list.pop()).toBe(2);
      expect(list.length).toBe(1);

      expect(list.pop()).toBe(1);
      expect(list.length).toBe(0);

      expect(list.pop()).toBe(null);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });
  });

  describe("reverse", () => {
    it("should reverse empty list", () => {
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);

      list.reverse();
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });

    it("should reverse list in place", () => {
      list
        .push(1)
        .push(2)
        .push(3);

      list.reverse();
      expect(list.length).toBe(3);
      expect(list.head).toEqual({
        next: { next: { next: null, value: 1 }, value: 2 },
        value: 3
      });
      expect(list.tail).toEqual({ next: null, value: 1 });
    });
  });

  describe("delete", () => {
    it("should return deleted value", () => {
      list.push(1).push(2);

      const value = list.delete(x => x === 1);
      expect(value).toBe(1);
      expect(list.length).toBe(1);
      expect(list.toArray()).toEqual([2]);
      expect(list.head).toEqual({ next: null, value: 2 });
      expect(list.tail).toEqual({ next: null, value: 2 });
    });

    it("should delete last element in the list", () => {
      list
        .push(1)
        .push(2)
        .push(3);

      const value = list.delete(x => x === 3);
      expect(value).toBe(3);
      expect(list.length).toBe(2);
      expect(list.toArray()).toEqual([1, 2]);
      expect(list.head).toEqual({ next: { next: null, value: 2 }, value: 1 });
      expect(list.tail).toEqual({ next: null, value: 2 });
    });

    it("should delete element at the middle of the list", () => {
      list
        .push(1)
        .push(2)
        .push(3);

      const value = list.delete(x => x === 2);
      expect(value).toBe(2);
      expect(list.length).toBe(2);
      expect(list.toArray()).toEqual([1, 3]);
    });
  });

  describe("toArray", () => {
    it("should return empty array for an empty list", () => {
      expect(list.toArray()).toEqual([]);
    });

    it("should return array with list values", () => {
      list
        .push(1)
        .push(3)
        .push(2);

      expect(list.toArray()).toEqual([1, 3, 2]);
    });
  });

  describe("forEach", () => {
    it("should invoke callback on each iteration", () => {
      const cb = jest.fn();

      list
        .push(1)
        .push(2)
        .push(3);
      list.forEach(cb);

      expect(cb).toHaveBeenCalledTimes(3);
      expect(cb).toHaveBeenCalledWith(1);
      expect(cb).toHaveBeenCalledWith(2);
      expect(cb).toHaveBeenCalledWith(3);
    });
  });

  describe("map", () => {
    it("should return a new LinkedList where each item has been mapped", () => {
      const cb = jest.fn().mockImplementation(x => x * 2);

      const newList = list
        .push(1)
        .push(2)
        .push(3)
        .map(cb);

      expect(list.toArray()).toEqual([1, 2, 3]);
      expect(newList.toArray()).toEqual([2, 4, 6]);
    });
  });

  describe("find", () => {
    it("should return found element", () => {
      list
        .push(1)
        .push(3)
        .push(2)
        .push(3);

      expect(list.find(i => i === 1).value).toBe(1);
      expect(list.length).toBe(4);

      expect(list.find(i => i === 2).value).toBe(2);
      expect(list.length).toBe(4);

      expect(list.find(i => i === 3).value).toBe(3);
      expect(list.length).toBe(4);
    });

    it("should return null when could not found item", () => {
      expect(list.find(i => i === 1)).toBe(null);

      list.push(2);
      expect(list.find(i => i === 1)).toBe(null);
    });
  });
});
