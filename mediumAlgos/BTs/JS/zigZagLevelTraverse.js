/*
  To test out the zig-zag-level-traversal algorithm,
  create environment to test out the algorithm.

  The asterisk is used to create successful testing environment and, thus, is needed
  in the zigzag algorithm here, but leave the asterisk out in the leetcode solution.
*/

const Node = function (val) {
  this.val = val;
  this.left = '*';
  this.right = '*';
};

const BT = class {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const incomingNode = val ? new Node(val) : val;
    if (!this.root) {
      this.root = incomingNode;
    } else {
      let queue = [this.root],
        tmp = null;
      while (queue.length) {
        tmp = queue.shift();
        if (tmp.left === '*') {
          tmp.left = incomingNode;
          return;
        } else if (tmp.right === '*') {
          tmp.right = incomingNode;
          return;
        } else {
          queue.push(tmp.left);
          queue.push(tmp.right);
        }
      }
    }
  }

  insertNodes(valsArr) {
    if (valsArr[0]) {
      for (let i = 0; i < valsArr.length; ++i) {
        this.insert(valsArr[i]);
      }
    }
  }
};

const myBT = new BT();
myBT.insertNodes([3, 9, 20, null, null, 15, 7]);

var zigzagLevelOrder = function (root) {
  let count = 0;
  const firstQueue = [root],
    secondQueue = [],
    levels = [];
  let results = [],
    tmp = null;
  while (firstQueue[0] || secondQueue[0]) {
    results = [];
    if (!(count % 2)) {
      while (firstQueue.length) {
        tmp = firstQueue.shift();
        results.push(tmp.val);
        if (tmp.left !== '*' && tmp.left) secondQueue.push(tmp.left);
        if (tmp.right !== '*' && tmp.right) secondQueue.push(tmp.right);
      }
      ++count;
    } else {
      while (secondQueue.length) {
        tmp = secondQueue.pop();
        results.push(tmp.val);
        if (tmp.right !== '*' && tmp.right) firstQueue.unshift(tmp.right);
        if (tmp.left !== '*' && tmp.left) firstQueue.unshift(tmp.left);
      }
      count++;
    }
    levels.push(results);
  }
  return levels;
};

const firstBT = myBT.root;

console.log(zigzagLevelOrder(firstBT)); // [ [ 3 ], [ 20, 9 ], [ 15, 7 ] ]
