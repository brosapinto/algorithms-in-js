# Euclidean algorithm

The Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the _greatest common divisor_ (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.

This algorithm is based on the principle that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number.

For example:

`21` is the GCD of `252` and `105` (as `252 = 21 x 12` and `105 = 21 x 5`)

- 252 - 105 = 147
- 147 - 105 = 42
- 105 - 42 = 63
- 63 - 42 = 21
- 42 - 21 = 21

By reversing the steps, the GCD can be expressed as a sum of the two original numbers each multiplied by a positive or negative integer (e.g `21 = 5 x 105 + (-2) x 252`). The fact that the GCD can always be expressed in this way is known as Bézout's identity.

![GCD](https://upload.wikimedia.org/wikipedia/commons/3/37/Euclid%27s_algorithm_Book_VII_Proposition_2_3.png)

## References

[Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)
