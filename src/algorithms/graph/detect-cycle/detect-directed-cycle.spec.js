import { Graph, GraphEdge, GraphVertex } from "../../../data-structures/graph";
import detectDirectedCycle from "./detect-directed-cycle";

describe("Detect Directed Cycle", () => {
  it("should detect directed cycle", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");
    const vertexE = new GraphVertex("E");
    const vertexF = new GraphVertex("F");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    const edgeDA = new GraphEdge(vertexD, vertexA);
    const edgeDE = new GraphEdge(vertexD, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeAC)
      .addEdge(edgeDA)
      .addEdge(edgeDE)
      .addEdge(edgeEF);

    // graph doesn't have any cycle
    expect(detectDirectedCycle(graph)).toBeNull();

    // now let's add one and try again
    const edgeFD = new GraphEdge(vertexF, vertexD);
    graph.addEdge(edgeFD);

    expect(detectDirectedCycle(graph)).toEqual({
      D: vertexF,
      F: vertexE,
      E: vertexD
    });
  });
});
