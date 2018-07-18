export default function gcd(num1, num2) {
  const n1 = Math.abs(num1);
  const n2 = Math.abs(num2);

  return n2 === 0 ? n1 : gcd(n2, n1 % n2);
}
