/*
  1.  Create Node function/class to provide nodes for the BST class
  2.  Node class will have a value property to carry payload; a left
      property to point to a left child node; and a right prperty to
      point to a right child node.
*/

const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

/*
  1.  Create a BST class to house binary search tree data structure.
  2.  The class will have a root propery that will point to the root of
      the binary search tree.
*/

const BST = class {
  constructor() {
    this.root = null;
  }

  /*
    insertIterate
    1.  IF ARGUMENT IS VALID
        2.  create a new node
    3.  IF THRE IS ATLEAST ONE NODE IN BST
        4.  Cretea a variable, call it tmp_node, and assign it the value of the root node
        5.  Loop while tmp_node is not null
            6.    If value passed in is smaller than tmp_node's value,
                  7.    If tmp_node does not have a left property
                        8.    Place accordingly and break
                  9.    Else assign tmp_node to be its left property
            10.   Else value passed in must be be larger than tmp_node's value
                  11.   If tmp_node does not have a right propery
                        12.   Place accordingly and break
                  13.   Else assign tmp_node to be its right property
    14. ELSE BST IS EMPTY
        15. Make incoming node the root node
    4.  RETURN SELF
  */

  insertIterate(val) {
    if (typeof val === 'number') {
      const incomongNode = new Node(val);
      if (this.root) {
        let tmp = this.root;
        while (tmp) {
          if (val < tmp.val) {
            if (!tmp.left) {
              tmp.left = incomongNode;
              break;
            } else {
              tmp = tmp.left;
            }
          } else {
            if (!tmp.right) {
              tmp.right = incomongNode;
              break;
            } else {
              tmp = tmp.right;
            }
          }
        }
      } else {
        this.root = incomongNode;
      }
    }
    return this;
  }

  /*
    insertRecurse
    1.  IF VALID ARGUMENT IS PASSED IN
    2.  create an incoming node
    3.  IF THERE IS A ROOT
        4.    create a helper function to recurse that will take two arguments: a current
              node and an incoming node.
              5.  If incoming node's value is less than current node's value
                  1b.   if current node does not have a left property
                        a1.   make incoming node the left property
                  2b.   else call helper function with current node's left property and incoming node
              b.  if incoming node's value is greater than current node's value
                  1c.   if current node does not have a right proptery
                        a1.   make incoming node the right property
                  2c.   else call helper function with paren node's right property and incoming node
    3.  INVOKE HELPER FUNCTION
    4.  RETURN SELF
  */

  insertRecurse(val) {
    if (typeof val === 'number') {
      const incomongNode = new Node(val);
      if (this.root) {
        const recurse = (curr, node) => {
          if (val < curr.val) {
            if (!curr.left) curr.left = node;
            else recurse(curr.left, node);
          }
          if (val > curr.val) {
            if (!curr.right) curr.right = node;
            else recurse(curr.right, node);
          }
        };
        recurse(this.root, incomongNode);
      } else {
        this.root = incomongNode;
      }
      return this;
    }
  }

  /*
    findIterate
    1.  IF A VALID ARGUMENT IS PASSED IN
        2.  if there is at least a single node in bst
            3.  create a variable named tmp and assign it the root node's value
            4.  iterate while current node is not None
                5.  if value is the same as tmp's value
                    6.  assgin tmp to foundNode
                    7.  break while loop
                8.  if value is smaller than current node's value
                    9.  assign the current node to be the current node's left property
                10. if value is greater than current nodes's value
                    11. assign the current node to be the current node's right property
    12.  RETURN foundNode
  */

  findIterate(val) {
    if (typeof val === 'number') {
      if (this.root) {
        let tmp = this.root,
          foundNode;
        while (tmp) {
          if (tmp.val === val) {
            foundNode = tmp;
            break;
          }
          if (val < tmp.val) {
            tmp = tmp.left;
          } else if (val > tmp.val) {
            tmp = tmp.right;
          }
        }
        return foundNode;
      }
    }
  }

  findRecurse(val) {
    if (typeof val === 'number') {
      if (this.root) {
        let foundNode;
        const recurse = (node) => {
          if (!node) return;
          if (node.val === val) foundNode = node;
          else if (val < node.val) recurse(node.left);
          else if (val > node.val) recurse(node.right);
        };
        recurse(this.root);
        return foundNode;
      }
    }
  }

  /*
    iterateBFS
    1.  CREATE VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BINARY SEARCH TREE
        3.  Create a queue ( FIFO ) and initiate it to be an array with the root node in it
        4.  Create a variable named tmp_node and initiate if to be None
        5.  Iterate while the queue has something in it
              6.    Remove the first node in the queue and assign it to the variable named tmp_node
              7.    Append the value of tmp_node to the results list
              8.    If tmp_node has a left node
                    9.  Add the value of tmp_node's left property to the end of the queue
              10.   If tmp_node has a right node
                    11. Add the value of tmp_node's right property to the end of the queue.
    12. RETURN results
  */

  iterateBFS() {
    const response = [];
    if (this.root) {
      const queue = [this.root];
      let tmp;
      while (queue[0]) {
        tmp = queue.shift();
        response[response.length] = tmp.val;
        if (tmp.left) queue[queue.length] = tmp.left;
        if (tmp.right) queue[queue.length] = tmp.right;
      }
    }
    return response;
  }

  /*
    1.  Create a variable named respoonse and inititate it as an empty array
    2.  If there is atleast one node in the BST
        3.    Create a variable named response and assign it an empty a
        II.   create helper function to recurse with that takes a node and an integer as level
              a.    if level is greater or the same as the length of the response list, append
                    an empty list to response
              b.    append the node's value to the list at index level of the response list
              c.    if node has a left property
                    1c.   call helper function with node's left property and level + 1
              d.    if node has a right property
                    1d.   call helper funtion with node's right property and level + 1
        III.  invoke a call to helper function, passing in the root node and zero
        IV.  iterate over response
              a.    for each list in response, extend list to results
    3.  RETURN results
  */

  recurseBFS() {
    const results = [];
    if (this.root) {
      const response = [];
      const recurse = (node, level = 0) => {
        if (!node) return;
        if (!response[level]) response[level] = [];
        response[level].push(node.val);
        if (node.left) recurse(node.left, level + 1);
        if (node.right) recurse(node.right, level + 1);
      };
      recurse(this.root);
      return [].concat(...response);
    }
    return results;
  }

  printer() {
    const tmp = this.root;
    console.log(tmp);
  }
};

const myBST = new BST();

// myBST.insertIterate(10);
// myBST.insertIterate(6);
// myBST.insertIterate(15);
// myBST.insertIterate(3);
// myBST.insertIterate(8);
// myBST.insertIterate(20);

myBST.insertRecurse(10);
myBST.insertRecurse(6);
myBST.insertRecurse(15);
myBST.insertRecurse(3);
myBST.insertRecurse(8);
myBST.insertRecurse(20);

// console.log(myBST.findRecurse(20));
console.log(myBST.recurseBFS(myBST.root));

// myBST.printer();
