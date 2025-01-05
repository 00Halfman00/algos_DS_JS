/*
  CREATE FUNCTION THAT WILL CREATE NODES FOR THE STACK CLASS OF SINGLY LINKED NODES
*/

const Node = function (val) {
  this.val = val;
  this.next = null;
};

/*
  CREATE CLASS NAMED STACK (IT WILL BE A STACK OF SINGLY LINKED NODES)
    1. IT WILL HAVE A FIRST AND LAST PROPERTIES THAT WILL BE NODES
    2. IT WILL HAVE A SIZE PROPERTY THAT IS OF NUMBER TYPE
    3. it will USE FIFO (FIRST IN FIRST OUT) TO ADD AND REMOVE NODES FROM THE STACK
*/

const SLLStack = class {
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
      curr.next = this.first;
      this.first = curr;
    }
    this.size++;
    return this;
  }

  remove() {
    if (this.first) {
      const remv = this.first;
      this.first = remv.next;
      if(!this.first) this.last = null;
      this.size--;
      return remv;
    }
  }

  print() {
    if (this.first) {
      let curr = this.first;
      while (curr) {
        console.log(curr);
        curr = curr.next;
      }
    }
  }
};

const mySLLStack = new SLLStack();
mySLLStack.add(1);
mySLLStack.add(2);
mySLLStack.add(3);
mySLLStack.add(4);
console.log('class: ', mySLLStack, '\n\n\n\n');
mySLLStack.print();
mySLLStack.remove();
mySLLStack.remove();
mySLLStack.remove();

console.log('////////////////////////////////////////////////')

mySLLStack.print();
console.log('class: ', mySLLStack, '\n\n\n\n');
mySLLStack.remove();
console.log('class: ', mySLLStack, '\n\n\n\n');
