import dfs from "../depth-first-search";

function collectCyclePath(currentVertex, previousVertex, dfsParentMap) {
  let cycle = {};

  let currentKey = currentVertex.getKey();
  let currCycleVertex = currentVertex;
  let prevCycleVertex = previousVertex;

  while (prevCycleVertex.getKey() !== currentKey) {
    cycle[currCycleVertex.getKey()] = prevCycleVertex;
    currCycleVertex = prevCycleVertex;
    prevCycleVertex = dfsParentMap[prevCycleVertex.getKey()];
  }

  cycle[currCycleVertex.getKey()] = prevCycleVertex;

  return cycle;
}

/**
 *
 * @param {Graph} graph
 */
export default function detectDirectedCycle(graph) {
  let cycle = null;

  // keeps a reference for every previous vertex of all visited nodes
  // this will be usefull to determine what _path exactly_ is a cycle
  const dfsParentMap = {};

  // contains all vertices that haven't been visited (UNVISITED)
  const unvisitedSet = graph.getAllVertices().reduce((acc, vertex) => {
    acc[vertex.getKey()] = vertex;
    return acc;
  }, {});

  // if we find a vertex in the `visiting` set it means we're found a cycle
  // that's because it means if neighbors are still being explored
  const visitingSet = {}; // all vertices being VISITED
  const visitedSet = {}; // all vertices already VISITED

  const enterVertex = ({ currentVertex, previousVertex }) => {
    const currentKey = currentVertex.getKey();

    if (visitingSet.hasOwnProperty(currentKey)) {
      // this means a cycle was detected, so let's collect the path
      cycle = collectCyclePath(currentVertex, previousVertex, dfsParentMap);
    } else {
      // set this vertex as visited
      visitingSet[currentKey] = currentVertex;
      delete unvisitedSet[currentKey];

      // Update DFS parents list.
      dfsParentMap[currentKey] = previousVertex;
    }
  };

  const leaveVertex = ({ currentVertex }) => {
    const key = currentVertex.getKey();

    // all neighbors of currentVertex were visited
    // so we can move it to the visited set
    visitedSet[key] = currentVertex;
    delete visitingSet[key];
  };

  const allowTraversal = ({ nextVertex }) => {
    // avoid traversing when a cycle was found, to avoid infinite loop
    // and only traverse vertices that weren't already visited
    return cycle === null && !visitedSet.hasOwnProperty(nextVertex.getKey());
  };

  let currentKey;

  // starting looping over every vertice
  while ((currentKey = Object.keys(unvisitedSet)[0])) {
    const startVertex = unvisitedSet[currentKey];

    dfs(graph, startVertex, { enterVertex, leaveVertex, allowTraversal });
  }

  return cycle;
}
