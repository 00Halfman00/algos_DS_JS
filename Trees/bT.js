const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const BT = class {
  constructor() {
    this.root = null;
    this.rootList = [];
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) this.root = node;
    else {
      if (val && this.root) {
        const queue = [this.root];
        while (queue[0]) {
          const current = queue.shift();
          if (!current.left) {
            current.left = node;
            break;
          }
          if (!current.right) {
            current.right = node;
            break;
          }
          queue[queue.length] = current.left;
          queue[queue.length] = current.right;
        }
      }
    }
    return this.root;
  }
  bfs() {
    const queue = [this.root],
      response = [];
    let cur;
    while (queue[0]) {
      cur = queue.shift();
      response[response.length] = cur.val;
      if (cur.left) queue[queue.length] = cur.left;
      if (cur.right) queue[queue.length] = cur.right;
    }
    return response;
  }

  setRootListBFS() {
    if (this.root) {
      const queue = [this.root];
      let cur;
      this.rootList = this.rootList[0] ? [] : this.rootList;
      while (queue[0]) {
        cur = queue.shift();
        this.rootList[this.rootList.length] = cur;
        if (cur.left) queue[queue.length] = cur.left;
        if (cur.right) queue[queue.length] = cur.right;
      }
    }
    return this.rootList;
  }

  getLeavesDFS() {
    /*
      1. try to use the length of the rootList to iterate over that number
        a. length = 5; levels = Math.ceil(length/2) = 3
      2. the first time you iterate, retrieve all leaf nodes (3 of them) and place them in their own array
      3. the second time, same: (1 leaf); and the same for final run: (1 leaf)
      4. at parent node, check for left and right nodes.
    */
    const res = [];
    let levels = Math.ceil(this.rootList.length / 2);
    const findLeaves = (node, idx) => {
      if (!node.left && !node.right) {
        node.children = true;
        res[idx][res[idx].length] = node.val;
        return;
      }
      if (node.left) findLeaves(node.left, idx);
      if (node.left && node.left.children) {
        node.left.children = false;
        node.left = null;
      }
      if (node.right) findLeaves(node.right, idx);
      if (node.right && node.right.children) {
        node.right.children = false;
        node.right = null;
      }
    };
    for (let i = 0; i < levels; ++i) {
      res[i] = [];
      findLeaves(this.root, i);
      this.root.children = false;
    }
    return res;
  }
};

const bT1 = new BT();
bT1.insert(1);
bT1.insert(2);
bT1.insert(3);
bT1.insert(4);
bT1.insert(5);

// const bT1 = new BT();
// bT1.insert(1);
// bT1.insert(3);
// bT1.insert(2);

// const bT2 = new BT();
// bT2.insert(1);
// bT2.insert(2);
// bT2.insert(3);

const leafSimilar = (root1, root2) => {
  const first = [''],
    second = [''];
  const traverse = (curr, arr) => {
    if (!curr.left && !curr.right) arr[0] += curr.val + ' ';
    if (curr.left) traverse(curr.left, arr);
    if (curr.right) traverse(curr.right, arr);
  };
  traverse(root1, first);
  traverse(root2, second);
  return first[0] === second[0];
};

// console.log('root: ', bT1.root)
// console.log(leafSimilar(bT1.root, bT2.root));

console.log(bT1.bfs());
console.log(bT1.setRootListBFS());
console.log(bT1.getLeavesDFS());
console.log(bT1.rootList);
