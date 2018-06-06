# Tree

A _tree_ is a widely used abstract data type (ADT), which simulates a hierarchical tree structure with a root value and subtrees of children with a parent node, as a set of linked nodes.

A tree data structure can be defined recursively as a collection of nodes where each node is a data structure consisting of a value and a list of references to nodes (the _children_), with the constraint that no reference is duplicated and none points to the root.

![Tree](https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg)

## References

* [Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
* [YouTube](https://www.youtube.com/watch?v=oSWTXtMglKE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=8)

# Binary Search Tree

A _binary search tree_ (BST), sometimes called ordered or sorted binary tree, is a particular type of tree that allows fast lookup, addition and removal of items.

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree, the algorithm traverses the tree from root to leaf and decides, based on comparing the keys stores in the nodes, whether to continue searching in the left or right subtrees. On average, this means that each comparison allows the operation to skip about half of the tree, so each operation takes the time proportional to the logarithm of the number of items stored in the tree.

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## References

* [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
* [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
