/*
  CREATE HELPER FUNCTION THAT WILL CREATE NODES FOR THE DLL
*/

const Node = function (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

/*
  1. CREATE A CLASS TO CREATE DLL INSTANCES
     A. THE CLASS WILL HAVE A HEAD, TAIL AND LENGTH PROPERTIES

  2. CREATE  METHOD FOR DLL
     A. CREATE A CONST VARIABLE TO ASSIGN  THE RETURN VALUE OF CALLING new Node(val) NAMED icoming
     B. IF THE CLASS INSTANCE HAS NO HEAD, ASSIGN incoming TO BE THIS.HEAD'S VALUE
     C. ELSE ASSIGN incoming TO BE THE THIS.TAIL'S NEXT PROPERTY AND incoming TO
        HAVE ITS PREV PROPERTY BE THIS.TAIL
     D. EITHER WAY MAKE incoming THE NEW THIS.TAIL FOR THE CLASS INSTANCE AND
        INCREMENT THE INSTANCE'S LENGTH PROPERTY BY ONE.
     E. RETURN THIS

     TIME COMPLEXITY: O(N)
     SPACE COMPLEXITY: O(1)

  3. CREATE THE POP METHOD FOR DLL
    A.  ASSIGN THIS.TAIL TO A CONST VARIABLE NAMED tail.
    B.  MAKE THE TAIL'S PREV VALUE THE NEW TALE
    C.  MAKE THE NEW THIS.TAIL'S NEXT PROPERY NULL
    D.  MAKE  tail.prev EQUAL NULL
    E.  DECREMENT THE THIS.LENGTH VALUE OF DLL CLASS INSTANCE AND RETURN tail

    TIME COMPLEXITY: O(1)
    SPACE COMPLEXITY: O(1)


  4. CREATE THE UNSHIFT METHOD FOR DLL
     A. CREATE A CONST VARIABLE FROM THE RETURN VALUE OF CALLING new Node(val) NAMED incoming
     B. IF THERE IS NO THIS.HEAD, MAKE INCOMING THE NEW HEAD AND TAIL FOR THE CLASS INSTANCE
     C. ELSE ASSIGN THIS.HEAD TO BE THE VALUE OF incoming.next
     D. EITHER WAY, INCREMENT THE CLASS INSTANCE'S LENGTH PROPERTY BY ONE
     E. RETURN this.length.

     TIME COMPLEXITY: O(1)
     SPACE COMPLEXITY: O(1)


  5. CREATE THE SHIFT METHOD FOR THE DLL
     A. IF THIS.HEAD, CREATE A CONST VARIABLE AND ASSIGN THIS.HEAD AS ITS VALUE NAMED head.
     B. MAKE THIS.HEAD NOW EQUAL THIS.HEAD.NEXT
     C. MAKE head.next EQUAL NULL AND DECREMENT THE CLASS INSTANCE'S LENGTH VALUE BY ONE
     D. RETURN head;

     TIME COMPLEXITY: O(1)
     SPACE COMPLEXITY: O(1)

  6. CREATE THE GET METHOD FOR THE DLL (VERSION 0)
     A. IT WIL TAKE AN INDEX AS A PARAMETER
     B. IF THERE IS A HEAD FOR THE INSTANCE OF THE CLASS
     C. IT WILL SEEK TO FIND IF THE IDX IS CLOER TO ZERO OR THE LENGTH PROPERTY OF THE CLASS INSTANCE
     D. IF IT IS CLOSER TO ZERO IT WILL START TO SEARCH FOR THE NODE AT THE PASSED IN INDEX FROM THE HEAD, MOVING TOWARDS THE TAIL
     E. ELSE IT WILL SEARCH FOR THE NODE AT THE PASSED IN INDEX FROM THE TAIL, MOVING TOWARDS THE HEAD
     G. IT WILL RETURN THE NODE WHEN FOUND
     7. ELSE UNDEFINED WILL BE RETURNED BY DEFAULT


  6.1 CREATE THE GET METHOD FOR THE DLL (VERSION 1)
     A. IT WILL TAKE AN INDEX AS A PARAMETER
     B. IF THERE IS A this.head AND THE INDEX IS ZERO OR GREATER AND LESS THAN THE LENGTH OF THE DLL'S CLASS INSTANCE'S LENGTH PROPERYT,
        I. LOOP OVER THE LIST USING A COUNT/ER VARIABLE TO KEEP TRACK OF NODE AT INDEX/COUNTER
        II. RETURN THE NODE WHEN COUNT/ER EQUALS INDEX
     C. ELSE DO NOTHING CAUSE IF YOU DON'T RETURN ANYTHING, UNDEFINED WILL BE RETURNED BY DEFAULT


     TIME COMPLEXITY: O(N)
     SPACE COMPLEXITY: O(1)

  6.2 CREATE THE GET VERSION 2 METHOD FOR THE DLL
      A. IT WILL TAKE AN INDEX AS ITS PARAMETERS
      B. IF THERE IS A HEAD FOR THE CLASS INSTANCE
      C. IT WILL DO A BINARY SEARCH OVER THE NODE LIST ARRAY OF THE CLASS INSTANCE AND RETURN THE NODE AT THE PASSED IN IDX

      TIME COMPLEXITY: O(N LOG N)
      SPACE COMPLEXITY: O(1)

  7. CREATE THE SET METHOD FOR THE DLL
    A. IT WILL TAKE AN INDEX AND A VALUE AS PARAMETERS
    B. IF THE CLASS INSTANCE HAS A VALUE FOR ITS HEAD PROPERTY,
      I. USE THE GET METHOD TO GET THE NODE AT THAT INDEX AND REPLACE IT S VALUE WITH THE VALUE PASSED IN
    C. RETURN THIS

    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(N)

  8. CREATE THE SET NODE LIST METHOD FOR THE DLL
     A. IF THERE IS A HEAD IN THE CLASS INSTANCE
      I. CREATE A REASSIGNABLE VARIABLE NAMED curr AND INITIATE TO HAVE THE VALUE OF THE HEAD PROPERTY OF THE CLASS INSTANCE
      II. LOOP OVER CURRENT WHILE IT HAS A VALUE
        a. push curr onto the nodeList array of the class instance
     B. RETURN this

     TIME COMPLEXITY: O(N)
     SPACE COMPLEXITY: O(N)



  8. CREATE THE INSERT METHOD FOR THE DLL
     A. IT WILL TAKE AN INDEX AND A VALUE AS PARAMETERS
     B. IF THERE IS A VALUE FOR THE CLASS INSTANCE'S HEAD PROPERTY and idx >= 0 and idx <= this.lenth
      0. IF IDX EUALS ZERO OR THIS.LENGTH, RETURN UNSHIFT OR PUSH, RESPECTIVELY, WITH VALUE PASSED IN AS ARGUMENT
      I. ELSE USE THE GET METHOD TO GET THE PREVIOUS NODE AT INDEX MINUS 1; NAME IT prev
      II. CREATE A NEW NODE WITH THE RETURN VALUE OF CALLING new Node(val) from the val passed in NAMED incoming
      III. MAKE incoming's next value the prev nodes' next value
      IV. MAKE incoming  the prev node's next property's value
      V. INCREASE THE CLASS INSTANCES LENGTH PROPERTY BY ONE
      VI. RETURN THIS.

      TIME COMPLEXITY: O(N) ON AVERAGE, O(1) ON BEST CASE IF IDX IS ZERO OR THE LENGTH OF THE DLL
      SPACE COMPLEXITY: O(1)

  9. CREATE THE REMOVE METHOD FOR THE DLL
     A. IT WILL TAKE AN INDEX AS ITS PARAMETER
     B. IF THERE IS A VALUE FOR THE CLASS INSTANCE'S HEAD PROPERTY
      I. USE THE GET METHOD TO GET THE PREVIOUS NODE AT INDEX MINUS 1; NAME IT prev.
      II. CREATE A CONSTANT VAIABLE NAMED remv AND ASSIGN prev.next AS ITS VALUE; THAT IS, THE VALUE OF THE NODE TO REMOVE
      III. ASSIGN THE VALUE OF remv.next TO prev.next AND ASSIGN prev TO remv.next.prev;
      IV. MAKE remv.next = null AND remv.prev = null
      IV. DECREASE THE CLASS INSTANCE'S LENGTH PROPERTY BY ONE
      V. RETURN remv

      TIME COMPLEXITY: O(N) ON AVERAGE, BEST CASE O(1) IF INDEX IS ZERO OR THIS.LENGTH - 1
      SPACE COMPLEXITY: O(1)


  10. CREATE THE REVERSE METHOD FOR THE DLL
      A. IT WILL USE TWO POINTERS TWO REASSIGN VALUES FOR EACH NODE IN THE LIST, AND A VARIABLE TO HOLD THE VALUE OF this.head NAMED head.
      B. IT WILL USE THE POINTER prev AND THE POINTER curr THAT STARTS WITH THE VALUE OF THIS.HEAD
      C. LOOP WHILE curr IS TRUTHY(not null).
        I. ASSIGN prev THE VALUE OF THE CURRENT NODE'S PREVIOUS VALUE
        II. ASSIGN THE CURRENT NODE'S PREVIOUS PROPERTY TO HAVE THE VALUE OF ITS NEXT PROPERTY
        III. ASSIGN THE CURRENT NODE'S NEXT PROTPERTY TO HAVE THE VALUE OF prev
        IV. ASSIGN curr TO BE THE CURRENT NODE'S PREVIOUS PROPERTY VALUE
      D. AFTER LOOP, CHECK TO SEE IF prev HAS A VALUE(NOT NULL).
        I. IF IT DOES, ASSIGN THE HEAD OF THE CLASS INSTANCE TO BE prev.prev.
        II. ASSIGN THE TAIL OF THE CLASS INSTANCE TO HAVE THE VALUE OF head
      E. RETURN THIS;

      TIME COMPLEXITY: O(N)
      SPACE COMPLEXITY: O(1)
*/

const DLL = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nodeList = [];
    this.length = 0;
  }

  push(val) {
    const incoming = new Node(val);
    if (!this.head) {
      this.head = incoming;
    } else {
      this.tail.next = incoming;
      incoming.prev = this.tail;
    }
    this.tail = incoming;
    this.length++;
    return incoming;
  }

  pop() {
    if (this.tail) {
      const tail = this.tail;
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
      this.length--;
      return tail;
    }
  }

  unshift(val) {
    const incoming = new Node(val);
    if (!this.head) {
      this.head = incoming;
      this.tail = incoiming;
    } else {
      incoming.next = this.head;
      this.head = incoming;
    }
    this.length++;
    return incoming;
  }

  shift() {
    if (this.head) {
      const head = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      head.next = null;
      this.length--;
      return head;
    }
  }

  // VERSION ZERO  TIME COMPLEXITY: O(N/2), BUT IT IS STILL CONSIDERD O(N)
  getV0(idx) {
    if (this.head) {
      if (idx === 0) return this.head;
      if (idx === this.length - 1) return this.tail;
      const mid = this.length / 2;
      let start = idx < mid ? 0 : this.length - 1;
      let curr;
      if (!start) {
        curr = this.head;
        while (start !== mid) {
          if (start === idx) return curr;
          curr = curr.next;
          start++;
        }
      } else {
        curr = this.tail;
        while (start) {
          if (start === idx) return curr;
          curr = curr.prev;
          start--;
        }
      }
    }
  }

  // VERSION 1  TIME COMPLEXITY: O(N)
  getV1(idx) {
    if (this.head && idx >= 0 && idx < this.length) {
      if (idx === 0) return this.head;
      if (idx === this.length - 1) return this.tail;
      let curr = this.head,
        count = 0;
      while (curr) {
        if (idx === count) return curr;
        curr = curr.next;
        ++count;
      }
    }
  }

  // SO THE IDEA IS TO DO A BINARY SEARCH FOR A NODE IN THE NODE LIST; TIME COMPLEXITY: O(N LOG N)
  getV2(idx) {
    this.setNodeList();
    if (this.head && idx >= 0 && idx < this.length) {
      if (idx === 0) return this.head;
      if (idx === this.length - 1) return this.tail;
      let left = 0,
        right = this.nodeList.length - 1,
        mid;
      while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid === idx) return this.nodeList[idx];
        if (mid > idx) right = mid;
        else left = mid;
      }
    }
  }

  set(idx, val) {
    if (this.head) {
      const curr = this.get(idx);
      if (curr) curr.val = val;
    }
    return this;
  }

  setNodeList() {
    if (this.head) {
      let curr = this.head;
      while (curr) {
        this.nodeList[this.nodeList.length] = curr;
        curr = curr.next;
      }
    }
    return this;
  }

  insert(idx, val) {
    if (this.head && idx >= 0 && idx <= this.length) {
      if (idx === 0) return this.unshift(val);
      if (idx === this.length) return this.push(val);
      const prev = this.get(idx - 1);
      if (prev) {
        const incoming = new Node(val);
        incoming.next = prev.next;
        prev.next = incoming;
        this.length++;
        return this;
      }
    }
  }

  remove(idx) {
    if (this.head && idx >= 0 && idx < this.length) {
      if (idx === 0) return this.shift();
      if (idx === this.length - 1) return this.pop();
      const prev = this.get(idx - 1);
      if (prev) {
        const remv = prev.next;
        remv.next.prev = prev;
        prev.next = remv.next;
        remv.prev = null;
        remv.next = null;
        this.length--;
        return remv;
      }
    }
    // if not this.head, undefined will be returned by default when no explicit return is provided
  }

  //     1 ->  2  ->  3  -> 4

  reverse() {
    if (this.head) {
      let curr = this.head,
        head = this.head,
        prev;
      while (curr) {
        prev = curr.prev;
        curr.prev = curr.next;
        curr.next = prev;
        curr = curr.prev;
      }

      if (prev) {
        this.head = prev.prev;
        this.tail = head;
      }
    }
    return this;
  }

  print() {
    if (this.head) {
      let curr = this.head;
      while (curr) {
        console.log(curr, '\n\n');
        curr = curr.next;
      }
      return this;
    }
  }
};

const myDLL = new DLL();

myDLL.push(1);
myDLL.push(2);
myDLL.push(3);
myDLL.push(4);
// console.log("pop method's return value: ", myDLL.pop());
console.log('\n\n\n\n');
console.log("get version 2's return value: ", myDLL.getV0(1));
// console.log("insert method's return value: ", myDLL.insert(2, 9999), '\n\n');
// console.log(myDLL.print(), '\n\n');
// console.log('remove methods\'s return value: ', myDLL.remove(3));
// myDLL.reverse();
// console.log(myDLL.print(), '\n\n');
// console.log('this.tail: ', myDLL.tail)
