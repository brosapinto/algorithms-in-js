import Queue from "../../../data-structures/queue/priority-queue";

function initCallbacks(callbacks) {
  const noop = () => {};

  // By default, avoid repeating vertices
  const allow = (() => {
    const seen = {};

    return ({ nextVertex }) => {
      const key = nextVertex.getKey();

      if (seen.hasOwnProperty(key)) {
        return false;
      }

      seen[key] = true;
      return true;
    };
  })();

  return {
    enterVertex: callbacks.enterVertex || noop,
    leaveVertex: callbacks.leaveVertex || noop,
    allowTraversal: callbacks.allowTraversal || allow
  };
}

function bfsRecur(graph, startVertex, callbacks) {
  let queue = new Queue();
  let previousVertex = null;

  queue.add(startVertex);

  // traverse all vertices from the queue
  while (!queue.isEmpty()) {
    const currentVertex = queue.poll();
    callbacks.enterVertex({ currentVertex, previousVertex });

    // add all neighbors to the queue for future traversal
    graph.getNeighbors(currentVertex).forEach(nextVertex => {
      const canTraverse = callbacks.allowTraversal({
        previousVertex,
        currentVertex,
        nextVertex
      });

      if (canTraverse) {
        queue.add(nextVertex);
      }
    });

    callbacks.leaveVertex({ currentVertex, previousVertex });
    previousVertex = currentVertex;
  }
}

/**
 *
 * @param {Graph} graph Graph to be traversed
 * @param {GraphVertex} startVertex Where the traverse should start
 * @param {Object} callbacks Map of callbacks
 */
export default function dfs(graph, startVertex, callbacks) {
  bfsRecur(graph, startVertex, initCallbacks(callbacks));
}
