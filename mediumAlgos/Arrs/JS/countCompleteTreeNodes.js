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


 CODE BELOW WAS WRITTEN TO PROVIDE TEST DATA FOR THE ALGO BELOW IT
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

const myFullTree = new FullBinaryTree();
// perhaps a check for all leaf nodes being full can make it even faster:
// check for layers to the left and right being equal
myFullTree.addMany([1, 2, 3, 4, 5, 6, 7, 8]);
// how does it work when it has to go left instead of right?
// myFullTree.addMany([1, 2, 3]);
// myFullTree.addMany([]);
// myFullTree.addMany([23]);
// console.log(myFullTree);

////////////////////////////////////////// START OF LEETCODE PROBLEM

// time complexity: O(n)
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

//console.log(countNodesRecurse(myFullTree.root));
/*

  According to Wikipedia, every level, except possibly the last, is completely filled
  in a complete binary tree, and all nodes in the last level are as far left as possible.
  It can have between 1 and 2h nodes inclusive at the last level h.
  Design an algorithm that runs in less than O(n) time complexity.

*/

var depthLeft = function (node) {
  for (let count = 0; node; node = node.left) {
    if (!node.left) return count;
    count++;
  }
};

var depthRight = function (node) {
  for (let count = 0; node; node = node.right) {
    if (!node.right) return count;
    count++;
  }
};

var exist = function (idx, depth, node) {
  let left = 0,
    right = 2 ** depth - 1,
    locateIdx;
  for (let i = 0; i < depth; ++i) {
    locateIdx = left + Math.floor((right - left) / 2);
    if (idx <= locateIdx) {
      node = node.left;
      right = locateIdx;
    } else {
      node = node.right;
      left = locateIdx + 1;
    }
  }
  return !!node;
};

//Time complexity : O(d^2) = O(log^2n)
var countNodes = function (root) {
  // stage 1: get pertinent info and return accordinly if it is the case
  if (!root) return 0;
  const depth1 = depthLeft(root);
  const depth2 = depthRight(root);
  if (depth1 === 0) return 1;
  if (depth1 === depth2) return 2 ** (depth1 + 1) - 1;

  // stage 2: commence binary search
  let left = 1,
    right = 2 ** depth1 - 1,
    potentialNodes;
  while (left <= right) {
    potentialNodes = left + Math.floor((right - left) / 2);
    if (exist(potentialNodes, depth1, root)) {
      left = potentialNodes + 1;
    } else {
      right = potentialNodes - 1;
    }
  }
  return 2 ** depth1 - 1 + left;
};

console.log(countNodes(myFullTree.root));

/*
STAGE 1: stage 1: get pertinent info and return accordinly if it is the case
  1.  check if root is not null
  2.  get the depth of the left side of tree ( try to get them in a way that reflects indexing in code)
  3.  get the depth of the right side of tree ( try to get them in a way that reflects indexing in code)
  4.  if complete tree has only a root node, return 1
  5.  if left depth equals right depth return 2 to the power of the depth of the complete tree

STAGE 2: Commence binary search on complete tree
  1.  create left, right and pivot variables
      a.  left should start at index 1 since it is already known that it exist
      b.  right should be 2 to the power of the left depth of the tree minus one to reflex proper indexin
      c.  pivot is left unassigned to point to the same spot in memory
  2.  loop while left is less than or equal to right
  3.  assign pivot the midpoint between left and right (divide and conquer)
*/
