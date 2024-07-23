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
  //////////////////////////////////////////////////  RECURSION V1  /////////////////////////////
  // THIS VERSION MIGHT BE USEFUL IF YOU WANTED TO RETURN MORE THAN THE TARGET NODE, LIKE META DATA: PATH, PATH COUNT, ETC...
  findRecV1(val, node = this.root, target = []) {
    // a value within an object type will survive the call stack
    if (node) {
      if (val === node.val) {
        target[0] = node;
        node = null;
      } else {
        if (node && val < node.val) this.findRecV1(val, (node = node.left), target);
        if (node && val > node.val) this.findRecV1(val, (node = node.right), target);
      }
    }
    return target[0];
  }
 //////////////////////////////////////////////////  RECURSION V2  ///////////////////////////////
 // THIS VERSION IS JUST EFFECTIVE AT RETURNING THE TARGET NODE
  findRecV2(val, node = this.root) {
    if (node) {
      if (val === node.val) {
        return node;
      } else {
        if (node && val < node.val) return this.findRecV2(val, (node = node.left));
        if (node && val > node.val)  return this.findRecV2(val, (node = node.right));
      }
    }
    return node;
  }
};

const myBST = new BST();

// myBST.insert(20);
// myBST.insert(10);
// myBST.insert(7);
// myBST.insert(10);
// myBST.insert(15);
// myBST.insert(12);

myBST.insertRec(20);
myBST.insertRec(10);
myBST.insertRec(7);
myBST.insertRec(10);
myBST.insertRec(15);
myBST.insertRec(12);
myBST.insertRec(12);
myBST.insertRec(8);
myBST.insertRec(25);
myBST.insertRec(45);

// console.log('myBST: ', myBST);
console.log("find method's return value: ", myBST.findRec(8)); // should return undefined
