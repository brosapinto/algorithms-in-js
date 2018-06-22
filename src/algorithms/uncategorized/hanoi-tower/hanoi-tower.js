import Stack from "../../../data-structures/stack";

function solve(numOfDiscs, fromPole, withPole, toPole) {
  if (numOfDiscs === 1) {
    toPole.push(fromPole.pop());
  } else {
    solve(numOfDiscs - 1, fromPole, toPole, withPole);
    solve(1, fromPole, withPole, toPole);
    solve(numOfDiscs - 1, withPole, fromPole, toPole);
  }
}

export default function hanoiTower(
  numOfDiscs,
  fromPole = new Stack(),
  withPole = new Stack(),
  toPole = new Stack()
) {
  for (let i = numOfDiscs; i > 0; i--) {
    fromPole.push(i);
  }

  if (!fromPole.isEmpty()) {
    solve(numOfDiscs, fromPole, withPole, toPole);
  }
}
