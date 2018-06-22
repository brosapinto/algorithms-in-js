import hanoiTower from "./hanoi-tower";
import Stack from "../../../data-structures/stack";

describe("Hanoi Tower", () => {
  let fromPole;
  let withPole;
  let toPole;

  beforeEach(() => {
    fromPole = new Stack();
    withPole = new Stack();
    toPole = new Stack();
  });
  xit("should solve tower of hanoi puzzle with 2 discs", () => {
    hanoiTower(2, fromPole, withPole, toPole);

    expect(fromPole.toArray()).toEqual([]);
    expect(withPole.toArray()).toEqual([]);
    expect(toPole.toArray()).toEqual([1, 2]);
  });

  it("should solve tower of hanoi puzzle with 3 discs", () => {
    hanoiTower(3, fromPole, withPole, toPole);

    expect(fromPole.toArray()).toEqual([]);
    expect(withPole.toArray()).toEqual([]);
    expect(toPole.toArray()).toEqual([1, 2, 3]);
  });

  xit("should solve tower of hanoi puzzle with 3 discs", () => {
    hanoiTower(6, fromPole, withPole, toPole);

    expect(fromPole.toArray()).toEqual([]);
    expect(withPole.toArray()).toEqual([]);
    expect(toPole.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
