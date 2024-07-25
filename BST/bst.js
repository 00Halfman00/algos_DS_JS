/*
  CREATE FUNCTION THAT WILL CREATE NODES FOR BST
*/

const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

/*
  CREATE CLASS FOR BST NAMED BST
    1. IT WILL HAVE A ROOT PROPERTY

  CREATE THE INSERT METHOD FOR BST CLASS  (ITERATION)
    1. IT WILL TAKE A VALUE AS A PARAMETER
    2. CREATE A CONST VARIABLE NAMED incoming AND ASSIGN IT THE RETURN VALUE OF CALLING new Node(val).
    3. CHECK TO SEE IF A ROOT NODE EXIST FOR THE ROOT PROPERY OF THE CLASS INSTANCE.
    4. IF IT DOES HAVE A ROOT PROPERTY VALUE
       A. CREATE A REASSIGNABLE VARIABLE NAMED curr WITH THE VALUE OF THE ROOT NODE
       B. LOOP OVER curr WHILE IT IS NOT NULL OR LOOP WHILE TRUE
       C. IF inoming.val IS LESS THAN curr.val
          I. CHECK TO SEE IF curr.left IS NULL
              a. ASSIGN incoming TO BE THE VALUE OF curr.left;
              b. break the loop
       D. IF incoming.val IS GREATER THAN CURR.VAL
          I. CHECK TO SEE IF curr.right is NULL
             a. ASSIGN incoming TO BE THE VALUE OF curr.right;
             b. break the loop
    5. IF THE BST CLASS INSTANCE DOES NOT HAVE A ROOT PROPERY VALUE
       A. ASSIGN incoming TO BE THE VALUE OF THE ROOT PROPERY'S CLASS INSTANCE
    6. RETURN THIS

    TIME COMPLEXITY: O(LOG N)
    SPACE COMPLEXITY: O(1)


  CREATE THE INSERT METHOD FOR BST CLASS  (RECURSION)
    1. IT WILL TAKE A VALUE AND ROOT/NODE AS ITS PARAMETERS
    2. IF ROOT/NODE IS NOT NULL
      A. CHECK IF VALUE IS LESS THAN ROOT/NODE'S VALUE
          I. IF SO, CHECK TO SEE IF ROOT/NODE HAS A LEFT NODE
            a. IF SO, RECURSE WITH THE ARGUMENTS val AND node=node.left
            b. IF NOT, ASSIGN THE RETURN VALUE OF CALLING new Node(val) TO BE THE VALUE OF node.left
      B. CHECK IF VALUE IS GREATER THAN ROOT/NODE'S VALUE
          I. IF SO, CHECK TO SEE IF ROOT/NODE HAS A RIGHT NODE
            a. IF SO, RECURSE WITH ARGUMENTS val AND node=node.right
            b. IF NOT, ASSIGN THE RETURN VALUE OF CALLING new Node(val) TO BE THE VALUE OF node.right
    3. ELSE (CASE WHERE ROOT IS EMPTY)
      A. ASSIGN THE RETURN VALUE OF CALLING new Node(val) AS THE VALUE OF ROOT
    4. RETURN THIS

    TIME COMPLEXITY: O(LOG N)
    SPACE COMPLEXITY: O(1)

  CREATE THE FIND METHOD FOR BST CLASS
    1. IN ALL THREE VERSIONS OF FIND, KEEP SEARCHING WHILE NODE IS NOT NULL
    2. IF val < node.val, SEARCH TO THE LEFT
    3. If val > node.val, SEARCH TO THE RIGHT
    4. RETURN THE TARGET NODE OR UNDEFINED/NULL

    TIME COMPLEXITY: O(LOG N)
    SPACE COMPLEXITY: O(1)

*/

const BST = class {
  constructor() {
    this.root = null;
  }
  ///////////////////////////////  INSERT ITERATION  /////////////////////
  insert(val) {
    const incoming = new Node(val);
    if (this.root) {
      let curr = this.root;
      while (curr) {
        if (val === curr.val) break;
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = incoming;
            break;
          } else curr = curr.left;
        }
        if (val > curr.val) {
          if (!curr.right) {
            curr.right = incoming;
            break;
          } else curr = curr.right;
        }
      }
    } else {
      this.root = incoming;
    }
    return this;
  }

  /////////////////////////  INSERT RECURSIVE  ///////////////////////
  insertRec(val, node = this.root) {
    if (node) {
      // if(val === node.val) return null; // this line is not needed
      if (val < node.val) {
        if (!node.left) node.left = new Node(val);
        else this.insertRec(val, (node = node.left));
      }
      if (val > node.val) {
        if (!node.right) node.right = new Node(val);
        else this.insertRec(val, (node = node.right));
      }
    } else this.root = new Node(val);
    return this;
  }

  ////////////////////////// ITERATION  //////////////////////////////////
  find(val) {
    if (this.root) {
      let curr = this.root;
      while (curr) {
        if (val === curr.val) return curr;
        if (val < curr.val) curr = curr.left;
        else curr = curr.right;
      }
    }
  }
  /////////////////////////  RECURSION V1  /////////////////////////////
  // THIS VERSION MIGHT BE USEFUL IF YOU WANTED TO RETURN MORE THAN THE TARGET NODE, LIKE META DATA: PATH, PATH COUNT, ETC...
  findRecV1(val, node = this.root, target = []) {
    // a value within an object type will survive the call stack
    if (node) {
      if (val === node.val) {
        target[0] = node;
        node = null;
      } else {
        if (node && val < node.val)
          this.findRecV1(val, (node = node.left), target);
        if (node && val > node.val)
          this.findRecV1(val, (node = node.right), target);
      }
    }
    return target[0];
  }
  //////////////////////////  RECURSION V2  ///////////////////////////////
  // THIS VERSION IS JUST EFFECTIVE AT RETURNING THE TARGET NODE
  findRecV2(val, node = this.root) {
    if (node) {
      if (val === node.val) {
        return node;
      } else {
        if (node && val < node.val)
          return this.findRecV2(val, (node = node.left));
        if (node && val > node.val)
          return this.findRecV2(val, (node = node.right));
      }
    }
    return node;
  }
  //////////////////////////////  ITERATION ////////////////////////////////
  traverseBFS() {
    const queue = [this.root],
      res = [];
    let curr;
    while (queue[0]) {
      curr = queue.shift();
      res[res.length] = curr.val;
      if (curr.left) queue[queue.length] = curr.left;
      if (curr.right) queue[queue.length] = curr.right;
    }
    return res;
  }

  /////////////////////////////  ITERATION ////////////////////////////////
  inorderDFSv1() {
    const stack = [],
      res = [];
    let node = this.root;

    while (stack[0] || node) {
      while (node) {
        stack[stack.length] = node;
        node = node.left;
      }

      node = stack.pop();
      res[res.length] = node.val;
      node = node.right;
    }
    return res;
  }

  ///////////////////////// RECURSION  ///////////////////////////////////
  inorderDFSv2() {
    const res = [];
    const dFS = (node) => {
      if (node) {
        if (node.left) dFS(node.left);
        res[res.length] = node.val;
        if (node.right) dFS(node.right);
      }
    };
    dFS(this.root);
    return res;
  }

  /////////////////////////////  ITERATION /////////////////////////////////
  preorderDFSv1() {
    if (this.root) {
      const stack = [this.root],
        res = [];
      let node;
      while (stack[0]) {
        node = stack.pop();
        res[res.length] = node.val;
        if (node.right) stack[stack.length] = node.right;
        if (node.left) stack[stack.length] = node.left;
      }
      return res;
    }
  }

  ///////////////////////// RECURSION  //////////////////////////////////////
  preorderDFSv2() {
    const res = [];
    const dFS = (node) => {
      if (node) {
        res[res.length] = node.val;
        if (node.left) dFS(node.left);
        if (node.right) dFS(node.right);
      }
    };
    dFS(this.root);
    return res;
  }

  /////////////////////////////  ITERATION //////////////////////////////////

  postorderDFSv1() {
    if (this.root) {
      const stack1 = [this.root],
        stack2 = [],
        res = [];
      let node;

      while (stack1[0]) {
        node = stack1.pop();
        stack2[stack2.length] = node;
        if (node.left) stack1[stack1.length] = node.left;
        if (node.right) stack1[stack1.length] = node.right;
      }

      while (stack2[0]) {
        node = stack2.pop();
        res[res.length] = node.val;
      }

      return res;
    }
  }

  ///////////////////////// RECURSION  //////////////////////////////////////
  postorderDFSv2() {
    const res = [];
    const dFS = (node) => {
      if (node) {
        if (node.left) dFS(node.left);
        if (node.right) dFS(node.right);
        res[res.length] = node.val;
      }
    };
    dFS(this.root);
    return res;
  }
};

const myBST = new BST();

// myBST.insert(20);
// myBST.insert(10);
// myBST.insert(7);
// myBST.insert(10);
// myBST.insert(15);
// myBST.insert(12);

myBST.insertRec(10);
myBST.insertRec(6);
myBST.insertRec(15);
myBST.insertRec(3);
myBST.insertRec(8);
myBST.insertRec(20);
// myBST.insertRec(8);
// myBST.insertRec(25);
// myBST.insertRec(45);

// console.log('myBST: ', myBST);
//console.log("find method's return value: ", myBST.findRecV2(3)); // should return undefined

//console.log("traverseBFS' return value: ", myBST.traverseBFS()); // [10, 6, 15, 3, 8, 20]
//console.log("inorderDFSv1's return value: ", myBST.inorderDFSv1()); // [3, 6, 8, 10, 15, 20]
//console.log("inorderDFSv2's return value: ", myBST.inorderDFSv2()); // [3, 6, 8, 10, 15, 20]
//console.log("preorderDFS's return value: ", myBST.preorderDFSv1()); // [10, 6, 3, 8, 15, 20]
//console.log("preorderDFS's return value: ", myBST.preorderDFSv2()); // [10, 6, 3, 8, 15, 20]
console.log("postorderDFS's return value: ", myBST.postorderDFSv1()); // [3, 8, 6, 20, 15, 10]
console.log("postorderDFS's return value: ", myBST.postorderDFSv2()); // [3, 8, 6, 20, 15, 10]
