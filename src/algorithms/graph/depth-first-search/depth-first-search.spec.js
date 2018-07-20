import { Graph, GraphEdge, GraphVertex } from "../../../data-structures/graph";
import dfs from "./depth-first-search";

describe("depthFirstSearch", () => {
  let graph;
  let vertexA, vertexB, vertexC, vertexD, vertexE, vertexF, vertexG;

  beforeEach(() => {
    // setup graph
    graph = new Graph(true);
    vertexA = new GraphVertex("A");
    vertexB = new GraphVertex("B");
    vertexC = new GraphVertex("C");
    vertexD = new GraphVertex("D");
    vertexE = new GraphVertex("E");
    vertexF = new GraphVertex("F");
    vertexG = new GraphVertex("G");
    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCG = new GraphEdge(vertexC, vertexG);
    const edgeAD = new GraphEdge(vertexA, vertexD);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeFD = new GraphEdge(vertexF, vertexD);
    const edgeDG = new GraphEdge(vertexD, vertexG);

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCG)
      .addEdge(edgeAD)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeFD)
      .addEdge(edgeDG);
  });

  it("assert graph setup", () => {
    expect(graph.toString()).toBe("A,B,C,G,D,E,F");
  });

  it("should perform DFS operation on graph", () => {
    const enterVertex = jest.fn();
    const leaveVertex = jest.fn();
    const numVertices = graph.getAllVertices().length;

    dfs(graph, vertexA, { enterVertex, leaveVertex });

    expect(enterVertex).toHaveBeenCalledTimes(numVertices);
    expect(leaveVertex).toHaveBeenCalledTimes(numVertices);

    // assert callbacks are called by the order and with the arguments we expect
    const enterVertexCalls = [
      { currentVertex: vertexA, previousVertex: null },
      { currentVertex: vertexB, previousVertex: vertexA },
      { currentVertex: vertexC, previousVertex: vertexB },
      { currentVertex: vertexG, previousVertex: vertexC },
      { currentVertex: vertexD, previousVertex: vertexA },
      { currentVertex: vertexE, previousVertex: vertexA },
      { currentVertex: vertexF, previousVertex: vertexE }
    ];

    for (let i = 0; i < numVertices; i++) {
      let params = enterVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(enterVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(enterVertexCalls[i].previousVertex);
    }

    const leaveVertexCalls = [
      { currentVertex: vertexG, previousVertex: vertexC },
      { currentVertex: vertexC, previousVertex: vertexB },
      { currentVertex: vertexB, previousVertex: vertexA },
      { currentVertex: vertexD, previousVertex: vertexA },
      { currentVertex: vertexF, previousVertex: vertexE },
      { currentVertex: vertexE, previousVertex: vertexA },
      { currentVertex: vertexA, previousVertex: null }
    ];

    for (let i = 0; i < numVertices; i++) {
      const params = leaveVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(leaveVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(leaveVertexCalls[i].previousVertex);
    }
  });

  it("allow users to redefine vertex visiting logic", () => {
    const enterVertex = jest.fn();
    const leaveVertex = jest.fn();

    dfs(graph, vertexA, {
      enterVertex,
      leaveVertex,
      allowTraversal: ({ currentVertex, nextVertex }) => {
        return !(currentVertex === vertexA && nextVertex === vertexB);
      }
    });

    const numVertices = graph.getAllVertices().length;
    expect(enterVertex).toHaveBeenCalledTimes(numVertices);
    expect(leaveVertex).toHaveBeenCalledTimes(numVertices);

    // assert callbacks are called by the order and with the arguments we expect
    const enterVertexCalls = [
      { currentVertex: vertexA, previousVertex: null },
      { currentVertex: vertexD, previousVertex: vertexA },
      { currentVertex: vertexG, previousVertex: vertexD },
      { currentVertex: vertexE, previousVertex: vertexA },
      { currentVertex: vertexF, previousVertex: vertexE },
      { currentVertex: vertexD, previousVertex: vertexF },
      { currentVertex: vertexG, previousVertex: vertexD }
    ];

    for (let i = 0; i < numVertices; i++) {
      let params = enterVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(enterVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(enterVertexCalls[i].previousVertex);
    }

    const leaveVertexCalls = [
      { currentVertex: vertexG, previousVertex: vertexD },
      { currentVertex: vertexD, previousVertex: vertexA },
      { currentVertex: vertexG, previousVertex: vertexD },
      { currentVertex: vertexD, previousVertex: vertexF },
      { currentVertex: vertexF, previousVertex: vertexE },
      { currentVertex: vertexE, previousVertex: vertexA },
      { currentVertex: vertexA, previousVertex: null }
    ];

    for (let i = 0; i < numVertices; i++) {
      const params = leaveVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(leaveVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(leaveVertexCalls[i].previousVertex);
    }
  });
});
