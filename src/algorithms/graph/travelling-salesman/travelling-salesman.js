function findAllPaths(vertex, paths = [], path = []) {
  const currentPath = [...path]; // clone path

  // add vertex to the path
  currentPath.push(vertex);

  // generate visited set from path
  const visitedSet = currentPath.reduce(
    (acc, vert) => ({
      ...acc,
      [vert.getKey()]: vert
    }),
    {}
  );

  // get all unvisited neighbors of vertex
  const unvisitedNeighbors = vertex
    .getNeighbors()
    .filter(neighbor => !visitedSet[neighbor.getKey()]);

  // treat current path as complete, if there aren't any unvisited neighbors
  if (!unvisitedNeighbors.length) {
    paths.push(currentPath);

    return paths;
  }

  // go through all neighbors
  for (let i = 0; i < unvisitedNeighbors.length; i++) {
    const currentUnvisitedNeighbor = unvisitedNeighbors[i];
    findAllPaths(currentUnvisitedNeighbor, paths, currentPath);
  }

  return paths;
}

/**
 * @param {Number[][]} adjacencyMatrix
 * @param {Object} verticesIndices
 * @param {GraphVertex[]} cycle
 * @returns {Number}
 */
function getCycleWeight(adjacencyMatrix, verticesIndices, cycle) {
  let weight = 0;

  for (let i = 1; i < cycle.length; i++) {
    const fromVertex = cycle[i - 1];
    const toVertex = cycle[i];
    const fromVertexIndex = verticesIndices[fromVertex.getKey()];
    const toVertexIndex = verticesIndices[toVertex.getKey()];

    weight += adjacencyMatrix[fromVertexIndex][toVertexIndex];
  }

  return weight;
}

/**
 * BRUTE FORCE algorithm
 * @param {Graph} graph
 */
export default function travellingSalesman(graph) {
  // pick starting point from where to traverse the graph
  const startVertex = graph.getAllVertices()[0];

  // generate all possible paths from startVertex
  const allPaths = findAllPaths(startVertex);

  // filter out paths that aren't cycles
  const allCycles = allPaths.filter(path => {
    const lastVertex = path[path.length - 1];
    const neighbors = lastVertex.getNeighbors();

    return neighbors.includes(startVertex);
  });

  // go through all cycles and pick the one with minimum tour weight
  const adjacencyMatrix = graph.getAdjacencyMatrix();
  const verticesIndices = graph.getVerticesIndices();
  let salesmanPath = [];
  let pathWeight = null;

  for (let i = 0, len = allCycles.length; i < len; i++) {
    const currentCycle = allCycles[i];
    const currentCycleWeight = getCycleWeight(
      adjacencyMatrix,
      verticesIndices,
      currentCycle
    );

    if (pathWeight === null || currentCycleWeight < pathWeight) {
      salesmanPath = currentCycle;
      pathWeight = currentCycleWeight;
    }
  }

  return salesmanPath;
}
