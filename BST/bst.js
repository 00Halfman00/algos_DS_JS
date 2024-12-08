/*
  CREATE FUNCTION THAT WILL CREATE NODES FOR BST
*/

// const Node = function (val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// };

// /*
//   CREATE CLASS FOR BST NAMED BST
//     1. IT WILL HAVE A ROOT PROPERTY

//   CREATE THE INSERT METHOD FOR BST CLASS  (ITERATION)
//     1. IT WILL TAKE A VALUE AS A PARAMETER
//     2. CREATE A CONST VARIABLE NAMED incoming AND ASSIGN IT THE RETURN VALUE OF CALLING new Node(val).
//     3. CHECK TO SEE IF A ROOT NODE EXIST FOR THE ROOT PROPERY OF THE CLASS INSTANCE.
//     4. IF IT DOES HAVE A ROOT PROPERTY VALUE
//        A. CREATE A REASSIGNABLE VARIABLE NAMED curr WITH THE VALUE OF THE ROOT NODE
//        B. LOOP OVER curr WHILE IT IS NOT NULL OR LOOP WHILE TRUE
//        C. IF inoming.val IS LESS THAN curr.val
//           I. CHECK TO SEE IF curr.left IS NULL
//               a. ASSIGN incoming TO BE THE VALUE OF curr.left;
//               b. break the loop
//        D. IF incoming.val IS GREATER THAN CURR.VAL
//           I. CHECK TO SEE IF curr.right is NULL
//              a. ASSIGN incoming TO BE THE VALUE OF curr.right;
//              b. break the loop
//     5. IF THE BST CLASS INSTANCE DOES NOT HAVE A ROOT PROPERY VALUE
//        A. ASSIGN incoming TO BE THE VALUE OF THE ROOT PROPERY'S CLASS INSTANCE
//     6. RETURN THIS

//     TIME COMPLEXITY: O(LOG N)
//     SPACE COMPLEXITY: O(1)

//   CREATE THE INSERT METHOD FOR BST CLASS  (RECURSION)
//     1. IT WILL TAKE A VALUE AND ROOT/NODE AS ITS PARAMETERS
//     2. IF ROOT/NODE IS NOT NULL
//       A. CHECK IF VALUE IS LESS THAN ROOT/NODE'S VALUE
//           I. IF SO, CHECK TO SEE IF ROOT/NODE HAS A LEFT NODE
//             a. IF SO, RECURSE WITH THE ARGUMENTS val AND node=node.left
//             b. IF NOT, ASSIGN THE RETURN VALUE OF CALLING new Node(val) TO BE THE VALUE OF node.left
//       B. CHECK IF VALUE IS GREATER THAN ROOT/NODE'S VALUE
//           I. IF SO, CHECK TO SEE IF ROOT/NODE HAS A RIGHT NODE
//             a. IF SO, RECURSE WITH ARGUMENTS val AND node=node.right
//             b. IF NOT, ASSIGN THE RETURN VALUE OF CALLING new Node(val) TO BE THE VALUE OF node.right
//     3. ELSE (CASE WHERE ROOT IS EMPTY)
//       A. ASSIGN THE RETURN VALUE OF CALLING new Node(val) AS THE VALUE OF ROOT
//     4. RETURN THIS

//     TIME COMPLEXITY: O(LOG N)
//     SPACE COMPLEXITY: O(1)

//   CREATE THE FIND METHOD FOR BST CLASS
//     1. IN ALL THREE VERSIONS OF FIND, KEEP SEARCHING WHILE NODE IS NOT NULL
//     2. IF val < node.val, SEARCH TO THE LEFT
//     3. If val > node.val, SEARCH TO THE RIGHT
//     4. RETURN THE TARGET NODE OR UNDEFINED/NULL

//     TIME COMPLEXITY: O(LOG N)
//     SPACE COMPLEXITY: O(1)

// */

// const BST = class {
//   constructor() {
//     this.root = null;
//   }
//   ///////////////////////////////  INSERT ITERATION  /////////////////////
//   insert(val) {
//     const incoming = new Node(val);
//     if (this.root) {
//       let curr = this.root;
//       while (curr) {
//         if (val === curr.val) break;
//         if (val < curr.val) {
//           if (!curr.left) {
//             curr.left = incoming;
//             break;
//           } else curr = curr.left;
//         }
//         if (val > curr.val) {
//           if (!curr.right) {
//             curr.right = incoming;
//             break;
//           } else curr = curr.right;
//         }
//       }
//     } else {
//       this.root = incoming;
//     }
//     return this;
//   }

//   /////////////////////////  INSERT RECURSIVE  ///////////////////////
//   insertRec(val, node = this.root) {
//     if (node) {
//       // if(val === node.val) return null; // this line is not needed
//       if (val < node.val) {
//         if (!node.left) node.left = new Node(val);
//         else this.insertRec(val, (node = node.left));
//       }
//       if (val > node.val) {
//         if (!node.right) node.right = new Node(val);
//         else this.insertRec(val, (node = node.right));
//       }
//     } else this.root = new Node(val);
//     return this;
//   }

//   ////////////////////////// ITERATION  //////////////////////////////////
//   find(val) {
//     if (this.root) {
//       let curr = this.root;
//       while (curr) {
//         if (val === curr.val) return curr;
//         if (val < curr.val) curr = curr.left;
//         else curr = curr.right;
//       }
//     }
//   }
//   /////////////////////////  RECURSION V1  /////////////////////////////
//   // THIS VERSION MIGHT BE USEFUL IF YOU WANTED TO RETURN MORE THAN THE TARGET NODE, LIKE META DATA: PATH, PATH COUNT, ETC...
//   findRecV1(val, node = this.root, target = []) {
//     // a value within an object type will survive the call stack
//     if (node) {
//       if (val === node.val) {
//         target[0] = node;
//         node = null;
//       } else {
//         if (node && val < node.val)
//           this.findRecV1(val, (node = node.left), target);
//         if (node && val > node.val)
//           this.findRecV1(val, (node = node.right), target);
//       }
//     }
//     return target[0];
//   }
//   //////////////////////////  RECURSION V2  ///////////////////////////////
//   // THIS VERSION IS JUST EFFECTIVE AT RETURNING THE TARGET NODE
//   findRecV2(val, node = this.root) {
//     if (node) {
//       if (val === node.val) {
//         return node;
//       } else {
//         if (node && val < node.val)
//           return this.findRecV2(val, (node = node.left));
//         if (node && val > node.val)
//           return this.findRecV2(val, (node = node.right));
//       }
//     }
//     return node;
//   }
//   //////////////////////////////  ITERATION ////////////////////////////////
//   traverseBFS() {
//     const queue = [this.root],
//       res = [];
//     let curr;
//     while (queue[0]) {
//       curr = queue.shift();
//       res[res.length] = curr.val;
//       if (curr.left) queue[queue.length] = curr.left;
//       if (curr.right) queue[queue.length] = curr.right;
//     }
//     return res;
//   }

//   /////////////////////////////  ITERATION ////////////////////////////////
//   inorderDFSv1() {
//     const stack = [],
//       res = [];
//     let node = this.root;

//     while (stack[0]  || node) {
//       while (node) {
//         stack[stack.length] = node;
//         node = node.left;
//       }

//       node = stack.pop();
//       res[res.length] = node.val;
//       node = node.  right;
//     }
//     return res;
//   }

//   ///////////////////////// RECURSION  ///////////////////////////////////
//   inorderDFSv2() {
//     const res = [];
//     const dFS = (node) => {
//       if (node) {
//         if (node.left) dFS(node.left);
//         res[res.length] = node.val;
//         if (node.right) dFS(node.right);
//       }
//     };
//     dFS(this.root);
//     return res;
//   }

//   /////////////////////////////  ITERATION /////////////////////////////////
//   preorderDFSv1() {
//     if (this.root) {
//       const stack = [this.root],
//         res = [];
//       let node;
//       while (stack[0]) {
//         node = stack.pop();
//         res[res.length] = node.val;
//         if (node.right) stack[stack.length] = node.right;
//         if (node.left) stack[stack.length] = node.left;
//       }
//       return res;
//     }
//   }

//   ///////////////////////// RECURSION  //////////////////////////////////////
//   preorderDFSv2() {
//     const res = [];
//     const dFS = (node) => {
//       if (node) {
//         res[res.length] = node.val;
//         if (node.left) dFS(node.left);
//         if (node.right) dFS(node.right);
//       }
//     };
//     dFS(this.root);
//     return res;
//   }

//   /////////////////////////////  ITERATION //////////////////////////////////

//   postorderDFSv1() {
//     if (this.root) {
//       const stack1 = [this.root],
//         stack2 = [],
//         res = [];
//       let node;

//       while (stack1[0]) {
//         node = stack1.pop();
//         stack2[stack2.length] = node;
//         if (node.left) stack1[stack1.length] = node.left;
//         if (node.right) stack1[stack1.length] = node.right;
//       }

//       while (stack2[0]) {
//         node = stack2.pop();
//         res[res.length] = node.val;
//       }

//       return res;
//     }
//   }

//   ///////////////////////// RECURSION  //////////////////////////////////////
//   postorderDFSv2() {
//     const res = [];
//     const dFS = (node) => {
//       if (node) {
//         if (node.left) dFS(node.left);
//         if (node.right) dFS(node.right);
//         res[res.length] = node.val;
//       }
//     };
//     dFS(this.root);
//     return res;
//   }
// };

// const myBST = new BST();

// myBST.insertI(10);
// myBST.insertI(6);
// myBST.insertI(15);
// myBST.insertI(3);
// myBST.insertI(8);
// myBST.insertI(20);

// myBST.insert(10);
// myBST.insert(6);
// myBST.insert(15);
// myBST.insert(3);
// myBST.insert(8);
// myBST.insert(20);

// myBST.insertRec(10);
// myBST.insertRec(6);
// myBST.insertRec(15);
// myBST.insertRec(3);
// myBST.insertRec(8);
// myBST.insertRec(20);
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
//console.log("postorderDFS's return value: ", myBST.postorderDFSv1()); // [3, 8, 6, 20, 15, 10]

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// PRACTICE PRACTICE PRACTICE /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  0. CREATE A FUNCTION TO CREATE NODES FOR BST CLASS NAMED Node                              // O(1)
  1. CREATE A BINARY SEARCH TREE CLASS NAMED BST                                             // O(1)
  2. CREATE A METHOD TO INSERT NODES, ITERATIVELY, NAMED insertI                             // O(log n)
  3. CREATE A METHOD TO INSERT NODES, RECURSIVELY, NAMED insertR                             // O(log n)
  4. CREATE A METHOD TO FIND A NODE, ITERATIVELY, GIVEN A VALUE NAMED findI                  // O(log n)
  5. CREATE A METHOD TO FIND A NODE, RECURSIVELY, GIVEN A VALUE NAMED findR                  // O(log n)
  6. CREATE A METHOD TO TRAVERSE THE BST VIA BFS NAMEDD bFS                                  // O(n)
  7. CREATE A METHOD TO TRAVERSE THE BST VIA DFS, RECURSIVELY, NAMED indorderR               // O(n)
  8. CREATE A METHOD TO TRAVERSE THE BST VIA DFS, ITERATIVELY, NAMED inorderI                // O(n)
  9. CREATE A METHOD TO TRAVERSE THE BST VIA DFS, RECURSIVELY, NAMED preorderR               // O(n)
  10.CREATE A METHOD TO TRAVERSE THE BST VIA DFS, ITERATIVELY, NAMED preorderI               // O(n)
  11.CREATE A METHOD TO TRAVERSE THE BST VIA DFS, RECURSIVELY, NAMED postorderR              // O(n)
  12.CREATE A METHOD TO TRAVERSE THE BST VIA DFS, ITERATIVELY, NAMED postorderI
*/

const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const BST = class {
  constructor() {
    this.root = null;
  }

  insertI(val) {
    const incoming = new Node(val);
    if (this.root && val) {
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

  insertR(val) {
    const incoming = new Node(val);
    if (this.root && val) {
      const insert = (curr) => {
        if (curr) {
          if (val < curr.val) {
            if (!curr.left) curr.left = incoming;
            else insert(curr.left);
          }
          if (val > curr.val) {
            if (!curr.right) curr.right = incoming;
            else insert(curr.right);
          }
        }
      };
      insert(this.root);
    } else this.root = incoming;
    return this;
  }

  findI(val) {
    if (this.root && val) {
      let curr = this.root;
      while (curr) {
        if (val === curr.val) return curr;
        if (val < curr.val) curr = curr.left;
        else curr = curr.right;
      }
    }
    // if code reaches this point undefined will be returned by default
  }

  findR(val) {
    if (this.root && val) {
      const find = (node) => {
        if (node) {
          if (val === node.val) return node;
          if (val < node.val) return find(node.left);
          if (val > node.val) return find(node.right);
        }
      };
      return find(this.root);
    }
    // if code reaches this point undefined will be returned by default
  }

  bFS() {
    if (this.root) {
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
    // if code reaches this point undefined will be returned by default
  }

  bFSR(node, level, result = []) {
    if (!node) return;

    if (!result[level]) {
      result[level] = [];
    }

    result[level].push(node.val);

    this.bFSR(node.left, level + 1, result);
    this.bFSR(node.right, level + 1, result);

    return [].concat(...result);
  }

  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// DFS BELOW THIS LINE ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  inorderR() {
    const res = [];
    if (this.root) {
      const inorder = (node) => {
        if (node.left) inorder(node.left);
        res[res.length] = node.val;
        if (node.right) inorder(node.right);
      };
      inorder(this.root);
    }
    return res;
  }

  inorderI() {
    const res = [];
    if (this.root) {
      const stack = [];
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
    }
    return res;
  }

  preorderR() {
    const res = [];
    if (this.root) {
      const preorder = (node) => {
        if (node) {
          res[res.length] = node.val;
          if (node.left) preorder(node.left);
          if (node.right) preorder(node.right);
        }
      };
      preorder(this.root);
    }
    return res;
  }

  preorderI() {
    const res = [];
    if (this.root) {
      const stack = [this.root];
      let node;
      while (stack[0]) {
        // [10]  //  [15, 6]  // [15, 8, 3]  // [15, 8]
        node = stack.pop(); //  10   // 6  //  3  //  8
        res[res.length] = node.val; // [10]  // [10, 6]  // [10, 6, 3]  // [10, 6, 3, 8]
        if (node.right) stack[stack.length] = node.right; // [15]  // [15, 8]  // [15, 8]  // [15]
        if (node.left) stack[stack.length] = node.left; // [15, 6]  //  [15, 8, 3]  // [15, 8]  // [15]
      }
    }
    return res;
  }

  postorderR() {
    const res = [];
    if (this.root) {
      const postorder = (node) => {
        if (node) {
          if (node.left) postorder(node.left);
          if (node.right) postorder(node.right);
          res[res.length] = node.val;
        }
      };
      postorder(this.root);
    }
    return res;
  }

  postorderI() {
    const res = [];

    if (this.root) {
      const stack1 = [this.root],
        stack2 = [];
      let node;

      while (stack1[0]) {
        // [10]  // [6, 15]  // [6, 20]  // [6] // [6, 3, 8]  // [3]
        node = stack1.pop(); // 10  //  15  //  20  // 6  // 8  // 3
        stack2[stack2.length] = node; // [10]  // [10, 15]  // [10, 15, 20]  // [10, 15, 20, 6]  // [10, 15, 20, 6, 8]  // [10, 15, 20, 6, 8, 3]
        if (node.left) stack1[stack1.length] = node.left; // [6] // [6]  // [6]  // [3]  // [ 3]
        if (node.right) stack1[stack1.length] = node.right; // [6, 15]  // [6, 20]  // [6]  // [3, 8]  // [ 3]
      }

      while (stack2[0]) {
        node = stack2.pop();
        res[res.length] = node.val;
      }
    }

    return res;
  }
};

const myBST = new BST();

// myBST.insertI(10);
// myBST.insertI(6);
// myBST.insertI(15);
// myBST.insertI(3);
// myBST.insertI(8);
// myBST.insertI(20);

myBST.insertR(10);
myBST.insertR(6);
myBST.insertR(15);
myBST.insertR(3);
myBST.insertR(8);
myBST.insertR(20);

// console.log(myBST.root)

// console.log("findI method's return value: ", myBST.findI(6));
// console.log("findR method's return value: ", myBST.findR(5));
// console.log('bfs method\'s return value: ', myBST.bFS())
// console.log("inorderR method's return value: ", myBST.inorderR());
// console.log("inorderI method's return value: ", myBST.inorderI());
// console.log("preorderR method's return value: ", myBST.preorderR());
// console.log("preorderI method's return value: ", myBST.preorderI());
// console.log("postorderR method's return value: ", myBST.postorderR());
console.log("postorderI method's return value: ", myBST.postorderI());
console.log(myBST.root.val);
// console.log('bFSR method:  ', myBST.bFSR(myBST.root, 0));
