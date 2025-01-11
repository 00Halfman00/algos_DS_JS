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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////            add node to BST by value                  //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  /*
    insertIterate
    1.  If the argument is valid
        2.  Create a new node, call it incomingNode
        3.  If there is atleast one node in BST
            4.  Cretea a variable, call it tmpNode, and assign it the value of the root node
            5.  Loop while tmp is not null
                6.    If value passed in is smaller than tmp's value,
                      7.    If tmp does not have a left property
                            8.    Place accordingly and break
                      9.    Else assign tmp to be its left property
                10.   Else value passed in must be be larger than tmp's value
                      11.   If tmp does not have a right propery
                            12.   Place accordingly and break
                      13.   Else assign tmp_node to be its right property
        14. Else BST is empty
            15. Make incomingNode the root node
        4.  Return this
  */

  insertIterate(val) {
    if (typeof val === 'number') {
      const incomingNode = new Node(val);
      if (this.root) {
        let tmp = this.root;
        while (tmp) {
          if (val < tmp.val) {
            if (!tmp.left) {
              tmp.left = incomingNode;
              break;
            } else {
              tmp = tmp.left;
            }
          } else {
            if (!tmp.right) {
              tmp.right = incomingNode;
              break;
            } else {
              tmp = tmp.right;
            }
          }
        }
      } else {
        this.root = incomingNode;
      }
    }
    return this;
  }

  /*
    insertRecurse
    1.  If the argument is valid
    2.  Create a new Node, using the argument passed into method, call it incomingNode
    3.  If there is a root
        4.    Create a helper function to recurse that will take two arguments: a current
              node with thge value of the root node and an incoming node.
              5.  If incoming node's value is less than current node's value
                  6.    If current node does not have a left property
                        7.    Make incoming node its left property
                  8.    Else call the helper function with current node's left property and incoming node
              9.  If incoming node's value is greater than current node's value
                  10.   If current node does not have a right proptery
                        11.   Make incoming node its right property
                  12.   Else call the helper function with current node's right property and incoming node
    3.  Invoke helperfunction, passing in the root node and incominNode
    4.  Return this
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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////            find node in BST by value                  /////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  /*
    findIterate
    1.  If the argument passed in is valid
        2.  If there is at least a single node in BST
            3.  Create a variable named tmp and assign it the root node
            4.  Iterate while current node is truthy
                5.  If the value passed in is the same as tmp's value
                    6.    Assgin tmp to foundNode
                    7.    Break out of while loop
                8.  If value is smaller than the current node's value
                    9.    Assign the current node to be its left property
                10. If value is greater than current nodes's value
                    11.   Assign the current node to be its right property
    12.  Return foundNode
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

  /*
    findRecurse
    1.  If the argument passed in is valid
        2.  If there is at least a single node in BST
            3.  Create a variable named foundNode
            4.  Create a helper function to recuse with that takes a node
                5.  If node is falsy, return
                6.  If node's value equals the value passed in to method, assign it to foundNode
                7.  Else if value passed in is less than node's value, recurse, passing in node's left node
                8.  Else if value pass in is greater than node's value, recurse, passing in node's right node
            9.  Invoke helper function, passing in the root node
    10.  Return foundNode
  */

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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////            BFS                  ///////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  /*
    iterateBFS
    1.  Visit all nodes on the same level before visiting nodes in the next level
  */

  iterateBFS() {
    const results = [];
    if (this.root) {
      const queue = [this.root];
      let tmp;
      while (queue[0]) {
        tmp = queue.shift();
        results[results.length] = tmp.val;
        if (tmp.left) queue[queue.length] = tmp.left;
        if (tmp.right) queue[queue.length] = tmp.right;
      }
    }
    return results;
  }

  /*
    recurseBFS
    1.  Visit all nodes on the same level before visiting nodes in the next level
  */

  recurseBFS() {
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
    return [];
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////                DFS                  ///////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  /*
  preorder DFS
  1.  Visit the root node, then the left side of tree, and, finally, the right
      side of the tree.
  */

  preorderIterateDFS() {
    const results = [];
    if (this.root) {
      const stack = [this.root];
      let tmpNode;
      while (stack[0]) {
        tmpNode = stack.pop();
        results.push(tmpNode.val);
        if (tmpNode.right) stack.push(tmpNode.right);
        if (tmpNode.left) stack.push(tmpNode.left);
      }
    }
    return results;
  }

  preorderRecurseDFS() {
    const results = [];
    const recurse = (node) => {
      results.push(node.val);
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
    };
    if (this.root) recurse(this.root);
    return results;
  }

  /*
    inorder DFS
    1.  Visit the left side of the tree, then the root node, and then the right side of tree.
  */

  inorderIterateDFS() {
    const stack = [],
      results = [];
    let tmpNode = this.root;
    while (stack[0] || tmpNode) {
      while (tmpNode) {
        // go as far left as possible
        stack.push(tmpNode);
        tmpNode = tmpNode.left;
      }
      tmpNode = stack.pop();
      results.push(tmpNode.val);
      tmpNode = tmpNode.right;
    }
    return results;
  }

  inorderRecurseDFS() {
    const results = [];
    const recurse = (node) => {
      if (node.left) recurse(node.left);
      results.push(node.val);
      if (node.right) recurse(node.right);
    };
    if (this.root) recurse(this.root);
    return results;
  }

  /*
    postorder DFS
    1.  Visit the left side of the tree, then the right side, and then the root node.
  */

  postOrderIterate() {
    const results = [];
    if (this.root) {
      const stack1 = [this.root],
        stack2 = [];
      let tmpNode;
      while (stack1[0]) {
        tmpNode = stack1.pop();
        stack2.push(tmpNode);
        if (tmpNode.left) stack1.push(tmpNode.left);
        if (tmpNode.right) stack1.push(tmpNode.right);
      }

      while (stack2[0]) {
        tmpNode = stack2.pop();
        results.push(tmpNode.val);
      }
    }
    return results;
  }

  postOrderRecurse() {
    const results = [];
    const recurse = (node) => {
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
      results.push(node.val);
    };
    if (this.root) recurse(this.root);
    return results;
  }

  printer() {
    const tmp = this.root;
    console.log(tmp);
  }
};

/*
  postorder DFS
  1.  Visit the left side of the tree, then the right side of the tree, and then the root node;
*/

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
console.log(myBST.iterateBFS()); // expect:  [10, 6, 15, 3, 8, 20]
console.log(myBST.recurseBFS()); // expect:  [10, 6, 15, 3, 8, 20]
console.log(myBST.preorderIterateDFS()); // expect:   [10, 6, 3, 8, 15, 20]
console.log(myBST.preorderRecurseDFS()); // expect:   [10, 6, 3, 8, 15, 20]
console.log(myBST.inorderIterateDFS()); // expect:   [3, 6, 8, 10, 15, 20]
console.log(myBST.inorderRecurseDFS()); // expect:   [3, 6, 8, 10, 15, 20]
console.log(myBST.postOrderIterate()); // expect:  [3, 8, 6, 20, 15, 10]
console.log(myBST.postOrderRecurse()); // expect:  [3, 8, 6, 20, 15, 10]
// myBST.printer();

/*
               10
             /    \
            6      15
          /   \      \
        3      8      20
*/
