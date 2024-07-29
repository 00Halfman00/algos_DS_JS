/*

////////////  CREATE A PRIORITY QUEUE USING A BINARY HEAP TREE    //////////////

  NOTE: NODE WITH THE SMALLEST PRIORITY HAS THE HIGHEST PRIORITY

  1.  CREATE TWO CLASSES:
      A. NODE CLASS WITH PRIORITY AND VALUE PROPERTIES NAMED Node
      B. BINARY-HEAP-TREE-PRIORITY-QUEUE CLASS NAMED HBTPQ WITH AN ARRAY as its sole PROPERTY NAMED pq

  2.  CREATE FOUR METHODS FOR HBTPQ:
      A. ENQUE METHOD THAT INSERTS A NEW NODE TO pq
      B. HEAP UP METHOD THAT SORTS THE pq ARRAY EACH TIME ENQUE IS CALLED
      C. DEQUEUE METHOD THAT REMOVES NODE WITH HIGHEST PRIORITY/FIST NODE FROM pq
      D. HEAP DOWN METHOD THAT SORTS THE pq ARRAY EACH TIME DEQUEUE IS CALLED

      INSERT TIME COMPLEXITY: O(LOG N)
      REMOVE TIME COMPLEXITY: O(LOG N)
*/

const Node = function (val, pri) {
  this.val = val;
  this.pri = pri;
};

const BHTPQ = class {
  constructor() {
    this.pq = [];
  }

  enqueue(val, pri) {
    const node = new Node(val, pri);
    if (this.pq) {
      this.pq[this.pq.length] = node;
      this.heapUp();
    } else this.pq[0] = node;
    return this;
  }

  heapUp() {
    let cIdx = this.pq.length - 1,
      pIdx = Math.floor((cIdx - 1) / 2),
      tmp;

    while (this.pq[pIdx] && this.pq[pIdx].pri > this.pq[cIdx].pri) {
      tmp = this.pq[pIdx];
      this.pq[pIdx] = this.pq[cIdx];
      this.pq[cIdx] = tmp;
      cIdx = pIdx;
      pIdx = Math.floor((cIdx - 1) / 2);
    }
  }

  dequeu() {
    if (this.pq) {
      const max = this.pq[0];
      this.pq[0] = this.pq.pop();
      this.heapDown();
      return max;
    }
  }

  heapDown() {
    if (this.pq) {
      let pIdx = 0,
        leftCIdx = pIdx * 2 + 1,
        rightCIdx = leftCIdx + 1,
        smallCIdx,
        tmp;

      while (
        (this.pq[leftCIdx] && this.pq[leftCIdx].pri < this.pq[pIdx].pri) ||
        (this.pq[rightCIdx] && this.pq[rightCIdx].pri < this.pq[pIdx].pri)
      ) {
        if (!this.pq[rightCIdx]) smallCIdx = leftCIdx;
        else
          smallCIdx =
            this.pq[leftCIdx].pri < this.pq[rightCIdx].pri
              ? leftCIdx
              : rightCIdx;

        tmp = this.pq[pIdx];
        this.pq[pIdx] = this.pq[smallCIdx];
        this.pq[smallCIdx] = tmp;

        pIdx = smallCIdx;
        leftCIdx = pIdx * 2 + 1;
        rightCIdx = leftCIdx + 1;
      }
    }
  }
};

// [ 2, 3, 4 ]
// enqueue: 1  -> [ 2, 3, 4, 1 ]
// HEAP UP: -> [2, 1, 4, 3 ] -> [ 1, 2, 4, 3 ]

const myPQ = new BHTPQ();
myPQ.enqueue('one', 41);
myPQ.enqueue('two', 39);
myPQ.enqueue('three', 33);
myPQ.enqueue('four', 18);
myPQ.enqueue('five', 27);
myPQ.enqueue('six', 12);
myPQ.enqueue('seven', 55);

console.log(myPQ.pq);

console.log('dequeued: ', myPQ.dequeu());

console.log(myPQ.pq);
