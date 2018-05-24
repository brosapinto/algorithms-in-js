import HashTable from "./hash-table";

describe("Hash Table", () => {
  it("calculate hash", () => {
    const hash = HashTable.calcHash("hello", 2);
    expect(hash).toBe(1);
  });

  it("add", () => {
    const hash = new HashTable(10);
    hash.add("hello", "world");
    hash.add("hi", "world");
    hash.add("wazup", "world");

    expect(hash.values).toEqual({
      2: { hi: "world" },
      5: {
        hello: "world",
        wazup: "world"
      }
    });
  });

  it("search", () => {
    const hash = new HashTable(10);
    hash.add("p1", "adding");
    hash.add("p2", "stuff");
    hash.add("p3", "to");
    hash.add("p4", "a");
    hash.add("p5", "map");

    expect(hash.search("p4")).toBe("a");
  });
});
