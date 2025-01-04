/*
  STEP ONE
  1.  Create Node class that will provide nodes for the MBHPQ class
  2.  Takes a value and a priority and makes them properties of the class instance
*/

const Node = function (value, priority) {
  this.value = value;
  this.priority = priority;
};

/*
  STEP TWO
    CREATE A minBinaryHeapPriorityQueue CLASS DATA STRUCTURE.
      Key points about a min binary heap priority queue:
      Binary heap:
            It is a complete binary tree, meaning all levels are fully filled except possibly the
            last one, with nodes added from left to right.
      Min heap property:
            The value of a parent node is always less than or equal to the value of its children.
      Priority queue functionality:
            This structure allows for efficient operations like inserting new elements (with priorities)
            and extracting the element with the highest priority (which is the smallest element in a min heap).
      METHODS:
        1.  enque_node will insert a new node into the min-binary-heap-priority-queue
            and move it into its proper place in the queue.
        2.  dequeue_node will remove the node at the front of the queue and return it.
        3.  _heap_up is a helper function that will reshuffle the priority queue
            after a new node has been added so that higher priorities come before lower priorities.
        4.  _heap_down i a helper function that will reshuffle the priority queue
            after a node has been removed from the front of the priority queue
*/

const minBinaryHeapPriorityQueue = class {
  constructor() {
    this.nodes = [];
  }

  /////////                INSERT A NODE INTO THE PRIORITY QUEUE                //////////////////
  /////////                    time complexity: O(log n)

  /*
    STEP THREE
    enqueu:   METHOD TO INSERT A NODE
    1.  If both arguments are valid
        2.  It creates a new node, call it incomingNode
        3.  If there is atleast one node in the priority queue
            4.  Add the incomingNode to the end of the priority queue
            5.  Call helper method named _heap_up
    4.  Else add node to the priority queue
  */

  enqueue(value, priority) {
    if (typeof value === 'string' && typeof priority === 'number') {
      const incomingNode = new Node(value, priority);
      if (this.nodes.length) {
        this.nodes.push(incomingNode);
        this._heapUp();
      } else {
        this.nodes.push(incomingNode);
      }
    }
  }

  /*
    STEP FOUR
    _heapUp:  HELPER FUNCTION
    1.  Create a varible called childIdx from the last node in the priority queue and use it to
        create a variable called parentIdx.
    2.  Loop while parent index is zero or greater and the priority at parent
        index in the priority queue is greater than the priority at the child's index
        3.  Swap the nodes at those two indices
        4.  Adjust the two indices for the next iteration
  */

  _heapUp() {
    for (
      let childIdx = this.nodes.length - 1,
        parentIdx = Math.floor((childIdx - 1) / 2);
      parentIdx >= 0 &&
      this.nodes[parentIdx].priority > this.nodes[childIdx].priority;

    ) {
      [this.nodes[parentIdx], this.nodes[childIdx]] = [
        this.nodes[childIdx],
        this.nodes[parentIdx],
      ];
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }
  }

  /*
    STEP FIVE
    dequeue:  METHOD TO REMOVE A NODE
    1.  If there is atleast one node in the priority queue
        2.  Create a variable, call it minNode, and assign it the value of the first node
            in the priority queue
        3.  If the lenght of the priority queue is one
            4.  Pop off the only node in the priority queue
        5.  Else the priority queue has more than one node
            6.  Assign the first node of the priority queue the value of the last node
                in the priority queue
            7.  Call the _heap_down helper funciton
        8.   return min_node
  */

  dequeue() {
    if (this.nodes.length) {
      const min_node = this.nodes[0];
      if (this.nodes.length === 1) {
        this.nodes.pop();
      } else {
        this.nodes[0] = this.nodes.pop();
        this._heapDown();
      }
      return min_node;
    }
  }

  /*
    STEP SIX
    _heapDown:  HELPER FUNCTION
    1.    Create a variable called parentIdx and assign it the value of zero and
          use it to create a left child index, and a right child index.
    2.    Loop while the node's value at the parent index in the priority queue is greater than the
          value of the left child's index in the priority queue and the left child's index is smaller
          than the lefgth of the priority queue. or while checking the same conditions for the right child.
          3.    Find the child node with the smaller value
          4.    Swap the two nodes at those indices in the priority queue
          5.    Make the parentIdx the smaller child's index and calculate the
                children's indices
  */

  _heapDown() {
    // loop, keeping variables within block scope, while the parent's priority is greater than the children's priority
    for (
      let parentIdx = 0, leftChildIdx = 1, rightChildIdx = 2;
      (leftChildIdx < this.nodes.length &&
        this.nodes[parentIdx].priority > this.nodes[leftChildIdx].priority) ||
      (rightChildIdx < this.nodes.length &&
        this.nodes[parentIdx].priority > this.nodes[rightChildIdx].priority);

    ) {
      // find the smaller child
      let smallerChildIdx = leftChildIdx;
      if (
        rightChildIdx < this.nodes.length &&
        this.nodes[rightChildIdx].priority < this.nodes[leftChildIdx].priority
      ) {
        smallerChildIdx = rightChildIdx;
      }
      // swap the parent with the smaller child
      [this.nodes[parentIdx], this.nodes[smallerChildIdx]] = [
        this.nodes[smallerChildIdx],
        this.nodes[parentIdx],
      ];
      // do the math to adjust the indidces, pretty much the same as above
      parentIdx = smallerChildIdx;
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = leftChildIdx + 1;
    }
  }

  /////////////////              for testing and development               ////////////////////////

  printer() {
    for (let node of this.nodes) {
      console.log(node);
    }
  }
};

// const myPQ = new minBinaryHeapPriorityQueue();

// myPQ.enqueue('twenty', 20);
// myPQ.enqueue('eighteen', 18);
// myPQ.enqueue('fifteen', 15);
// myPQ.enqueue('twelve', 12);
// myPQ.enqueue('ten', 10);
// myPQ.enqueue('five', 5);
// myPQ.enqueue('two', 2);
// myPQ.enqueue('one', 1);
// myPQ.printer();
// console.log('\n');
// console.log(myPQ.dequeue());
// console.log(myPQ.dequeue());
// console.log('\n');
// myPQ.printer();

export default minBinaryHeapPriorityQueue;
