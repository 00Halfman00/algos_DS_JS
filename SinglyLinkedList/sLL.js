/*
  CREATE HELPER FUNCTION TO CREATE NODES FOR THE SINGLY LINKED LIST CLASS
*/

const Node = function (val) {
  this.val = val;
  this.next = null;
};

/*
  CREATE CLASS NAMED SinglyLinkedList
    1. constructor should contain a head, tail, and length property
      A. head and tail should be nodes
      B. length is a number


    2. CREATE PUSH METHOD FOR SLL  ///////////////////////////////////////////////////////////////
       A. SHOULD TAKE A VALUE AS A PARAMETER
       B. SHOULD CREATE A NEW NODE WITH THE VALUE PASSED IN
       C. IF THE CLASS INSTANCE HAS NO HEAD NODE, MAKE THE NEW NODE THE HEAD
       D. IF CLASS INSTANCE HAS A HEAD NODE, HAVE THE CURRENT TAIL POINT TO THE NEW NODE
       E. HEAD OR NO HEAD, MAKE THE NEW NODE THE CLASS INSTANCE'S TAIL
       F. INCREASE THE CLASS INSTANCE'S LENGTH PROPERTY BY 1

       TIME COMPLEXITY: O(1)
       SPACE COMPLEXITY: O(1)


    3. CREATE POP METHOD FOR SLL  ////////////////////////////////////////////////////////////////
       A. IT TAKES NO PARAMETER
       B. IF CLASS INSTANCE HAS A HEAD NODE (THIS.HEAD) RETRIEVE IT IN A REASSIGNABLE VARIABLE, ELSE RETURN
       C. RETRIEVE THE CLASS INSTANCE'S TAIL (THIS.TAIL) TO RETURN AT THE END OF METHOD'S CODE
       D. IF LENGTH IS GREATER THAN ONE, ITERATE OVER REASSIGNABLE VARIABLE WHILE IT HAS NEXT.NEXT NODE.
          AFTER LOOP, ASSIGN CURRENT VARIABLE TO BE TAIL AND ITS NEXT PROPERTY TO BE NULL.
          ELSE (LENGTH === 1) MAKE HEAD AND TAIL PROPERTY NULL
       D. DECREMENT CLASS INSTANCE'S LENGTH PROPERTY BY 1
       E. RETURN THE TAIL GOTTEN FROM THE START OF METHOD; THAT IS, THE REMOVED TAIL AND NOT THE NEW TAIL

       TIME COMPLEXITY: O(N)
       SPACE COMPLEXITY: O(1)

    4. CREATE UNSHIFT METHOD FOR SLL  /////////////////////////////////////////////////////////////
       A. IF CLASS INSTANCE HAS A HEAD NODE, CREATE NEW NODE WITH VALUE PASSED IN, HAVE ITS NEXT VALUE BE THE
          CURRENT HEAD, AND INCREMENT LENGTH BY 1, ELSE CALL THE PUSH METHOD WITH THE VALUE PASSED IN

       TIME COMPLEXITY: O(1)
       SPACE COMPLEXITY: O(1)


    5. CREATE SHIFT METHOD FOR SLL  ///////////////////////////////////////////////////////////////
       A. IF THERE IS NO HEAD RETURN
       B. ELSE CREATE A NEW CONST VARIABLE WITH THE VALUE OF THE CURRENT HEAD'S NEXT PROPERTY VALUE
       C. MAKE THE CURRENT HEADS NEXT VALUE NULL;
       D. CREATE ANOTHER CONST VARIABLE AND ASSIGN IT THE CLASS INSTANCE'S HEAD VALUE.
       E. HAVE THE NEW VARIABLE BECOME THE HEAD OF THE CLASS INSTANCE
       F. DECREASE THE LENGTH PROPERTY OF THE CLASS INSTANCE
       G. IF LENGTH PROPERTY === 1 MAKE THE NEW HEAD THE NEW TAIL
       H. IF LENGTH PROPERTY === 0 MAKE THE TAIL NULL
       I. RETURN THE OLD HEAD

       TIME COMPLEXITY: O(1)
       SPACE COMPLEXITY: O(1)

    6. CREATE GET METHOD FOR SLL   ///////////////////////////////////////////////////////////////
       A. IT TAKES AN INDEX AS A PARAMETER
       B. IF THERE IS A HEAD, IT WILL LOOP THROUGH THE SLL AND RETURN THE NDDOE AT THAT INDEX

       TIME COMPLEXITY: O(N)
       SPACE COMPLEXITY: O(1)

    7. CREATE SET METHOD FOR SLL  /////////////////////////////////////////////////////////////////
       A. IT TAKES A VALUE AND INDEX AS ITS PARAMETERS
       B. IF INDEX IS LESS THAN ZERO OR EQUAL TO OR GREATER THAN LENGTH OF CLASS INSTANCE, RETURN FALSE
       C. ELSE CALL THE GET METHOD TO FIND NODE AT INDEX PASSED IN AND ASSIGN ITS VAL PROPERTY TO THE VALUE PASSED IN
          AND RETURN TRUE

       TIME COMPLEXITY: BEST CASE O(1), AVERAGE CASE O(N)
       SPACE COMPLEXITY: O(1)

    8. CREATE INSERT METHOD FOR SLL ///////////////////////////////////////////////////////////////
       A. IT TAKES A VALUE AND AN INDEX AS PARAMETERS
       B. IF INDEX EQUALS ZERO, RETURN A CALL THE UNSHIFT METHOD WITH THE VALUE PASSED IN
       C. IF ELSE  INDEX EQUALS LENGTH OF CLASS INSTANCE, RETURN A CALL THE PUSH METHOD WITH VALUE PASSED IN
       D. ELSE THE GET METHOD WILL BE CALLED WITH THE INDEX PASSED IN MINUS 1
          a. it will create a new node with value pased in
          b. it will create a tmp variable that will hold the next node gotten from the get method's returned node
          c. it will use the node from get method's return and assign the new node to be its next node
          d. it will assign the tmp node to be the new node's next node
          e. increase the length property of the SLL instance
          f. return the length of the instance

       TTIME COMPLEXITY: BEST CASE O(1), ON AVERAGE O(N)
       SPACE COMPLEXITY: O(1)

    9. CREATE REMOVE METHOD FOR SLL
       A. IT TAKES AN INDEX AS A PARAMETER
       B. IF THE INDEX IS ZERO RETURN THIS.SHIFT()
       C. IF THE INDEX IS THIS.LENGTH - 1, RETURN THIS.POP()
       D. OTHERWISE, USE THE GET METHOD TO GET THE NODE JUST BEFORE THE TARGET NODE TO REMOVE (prev = THIS.GET(IDX-1))
          AND HAVE THE prev NODE GOTTEN TO HAVE ITS NEXT PROPERTY POINT TO prev.next.next.
       E. RETURN THE REMOVED NODE

       TTIME COMPLEXITY: BEST CASE O(1), ON AVERAGE O(N)
       SPACE COMPLEXITY: O(1)

    10. CREATE REVERSE METHOD FOR SLL
       A. IT REVERSES THE LIST AND RETURNS THE NEW HEAD ( THIS.HEAD )

       TIME COMPLEXITY: O(N)
       SPACE COMPLEXITY: O(1)
*/

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // adds a node to the end
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this.length;
  }

  pop() {
    // removes a node from the end
    if (!this.head) return;
    let current = this.head,
      tail = this.tail;
    if (this.head && this.length > 1) {
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return tail;
  }

  unshift(val) {
    // adds a node to begining
    if (this.head) {
      const node = new Node(val);
      node.next = this.head;
      this.head = node;
      this.length++;
      return this.length;
    } else {
      return this.push(val);
    }
  }

  shift() {
    // removes a node from beginning
    if (this.head) {
      const head = this.head;
      this.head = head.next;
      head.next = null;
      this.length--;
      if (!this.length) this.tail = null;
      return head;
    }
  }

  printNodes() {
    if (this.head) {
      let current = this.head;
      while (current) {
        console.log(current);
        current = current.next;
      }
    }
  }

  get(idx) {
    //////  retrieves a node, but doesn't remove it
    if (this.head && idx >= 0 && idx < this.length) {
      let curr = this.head,
        count = 0;
      if (idx === this.length - 1) {
        curr = this.tail;
      } else {
        while (curr) {
          if (idx === count) break;
          curr = curr.next;
          ++count;
        }
      }
      return curr;
    }
    return null;
  }

  set(idx, value) {
    ///// doesn't add to length, just alters a value in a node
    const current = this.get(idx);
    if (current) {
      current.val = value;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    // adds a new node at the passed in index
    if (idx === 0) return this.unshift(val);
    else if (idx === this.length)
      return this.push(val); // one node ahead of the tail
    else {
      const curr = this.get(idx - 1);
      if (curr) {
        const node = new Node(val);
        const tmp = curr.next;
        curr.next = node;
        node.next = tmp;
        this.length++;
        return this.length;
      }
    }
    return -1;
    // so a node is being added, one should return the length of the altered list, like push and unshift does
    // if it fails return -1, which is falsey; a positive number is truthy
  }

  remove(idx) {
    // removes a node from the passed in index
    if (idx === 0) return this.shift();
    else if (idx === this.length - 1) return this.pop();
    else {
      const prev = this.get(idx - 1);
      let remv;
      if (prev) {
        remv = prev.next;
        remv.next = null;
        prev.next = prev.next.next;
        --this.length;
        return removed;
      }
    }
    return null;
  }

  reverse() {
    // reverses the list
    let curr = this.head,
      prev = null,
      next;
    this.head = this.tail;
    this.tail = curr;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    //  10 -> 20 -> 30 -> 40 -> null
    // ------------------------------------- start
    //  curr
    // ------------------------------------- first time
    //       next
    //<-curr
    //  prev
    //       curr
    // ------------------------------------- second time
    //             next
    //     <-curr
    //       prev
    //             curr
    // ------------------------------------- third time....
    return this.head;
  }
};

const mySLL = new SinglyLinkedList();
mySLL.push(10); //index 0
mySLL.push(20); //index 1
mySLL.push(30); //index 2
mySLL.push(40); //index 3
// mySLL.shift(1);
// mySLL.printNodes();
// console.log(mySLL);
// console.log('pop method return value: ', mySLL.pop());
// console.log('pop method return value: ', mySLL.pop());
// console.log('pop method return value: ', mySLL.pop());
// console.log('pop method return value: ', mySLL.pop());
// console.log('unshift method: ', mySLL.unshift(5));
// console.log(mySLL);
// console.log('shift method return value: ', mySLL.shift());
// console.log('shift method return value: ', mySLL.shift());
// console.log('shift method return value: ', mySLL.shift());
// console.log('shift method return value: ', mySLL.shift());
// mySLL.printNodes();
// console.log(mySLL);
// console.log('shift method return value: ', mySLL.shift());
// console.log(mySLL);
// console.log('unshift method: ', mySLL.unshift(5));
//console.log('get method return value', mySLL.get(2)); // Node: { val: 10, next: Node {val 20, ...} }

console.log('reverse method: ', mySLL.reverse());
console.log(mySLL);
mySLL.printNodes();
