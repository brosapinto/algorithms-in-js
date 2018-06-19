# Travelling Salesman Problem

Given a list of cities and the distances between each of them, what is the shortest possible route that visits each city and returns to the origin city?

![Travelling Salesman](https://upload.wikimedia.org/wikipedia/commons/1/11/GLPK_solution_of_a_travelling_salesman_problem.svg)

The black line shows the shortest possible loop that connects every red dot.

![Travelling Salesman Graph](https://upload.wikimedia.org/wikipedia/commons/3/30/Weighted_K4.svg)

TSP can be modelled as an undirected weighted graph, such that cities are the graph's vertices, paths are the graph's edges and the distance if the edge weight.

It is a minimization problem, starting and finishing at a specified vertex after having visited each other vertex exactly once. If no paths exists between two cities, adding an arbitrarily long edge will complete the graph without affecting the optimal tour.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
