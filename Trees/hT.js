const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const Tree = class {
  constructor() {
    this.root = [];
  }

  insert(val) {
    if (val) {
      const incoming = new Node(val);
      this.root[this.root.length] = incoming;
      if (this.root[1]) {
        let cIdx = this.root.length - 1;
        let pIdx = Math.floor((cIdx - 1) / 2);
        let tmp;
        while (this.root[pIdx] && this.root[pIdx].val > this.root[cIdx].val) {
          let tmp = this.root[cIdx];
          this.root[cIdx] = this.root[pIdx];
          this.root[pIdx] = tmp;
          cIdx = pIdx;
          pIdx = Math.floor((cIdx - 1) / 2);
        }
      }
    }
    this.sortChildren();
  }

  //how did they get the left and right child?
  sortChildren() {
    if (this.root) {
      let current = this.root;
      for (let i = 0; i < this.root.length; ++i) {
        // p = i, leftC = (i * 2) + 1, rightC = (i * 2) + 2;
        if (this.root[i * 2 + 1]) this.root[i].left = this.root[i * 2 + 1];
        if (this.root[i * 2 + 2]) this.root[i].right = this.root[i * 2 + 2];
      }
    }
  }

  postOrderDFS() {
    const nodesArr = [];
    const traverse = (curr) => {
      if (!curr) return;
      traverse(curr.left);
      traverse(curr.right);
      nodesArr[nodesArr.length] = curr.val;
    };
    traverse(this.root[0]);
    return nodesArr;
  }
};
const myTree = new Tree();
myTree.insert(2);
myTree.insert(1);
myTree.insert(3);
myTree.insert(4);
myTree.insert(5);
myTree.insert(6);

//so left to right, so it is a heap
// myTree.left = new Node(2);
// myTree.right = new Node(3);
// myTree.left.left = new Node(4);
// myTree.left.right = new Node(5);

console.log(myTree.root)
