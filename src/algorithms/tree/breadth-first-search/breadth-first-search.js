const initCallbacks = (callbacks = {}) => {
  const noop = () => {};
  const allow = () => true;

  return {
    enterNode: callbacks.enterNode || noop,
    leaveNode: callbacks.leaveNode || noop,
    allowTraversal: callbacks.allowTraversal || allow
  };
};

function bfsRecur(root, callbacks) {
  let queue = [];

  queue.push(root);

  // while queue has items
  while (queue.length > 0) {
    const node = queue.shift();

    callbacks.enterNode(node);

    if (node.left && callbacks.allowTraversal(node, node.left)) {
      queue.push(node.left);
    }

    if (node.right && callbacks.allowTraversal(node, node.right)) {
      queue.push(node.right);
    }

    callbacks.leaveNode(node);
  }
}

export default function bfs(root, callbacks) {
  bfsRecur(root, initCallbacks(callbacks));
}
