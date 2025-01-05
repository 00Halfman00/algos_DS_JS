/*
  STEP ONE
  Node class
  1.  Create a class/function that will produce nodes for the stack class
      ( Since stack is composed of doubly linked list, node will need a
        value property to carry payload, a next property to point to the next
        node in the doubly linked list,  and a previous porperty to point to
        the previous node in the doubly linked list.)
*/

const Node = function (val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};

/*
  StackDLL class
  STEP TWO
  1.  Create a stack class that will have a head pointing to the first node in
      the stack, a tail property that points to the last node in the stack, and a
      lenght property to keep track of the number of nodes in stack. In addition,
      it will have two main methods to enable LIFO
  Explanation:
  2.  LIFO (Last In, First Out):
      This refers to the concept where the last element added to a collection
      will be the first one removed.
  3.  Stack:
      A data structure that follows the LIFO principle, meaning the last item added
      to the stack will be the first one retrieved.
  4.  Key takeaway:
      Think of LIFO as a rule for how data is accessed, and a stack as the data
      structure that implements that rule.
*/

const StackDLL = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //////////////////////      METHOD TO ADD NODE TO STACK        ///////////////////////////////////
  /*
    time complexity: O(1)
    1.  check if the argument passed in is valid
        2.  Create a node, call it incomingNode, with the argument passed in
        3.  check if there is atleast one node in the stack
            4.  adjust pointers as needed
        5.  else make incomingNode the head of the class
        6.  Make the incoming Node the tail of the class
        7.  Increment the length property of the class by one
    8.  return the lenght of the stack
  */

  push(val) {
    if (typeof val === 'number') {
      const incomingNode = new Node(val);
      if (this.length) {
        this.tail.next = incomingNode;
        incomingNode.prev = this.tail;
      } else {
        this.head = incomingNode;
      }
      this.tail = incomingNode;
      this.length += 1;
    }
    return this.length;
  }

  //////////////////////      METHOD TO REMOVE A NODE FROM STACK        ///////////////////////////
  /*
    time complexity: O(1)
    1.  Check if there is atleast one node in the stack
        2.  Create a variable, called poppedNode, and assign it the value of the
            tail in the stack class
        2.  Check if there is exactly one node in the stack
            3.  make the head and tail properies of the stack class null
        4.  Else
            5.  make the tai'ls previous node the new tail
            6.  make the new tail's next node property null
            7.  make the poppedNodes's previous property null
        8.  subtract one fromt he length property of the class instance
        9.  return poppedNode
    10. Implicitly return undefined
  */

  pop() {
    if (this.length) {
      const poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length -= 1;
      return poppedNode;
    }
  }

  ////////////////////////       for testing and developent           //////////////////////////////

  printer() {
    let tmp = this.head;
    console.log(
      'head: ',
      this.head.val,
      ' tail: ',
      this.tail.val,
      ' length: ',
      this.length
    );
    while (tmp) {
      console.log(tmp, '\n');
      tmp = tmp.next;
    }
  }
};

const myStackDLL = new StackDLL();
myStackDLL.push(1);
myStackDLL.push(2);
myStackDLL.push(3);
myStackDLL.push(4);
myStackDLL.push(5);
myStackDLL.push(6);

console.log('popped: ', myStackDLL.pop());

myStackDLL.printer();
