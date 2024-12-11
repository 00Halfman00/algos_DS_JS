/*

  1.  CREATE A FUNCTION THAT WILL CREATE NODES FOR HEAP CLASS NAMED Node
  2.  CREATE A MAX BINARY HEAP CLASS NAMED MaxBH
  3.  CREATE A METHOD TO INSERT NODES INTO THE MAX HEAP CLASS NAMED insert
  4.  CHREATE A HELPER FUNCTION TO SORT HEAP INTO PROPER ORDER AFTER INSERTING A NEW NODE NAMED insert
        MAX HEAP: PARENT NODE'S VALUE IS ALWAYS GREATER THAN CHILD NODE'S VALUE
        MIN HEAP: PARENT NODE'S VALUE IS ALWAYS LESS THAN THE CHILD NODE'S VALUE
  5.  CREATE A METHO TO REMOVE THE MAX NODE FROM THE MAX BINARY HEAP TREE
  6.  CREATE A HELPER FUNCTION TO SORT HEAP INTO PROPER ORDER AFTER MAX NODE IS REMOVED NAMED remove

*/

const Node = function (val) {
  this.val = val;
};

const MaxBH = class {
  constructor() {
    this.root = [];
  }

  insert(val) {
    const incoming = new Node(val);
    if (this.root) {
      this.root[this.root.length] = incoming;
      let cIdx = this.root.length - 1;
      let pIdx = Math.floor((cIdx - 1) / 2);
      this.heapUp(cIdx, pIdx);
    } else this.root = incoming;
    return this;
  }

  heapUp(cIdx, pIdx) {
    let tmp;
    while (this.root[pIdx] && this.root[pIdx].val < this.root[cIdx].val) {
      tmp = this.root[pIdx];
      this.root[pIdx] = this.root[cIdx];
      this.root[cIdx] = tmp;
      cIdx = pIdx;
      pIdx = Math.floor((cIdx - 1) / 2);
    }
  }

  remove() {
    if (this.root) {
      const max = this.root[0];
      if (this.root.length > 1) {
        this.root[0] = this.root.pop();
        this.heapDown();
      } else {
        this.root.pop();
      }
      return max;
    }
  }

  heapDown() {
    let pIdx = 0,
      leftCIdx = 1,
      rightCIdx = 2,
      bigCIdx,
      tmp;

    while (
      (this.root[leftCIdx] && this.root[pIdx].val < this.root[leftCIdx].val) ||
      (this.root[rightCIdx] && this.root[pIdx].val < this.root[rightCIdx].val)
    ) {
      if (!this.root[rightCIdx]) bigCIdx = leftCIdx;
      else
        bigCIdx =
          this.root[leftCIdx].val > this.root[rightCIdx].val
            ? leftCIdx
            : rightCIdx;

      tmp = this.root[bigCIdx];
      this.root[bigCIdx] = this.root[pIdx];
      this.root[pIdx] = tmp;
      pIdx = bigCIdx;
      leftCIdx = pIdx * 2 + 1;
      rightCIdx = leftCIdx + 1;
    }
  }

  printer() {
    let head = this.root;
    let one = 'one';
  }
};

const myMaxBH = new MaxBH();
// myMaxBH.insert(41);
// myMaxBH.insert(39);
// myMaxBH.insert(33);
// myMaxBH.insert(18);
// myMaxBH.insert(27);
// myMaxBH.insert(12);
// myMaxBH.insert(55);

myMaxBH.insert(5);
myMaxBH.insert(10);
myMaxBH.insert(15);
myMaxBH.insert(20);
myMaxBH.insert(25);
myMaxBH.insert(30);
myMaxBH.insert(8);

console.log(myMaxBH.root, '\n\n');

console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());
console.log("remove method's return value: ", myMaxBH.remove());

myMaxBH.printer();
// console.log("remove method's return value: ", myMaxBH.remove(), '\n\n');
// myMaxBH.insert(100);

// console.log(myMaxBH.root, '\n\n');
