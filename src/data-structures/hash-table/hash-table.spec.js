import HashTable from "./hash-table";

describe("HashTable", () => {
  let hash;

  beforeEach(() => {
    hash = new HashTable(2);
  });

  describe("insert", () => {
    it("adds key value pair", () => {
      hash.insert("hello", "world");
      expect(hash.get("hello")).toBe("world");
    });

    it("it overwrites value of the same key", () => {
      hash.insert("hello", "world");
      hash.insert("hello", "awesome");
      expect(hash.get("hello")).toBe("awesome");
    });
  });

  describe("delete", () => {
    it("it returns deleted value", () => {
      hash.insert("hello", "world");
      const value = hash.delete("hello");

      expect(value).toEqual("world");
      expect(hash.get("hello")).toBe(null);
    });
  });
});
