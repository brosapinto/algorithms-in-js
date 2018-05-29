import Edge from "./graph-edge";
import Vertex from "./graph-vertex";

describe("Edge", () => {
  it("should create graph edge with default weight", () => {
    const startVertex = new Vertex("A");
    const endVertex = new Vertex("B");
    const edge = new Edge(startVertex, endVertex);

    expect(edge.getKey()).toBe("A_B");
    expect(edge.toString()).toBe("A_B");
    expect(edge.startVertex).toEqual(startVertex);
    expect(edge.endVertex).toEqual(endVertex);
    expect(edge.weight).toEqual(0);
  });

  it("should create graph edge with predefined weight", () => {
    const startVertex = new Vertex("A");
    const endVertex = new Vertex("B");
    const edge = new Edge(startVertex, endVertex, 10);

    expect(edge.startVertex).toEqual(startVertex);
    expect(edge.endVertex).toEqual(endVertex);
    expect(edge.weight).toEqual(10);
  });

  it("should be possible to do edge reverse", () => {
    const vertexA = new Vertex("A");
    const vertexB = new Vertex("B");
    const edge = new Edge(vertexA, vertexB, 10);

    expect(edge.startVertex).toEqual(vertexA);
    expect(edge.endVertex).toEqual(vertexB);
    expect(edge.weight).toEqual(10);

    edge.reverse();

    expect(edge.startVertex).toEqual(vertexB);
    expect(edge.endVertex).toEqual(vertexA);
    expect(edge.weight).toEqual(10);
  });
});
