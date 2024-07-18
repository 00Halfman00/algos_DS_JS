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

    -- ( HHERE THERE IS PUSH THERE IS POP, JUST LIKE WHERE THERE IS NACHO THERE IS TACO ) --

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


  6. CREATE THE GET METHOD FOR THE DLL
     A. IT WILL TAKE AN INDEX AS A PARAMETER
     B. IF THERE IS A this.head AND THE INDEX IS ZERO OR GREATER AND LESS THAN THE LENGTH OF THE DLL'S CLASS INSTANCE'S LENGTH PROPERYT,
        I. LOOP OVER THE LIST USING A COUNT/ER VARIABLE TO KEEP TRACK OF NODE AT INDEX/COUNTER
        II. RETURN THE NODE WHEN COUNT/ER EQUALS INDEX
     C. ELSE DO NOTHING CAUSE IF YOU DON'T RETURN ANYTHING, UNDEFINED WILL BE RETURNED BY DEFAULT


     TIME COMPLEXITY: O(N)
     SPACE COMPLEXITY: O(1)

  7. CREATE THE SET METHOD FOR THE DLL
    A. IT WILL TAKE AN INDEX AND A VALUE AS PARAMETERS
    B. IF THE CLASS INSTANCE HAS A VALUE FOR ITS HEAD PROPERTY,
      I. USE THE GET METHOD TO GET THE NODE AT THAT INDEX AND REPLACE IT S VALUE WITH THE VALUE PASSED IN
    C. RETURN THIS

    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(N)


  8. CREATE THE INSERT METHOD FOR THE DLL
     A. IT WILL TAKE AN INDEX AND A VALUE AS PARAMETERS
     B. IF THERE IS A VALUE FOR THE CLASS INSTANCE'S HEAD PROPERTY
      I. USE THE GET METHOD TO GET THE PREVIOUS NODE FROM THE NODE AT THAT INDEX PASSED IN
      II. CREATE A NEW NODE WITH THE RETURN VALUE OF CALLING new Node(val) from the val passed in NAMED incoming
      III. MAKE incoming's next value the prev nodes' next value
      IV. MAKE incoming  the prev node's next property's value
      V. RETURN THIS.
*/

const DLL = class {
  constructor() {
    this.head = null;
    this.tail = null;
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
    return this;
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
    return this.length;
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

  get(idx) {
    if (this.head && idx >= 0 && idx < this.length) {
      let curr = this.head,
        count = 0;
      while (curr) {
        if (idx === count) return curr;
        curr = curr.next;
        ++count;
      }
    }
  }

  set(idx, val){
    if(this.head){
      const curr = this.get(idx);
      if(curr) curr.val = val;
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

console.log("set method's return value: ", myDLL.set(2, 9999), '\n\n');
console.log(myDLL.print());
