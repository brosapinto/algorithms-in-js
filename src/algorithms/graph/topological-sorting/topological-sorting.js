import Stack from "../../../data-structures/stack";
import dfs from "../depth-first-search";

export default function(graph) {
  // create a set of all vertices we want to visit
  let unvisitedSet = graph.getAllVertices().reduce((acc, vertex) => {
    acc[vertex.getKey()] = vertex;
    return acc;
  }, {});

  // create a set of all vertices already visited
  let visitedSet = {};

  // create a stack of ordered vertices
  let sortedVertices = new Stack();

  // key of the current vertex being visited
  let currentKey;

  while ((currentKey = Object.keys(unvisitedSet)[0])) {
    const vertex = unvisitedSet[currentKey];

    // do a DFS for current node
    dfs(graph, vertex, {
      enterVertex: ({ currentVertex }) => {
        const key = currentVertex.getKey();

        // when entering a vertex, move it to visited
        visitedSet[key] = currentVertex;
        delete unvisitedSet[key];
      },
      // when vertex has been totally explored, push it to the stack
      leaveVertex: ({ currentVertex }) => sortedVertices.push(currentVertex),
      // only traverse through vertices that haven't been visited yet
      allowTraversal: ({ nextVertex }) =>
        !visitedSet.hasOwnProperty(nextVertex.getKey())
    });
  }

  return sortedVertices.toArray();
}
