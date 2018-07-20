const initCallbacks = (callbacks = {}) => {
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
};

const dfsRecur = (graph, currentVertex, previousVertex, callbacks) => {
  callbacks.enterVertex({ currentVertex, previousVertex });

  graph.getNeighbors(currentVertex).forEach(nextVertex => {
    const canTraverse = callbacks.allowTraversal({
      previousVertex,
      currentVertex,
      nextVertex
    });

    if (canTraverse) {
      dfsRecur(graph, nextVertex, currentVertex, callbacks);
    }
  });

  callbacks.leaveVertex({ currentVertex, previousVertex });
};

/**
 *
 * @param {Graph} graph Graph to be traversed
 * @param {GraphVertex} startVertex Where the traverse should start
 * @param {Object} callbacks Map of callbacks
 */
export default function dfs(graph, startVertex, callbacks) {
  dfsRecur(graph, startVertex, null, initCallbacks(callbacks));
}
