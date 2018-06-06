import LinkedList from "../linked-list";

export default class Vertex {
  constructor(value) {
    this.value = value;
    this.edges = new LinkedList();
  }

  getKey() {
    return this.value;
  }

  addEdge(edge) {
    this.edges.push(edge);

    return this;
  }

  getEdges() {
    return this.edges.toArray().map(e => e.getKey());
  }

  hasEdge(edge) {
    return this.edges.find(e => e === edge) !== null;
  }

  deleteEdge(edge) {
    this.edges.delete(e => e === edge);
  }

  deleteAllEdges() {
    this.edges.forEach(edge => this.deleteEdge(edge));
  }

  getNeighbors() {
    return this.edges
      .toArray()
      .map(
        edge => (edge.startVertex === this ? edge.endVertex : edge.startVertex)
      );
  }

  hasNeighbor(vertex) {
    return this.findEdge(vertex) !== null;
  }

  findEdge(vertex) {
    return this.edges.find(
      e => e.startVertex === vertex || e.endVertex === vertex
    );
  }

  getDegree() {
    return this.edges.length;
  }

  toString() {
    return this.value;
  }
}
