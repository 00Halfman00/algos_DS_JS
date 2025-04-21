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
        if (!tmp) continue;
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
// myBT.insertNodes([3, 9, 20, null, null, 15, 7]); // true
/*
              3
            /   \
          9       20
        /   \    /   \
      null null 15    7
              /         \
            null        null
*/
myBT.insertNodes([3, null, 9, 15, 7]); // false
/*
          3
        /   \
      null   9
            /  \
          15    7
*/
// myBT.insertNodes([1, 2, 2, 3, 3, null, null, 4, 4]);

const balancedBT = (root) => {
  const dfs = (node) => {
    if (!node || node === '*') return [true, 0];

    const left = dfs(node.left),
      right = dfs(node.right),
      balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  };

  const results = dfs(root);
  return results[0];
};

console.log(balancedBT(myBT.root));
