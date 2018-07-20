import { Graph, GraphEdge, GraphVertex } from "../../../data-structures/graph";
import bfs from "./breadth-first-search";

describe("Breadth First search", () => {
  let graph;
  let vertexA, vertexB, vertexC, vertexD, vertexE, vertexF, vertexG, vertexH;

  beforeEach(() => {
    vertexA = new GraphVertex("A");
    vertexB = new GraphVertex("B");
    vertexC = new GraphVertex("C");
    vertexD = new GraphVertex("D");
    vertexE = new GraphVertex("E");
    vertexF = new GraphVertex("F");
    vertexG = new GraphVertex("G");
    vertexH = new GraphVertex("H");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCG = new GraphEdge(vertexC, vertexG);
    const edgeAD = new GraphEdge(vertexA, vertexD);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeFD = new GraphEdge(vertexF, vertexD);
    const edgeDH = new GraphEdge(vertexD, vertexH);
    const edgeGH = new GraphEdge(vertexG, vertexH);

    graph = new Graph(true);

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCG)
      .addEdge(edgeAD)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeFD)
      .addEdge(edgeDH)
      .addEdge(edgeGH);
  });

  it("assert graph setup", () => {
    expect(graph.toString()).toBe("A,B,C,G,D,E,F,H");
  });

  it("should perform BFS operation on graph", () => {
    const numVertices = graph.getAllVertices().length;
    const enterVertex = jest.fn();
    const leaveVertex = jest.fn();

    bfs(graph, vertexA, { enterVertex, leaveVertex });

    expect(enterVertex).toHaveBeenCalledTimes(numVertices);
    expect(leaveVertex).toHaveBeenCalledTimes(numVertices);

    // assert callbacks are called by the order and with the arguments we expect
    const enterVertexCalls = [
      { currentVertex: vertexA, previousVertex: null },
      { currentVertex: vertexB, previousVertex: vertexA },
      { currentVertex: vertexD, previousVertex: vertexB },
      { currentVertex: vertexE, previousVertex: vertexD },
      { currentVertex: vertexC, previousVertex: vertexE },
      { currentVertex: vertexH, previousVertex: vertexC },
      { currentVertex: vertexF, previousVertex: vertexH },
      { currentVertex: vertexG, previousVertex: vertexF }
    ];

    for (let i = 0; i < numVertices; i++) {
      let params = enterVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(enterVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(enterVertexCalls[i].previousVertex);
    }

    const leaveVertexCalls = [
      { currentVertex: vertexA, previousVertex: null },
      { currentVertex: vertexB, previousVertex: vertexA },
      { currentVertex: vertexD, previousVertex: vertexB },
      { currentVertex: vertexE, previousVertex: vertexD },
      { currentVertex: vertexC, previousVertex: vertexE },
      { currentVertex: vertexH, previousVertex: vertexC },
      { currentVertex: vertexF, previousVertex: vertexH },
      { currentVertex: vertexG, previousVertex: vertexF }
    ];

    for (let i = 0; i < numVertices; i++) {
      const params = leaveVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(leaveVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(leaveVertexCalls[i].previousVertex);
    }
  });

  it("should allow to create custom vertex visiting logic", () => {
    const enterVertex = jest.fn();
    const leaveVertex = jest.fn();

    bfs(graph, vertexA, {
      enterVertex,
      leaveVertex,
      allowTraversal: ({ currentVertex, nextVertex }) => {
        return !(currentVertex === vertexA && nextVertex === vertexB);
      }
    });

    const numCalls = graph.getAllVertices().length - 1;
    expect(enterVertex).toHaveBeenCalledTimes(numCalls);
    expect(leaveVertex).toHaveBeenCalledTimes(numCalls);

    // assert callbacks are called by the order and with the arguments we expect
    const enterVertexCalls = [
      { currentVertex: vertexA, previousVertex: null },
      { currentVertex: vertexD, previousVertex: vertexA },
      { currentVertex: vertexE, previousVertex: vertexD },
      { currentVertex: vertexH, previousVertex: vertexE },
      { currentVertex: vertexF, previousVertex: vertexH },
      { currentVertex: vertexD, previousVertex: vertexF },
      { currentVertex: vertexH, previousVertex: vertexD }
    ];

    for (let i = 0; i < numCalls; i++) {
      let params = enterVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(enterVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(enterVertexCalls[i].previousVertex);
    }

    const leaveVertexCalls = [
      { currentVertex: vertexA, previousVertex: null },
      { currentVertex: vertexD, previousVertex: vertexA },
      { currentVertex: vertexE, previousVertex: vertexD },
      { currentVertex: vertexH, previousVertex: vertexE },
      { currentVertex: vertexF, previousVertex: vertexH },
      { currentVertex: vertexD, previousVertex: vertexF },
      { currentVertex: vertexH, previousVertex: vertexD }
    ];

    for (let i = 0; i < numCalls; i++) {
      const params = leaveVertex.mock.calls[i][0];
      expect(params.currentVertex).toEqual(leaveVertexCalls[i].currentVertex);
      expect(params.previousVertex).toEqual(leaveVertexCalls[i].previousVertex);
    }
  });
});
