/*
222. Count Complete Tree Nodes
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled
in a complete binary tree, and all nodes in the last level are as far left as possible.
It can have between 1 and 2h nodes inclusive at the last level h.
Design an algorithm that runs in less than O(n) time complexity.


Example 1:
Input: root = [1,2,3,4,5,6]
Output: 6


Example 2:
Input: root = []
Output: 0


Example 3:
Input: root = [1]
Output: 1

Constraints:
The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.
*/

// create simple Node classes for FullBinaryTree
const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

// create class to store nodes in a full binary tree
const FullBinaryTree = class {
  constructor() {
    this.root = null;
  }

  // method to add one or more nodes to instance of FullBinaryTree
  addMany(valuesArr, i = 0) {
    // if valuesArr is not empty
    if (valuesArr.length !== 0) {
      // case where there is no root, create one and adjust index
      if (!this.root) {
        this.root = new Node(valuesArr[0]);
        i = 1;
      }
      const queue = [this.root];
      let tmp;
      while (queue.length && i < valuesArr.length) {
        tmp = queue.shift();
        if (!tmp.left) {
          tmp.left = new Node(valuesArr[i]);
          ++i;
        }
        if (!tmp.right && i < valuesArr.length) {
          tmp.right = new Node(valuesArr[i]);
          ++i;
        }
        if (tmp.left) queue.push(tmp.left);
        if (tmp.right) queue.push(tmp.right);
      }
    }
  }
};

// full binary tree is up and working as intended.
const myFullTree = new FullBinaryTree();
myFullTree.addMany([1, 2, 3, 4, 5, 6]);
// myFullTree.addMany([]);
// myFullTree.addMany([23]);
// console.log(myFullTree);

const countNodesRecurse = (root) => {
  let count = 0;
  if (root) {
    const recurse = (node) => {
      if (node) {
        count += 1;
        recurse(node.left);
        recurse(node.right);
      }
    };
    recurse(root);
  }
  return count;
};

console.log(countNodesRecurse(myFullTree.root));
