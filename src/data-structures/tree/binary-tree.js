export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);

    // if is the first insertion, becomes the root
    if (this.root === null) {
      this.root = node;
      return this;
    }

    // otherwise:
    // - go left if the value is less than the current node
    // - go right if the value is greater than the current node
    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      } else {
        // it already exists, skip it
        break;
      }
    }

    return this;
  }

  contains(value) {
    if (this.root.value === value) {
      return true;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    let nodeToRemove = this.find(value);
    const parent = this.findParent(nodeToRemove);

    // if node is a leaf
    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      if (parent.left === nodeToRemove) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
      // if node has two children
      // find next biggest value (min value in right branch)
      // and replace current value node with the found node
      let nextBiggerNode = this.findMin(nodeToRemove.right);

      if (nextBiggerNode === nodeToRemove.right) {
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.right = nodeToRemove.right.right;
      } else {
        this.remove(nextBiggerNode.value);
        nodeToRemove.value = nextBiggerNode.value;
      }
    } else {
      // if node only has one child
      if (nodeToRemove.left !== null) {
        nodeToRemove = nodeToRemove.left;
      }

      if (nodeToRemove.right !== null) {
        nodeToRemove = nodeToRemove.right;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        break;
      }
    }

    return current;
  }

  findParent(node) {
    const value = node.value;
    let current = this.root;
    let parent = this.root;

    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }

    return parent;
  }

  findMin(node) {
    let current = node;

    while (current) {
      if (current.left === null) {
        return current;
      }

      current = current.left;
    }
  }

  dfs(fn) {
    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }

      if (node !== null) {
        fn.call(this, node);
      }

      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);
  }

  size() {
    let length = 0;
    this.dfs(_ => ++length);
    return length;
  }

  toArray() {
    let collection = [];
    this.dfs(node => {
      collection.push(node.value);
    });
    return collection;
  }
}
