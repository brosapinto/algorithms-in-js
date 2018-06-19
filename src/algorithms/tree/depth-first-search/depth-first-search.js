const initCallbacks = (callbacks = {}) => {
  const noop = () => {};
  const allow = () => true;

  return {
    enterNode: callbacks.enterNode || noop,
    leaveNode: callbacks.leaveNode || noop,
    allowTraversal: callbacks.allowTraversal || allow
  };
};

const dfsRecur = (node, callbacks) => {
  callbacks.enterNode(node);

  if (node.left && callbacks.allowTraversal(node, node.left)) {
    dfsRecur(node.left, callbacks);
  }

  if (node.right && callbacks.allowTraversal(node, node.right)) {
    dfsRecur(node.right, callbacks);
  }

  callbacks.leaveNode(node);
};

export default function dfs(root, callbacks) {
  dfsRecur(root, initCallbacks(callbacks));
}
