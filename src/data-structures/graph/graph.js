import Vertex from "./graph-vertex";
import Edge from "./graph-edge";

export default class Graph {
  constructor(isDirected = false) {
    this.vertices = {}; // map
    this.edges = {};
    this.isDirected = isDirected;
  }

  getVertexByKey(key) {
    return this.vertices[key];
  }

  getAllVertices() {
    return Object.values(this.vertices);
  }

  getVerticesIndices() {
    return this.getAllVertices().reduce((acc, vertex, index) => {
      acc[vertex.getKey()] = index;
      return acc;
    }, {});
  }

  findVertexByKey(key) {
    return this.getVertexByKey(key) || null;
  }

  addVertex(vertex) {
    this.vertices[vertex.getKey()] = vertex;
    return this;
  }

  addEdge(edge) {
    // Try to find and end start vertices.
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // Insert start vertex if it wasn't inserted.
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    // Insert end vertex if it wasn't inserted.
    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    // Check if edge has been already added.
    if (this.edges[edge.getKey()]) {
      throw new Error("Edge has already been added before");
    } else {
      this.edges[edge.getKey()] = edge;
    }

    // Add edge to the vertices.
    if (this.isDirected) {
      // If graph IS directed then add the edge only to start vertex.
      startVertex.addEdge(edge);
    } else {
      // If graph ISN'T directed then add the edge to both vertices.
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  deleteEdge(edge) {
    const edgeKey = edge.getKey();

    if (!this.edges.hasOwnProperty(edgeKey)) {
      throw new Error("Edge not found in graph");
    }

    delete this.edges[edgeKey];
    this.getVertexByKey(edge.startVertex.getKey()).deleteEdge(edge);
    this.getVertexByKey(edge.endVertex.getKey()).deleteEdge(edge);
  }

  findEdge(vertexA, vertexB) {
    const vertex = this.getVertexByKey(vertexA);
    return vertex.findEdge(vertexB);
  }

  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }

  getAllEdges() {
    return Object.values(this.edges);
  }

  getWeight() {
    return Object.values(this.edges).reduce((w, edge) => w + edge.weight, 0);
  }

  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    // init matrix with infinities, meaning that there
    // is no way of getting from one vertex to another
    const adjacencyMatrix = Array(vertices.length)
      .fill(null)
      .map(() => Array(vertices.length).fill(Infinity));

    // fill the columns
    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach(neighbor => {
        const neighborIndex = verticesIndices[neighbor.getKey()];

        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(
          vertex,
          neighbor
        ).weight;
      });
    });

    return adjacencyMatrix;
  }

  reverse() {
    this.getAllEdges().forEach(edge => {
      // Delete straight edge from graph and from vertices.
      this.deleteEdge(edge);
      // Reverse it
      edge.reverse();
      // And add it back to the graph
      this.addEdge(edge);
    });
  }

  toString() {
    return Object.keys(this.vertices).join(",");
  }
}
