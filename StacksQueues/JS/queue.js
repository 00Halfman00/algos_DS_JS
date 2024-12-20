/*
  CREATE FUNCION THAT WILL CREATE NODES FOR QUEUE CLASS
*/

const Node = function (val) {
  this.val = val;
  this.next = null;
};

/*
  CREATE QUEUE CLASS
    1. IT WILL HAVE A FIRST AND LAST PROPERTIES THAT WILL BE NODES
    2. IT WILL HAVE A SIZE PROPERTY THAT IS OF NUMBER TYPE
    3. IT WILL USE FIFO (FIRST IN FIRST OUT) TO ADD AND REMOVE NODES FROM QUEUE

  CREATE THE ADD METHOD FOR SLLQUEUE
    1. CREATE A CONST VARIABLE NAMED curr AND ASSIGN THE RETURN VALUE OF CALLING new Node(val).
    2. IF THE CLASS INSTANCE DOES NOT HAVE A NODE FOR ITS FIRST PROPERTY
       A. ASSIGN curr TO BE THE FIRST PROPERTY'S VALUE OF THE CLASS INSTACE
       B. ASSIGN curr TO BE THE LAST PROPERTY'S VALUE OF THE CLASS INSTANCE
    3. ELSE
       A. ASSIGN curr TO BE THE LAST.NEXT PROPERTY'S VALUE OF THE CLASS INSTANCE
       B. ASSIGN curr TO BE THE LAST PROPERTY'S VALUE OF THE CLASS INSTANCE
    4. EITHER WAY INCRESE THE SIZE PROPERTY OF THE CLASS INSTANCE BY ONE
    5. RETURN THE SIZE PROPERTY OF THE CLASS INSTANCE

    TME COMPLEXITY: O(1)
    SPACE COMPLEXITY: O(1)

  CREATE THE REMOVE METHOD FOR SLLQUEUE
    1. IF CLASS INSTANCE HAS A NODE IN ITS FIRST PROPERTY
       A. CREATE A CONST VARIABLE NAMED first AND ASSIGN THE FIRST PROPERTY'S NODE TO IT.
       B. ASSIGN THE CLASS INSTANCE'S FIRST PROPERTY TO BE THE FIRST PROPERTY'S NEXT VALUE.
       C. CHECK TO SEE IF THE FIRST PROPERY IS NOT NULL. IF NULL, ASSIGN THE CLASS INSTANCES LAST PROPERTY TO BE NULL.
       D. DECREASE THE SIZE PROPERTY OF THE CLASS INSTANCE BY ONE.
       E. RETURN first.

    TME COMPLEXITY: O(1)
    SPACE COMPLEXITY: O(1)

       Note: if class instance has no node in its first propery, it will just return undefined by default
*/

const SLLQueue = class {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(val) {
    const curr = new Node(val);
    if (!this.first) {
      this.first = curr;
      this.last = curr;
    } else {
      this.last.next = curr;
      this.last = curr;
    }
    this.size++;
    return this.size;
  }

  remove() {
    if (this.first) {
      const first = this.first;
      this.first = first.next;
      if (!this.first) this.last = null;
      this.size--;
      return first;
    }
  }

  print() {
    if (this.first) {
      let curr = this.first;
      while (curr) {
        console.log('curr node in queue: ', curr);
        curr = curr.next;
      }
    }
  }
};

const mySLLQueue = new SLLQueue();
mySLLQueue.add(1);
mySLLQueue.add(2);
mySLLQueue.add(3);
mySLLQueue.add(4);
// mySLLQueue.print();
console.log('\n\n\n\n\n');
console.log("remove method's return value: ", mySLLQueue.remove());
console.log('\n\n\n\n\n');
console.log('queue: ', mySLLQueue);
console.log("remove method's return value: ", mySLLQueue.remove());
console.log('\n\n\n\n\n');
console.log('queue: ', mySLLQueue);
console.log("remove method's return value: ", mySLLQueue.remove());
console.log('\n\n\n\n\n');
console.log('queue: ', mySLLQueue);
console.log("remove method's return value: ", mySLLQueue.remove());
// mySLLQueue.print();
console.log('\n\n\n\n\n');
console.log('queue: ', mySLLQueue);
