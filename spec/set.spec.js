import Set from "../src/set";

describe("Set", () => {
  it("add", () => {
    const s = new Set();
    s.add(1);
    s.add(1);
    s.add(2);
    expect(s.values).toEqual([1, 2]);
  });

  it("remove", () => {
    const s = new Set();
    s.add(1);
    s.add(2);

    s.remove(3); // trying to remove non existing element
    expect(s.values).toEqual([1, 2]);

    s.remove(1);
    expect(s.values).toEqual([2]);
  });

  it("contains", () => {
    const s = new Set();
    s.add(1);
    s.add(2);

    expect(s.contains(0)).toBeFalsy();
    expect(s.contains(1)).toBeTruthy();
  });

  it("union", () => {
    const s1 = new Set();
    const s2 = new Set();
    s1.add(1);
    s1.add(2);
    s2.add(1);
    s2.add(3);

    expect(s1.union(s2).values).toEqual([1, 3, 2]);
    expect(s2.union(s1).values).toEqual([1, 2, 3]);
  });

  it("intersect", () => {
    const s1 = new Set();
    const s2 = new Set();
    s1.add(1);
    s1.add(2);
    s2.add(1);
    s2.add(3);

    expect(s1.intersect(s2).values).toEqual([1]);
    expect(s2.intersect(s1).values).toEqual([1]);
  });

  it("difference", () => {
    const s1 = new Set();
    const s2 = new Set();
    s1.add(1);
    s1.add(2);
    s2.add(1);
    s2.add(3);

    expect(s1.difference(s2).values).toEqual([2]);
    expect(s2.difference(s1).values).toEqual([3]);
  });

  it("isSubset", () => {
    const s1 = new Set();
    s1.add(1);
    s1.add(2);
    s1.add(3);
    s1.add(4);

    const s2 = new Set();
    s2.add(1);
    s2.add(3);

    const s3 = new Set();
    s3.add(2);
    s3.add(3);

    expect(s1.isSubset(s2)).toBeTruthy();
    expect(s1.isSubset(s3)).toBeTruthy();
    expect(s2.isSubset(s3)).toBeFalsy();
  });
});
