///////////////////////////////////  function to create a node class for binary tree ////////////////////////////
const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

/////////////////////////////////   class to create a binary search tree with instance methods //////////////////
const BST = class {
  constructor() {
    this.root = null;
  }
  ////////////////////////////////////// method to insert a node via iteration   ////////////////////////////////
  insertIteration(val) {
    if (val) {
      const incoming = new Node(val);
      if (this.root) {
        let tmp = this.root;
        while (tmp) {
          if (val < tmp.val) {
            if (!tmp.left) {
              tmp.left = incoming;
              break;
            } else tmp = tmp.left;
          }
          if (val > tmp.val) {
            if (!tmp.right) {
              tmp.right = incoming;
              break;
            } else tmp = tmp.right;
          }
        }
      } else {
        this.root = incoming;
      }
    }
    return this;
  }
  ////////////////////////////////////// method to insert a node via recursion  //////////////////////////////////
  insertRecursion = (val) => {
    if (val) {
      const incoming = new Node(val);

      if (this.root) {
        const insertR = (node) => {
          if (val < node.val) {
            if (!node.left) node.left = incoming;
            else node = node.left;
          }
          if (val > node.val) {
            if (!node.right) node.right = incoming;
            else node = node.right;
          }
        };
        insertR(this.root);
      } else this.root = incoming;
    }
    return this;
  };

  /////////////////////////////////   method to find a node inside the BST via iteration  ////////////////////
  findIteration = (val) => {
    if (this.root && val) {
      let tmp = this.root;
      while (tmp) {
        if (val === tmp.val) return tmp;
        if (val < tmp.val) tmp = tmp.left;
        if (val > tmp.val) tmp = tmp.right;
      }
    }
    /////////////// undefined will be returned implicitly if for some reason the sought after node is not found
  };

  /////////////////////////////////   method to find a node inside the BST via recursion  ////////////////////
  findRecurion = (val) => {
    if (this.root && val) {
      const findR = (node) => {
        if (node) {
          if (val === node.val) return node;
          if (val < node.val) return findR(node.left);
          if (val > node.val) return findR(node.right);
        }
      };
      return findR(this.root);
    }
    /////////////// undefined will be returned implicitly if for some reason the sought after node is not found
  };

  //////////////  method to retrieve all values from nodes inside BST via breath first search BFS   /////////////////
  bFS = () => {
    const res = [];
    if (this.root) {
      const queue = [this.root];
      let tmp;
      while (queue[0]) {
        tmp = queue.shift();
        res[res.length] = tmp.val;
        if (tmp.left) queue[queue.length] = tmp.left;
        if (tmp.right) queue[queue.length] = tmp.right;
      }
    }
    return res;
  };

  /////////////  method to retrievve all values from nodes inside BST via inorder iteration   /////////////////
  inorderIteration = () => {
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
  };

  /////////////   method to retrieve all values from nodes inside BST via preorder iteration  /////////////////
  preorderIteration = () => {
    const res = [];
    if (this.root) {
      const stack = [this.root];
      let curr;
      while (stack[0]) {
        curr = stack.pop();
        res[res.length] = curr.val;
        if (curr.right) stack[stack.length] = curr.right;
        if (curr.left) stack[stack.length] = curr.left;
      }
    }
    return res;
  };

  preorderRecursion = () => {
    const res = [];

    const preorderR = (node) => {
      if (node) {
        res[res.length] = node.val;
        if (node.left) preorderR(node.left);
        if (node.right) preorderR(node.right);
      }
    };
    preorderR(this.root);
    return res;
  };
};

const myBST = new BST();

myBST.insertIteration(10);
myBST.insertIteration(4);
myBST.insertIteration(2);
myBST.insertIteration(15);
myBST.insertIteration(1);
myBST.insertIteration(5);
myBST.insertIteration(20);
myBST.insertIteration(13);
myBST.insertIteration(3);

/*
						10
					/	   \
				4		    15
			 / \     /  \
		  2   5   13   20
     / \
		1		3
*/

// console.log('MY BINARY SEARCH TREE CLASS INSTANCE: ', myBST.root);

// console.log(
//   'find the value via iteration inside the BST class instance: ',
//   myBST.findIteration(15)
// );

// console.log(
//   'find the value via recursion inside the BST class instance: ',
//   myBST.findRecurion(18)
// // );
// console.log('retrieve all values from nodes in BST class instance via BFS iteration : ', myBST.bFS())

// console.log('retrieve all values from nodes in BST class instance via inorder iteration: ', myBST.inorderIteration())
// console.log(
//   'retrieve all values from nodes in BST class instance via preorder recursion: ',
//   myBST.preorderRecursion()
// );
// console.log(
//   'retrieve all values from nodes in BST class instance via preorder iteration : ',
//   myBST.preorderIteration()
// );

/*
	TASK: WRITE A FUNCTION THAT WILL TAKE A BINARY TREE AND RETURN THE TOTAL SUM
				OF ALL THE EDGES TO GET TO EACH NODE UP TO AND INCLUDING EACH LEAF NODE

	NOTE: DFS APPROACH
	1.	CREATE A FUNCTION NAMED totalEdgesFromRoot
			A. 	IT WILL TAKE A BINARY TREEE NODE AS ITS SOLE PARAMETER NAMED root
			B.	IT WILL CREATE A MUTABLE VARIABLE NAMED total	AND LEAVE IT UNASSIGNED
			C.	IT WILL CREATE A HELPER FUNCTION NAMED dfs
					I.		IT WILL TAKE A BINARY TREE NODE NAMED node AND A NUMBER NAMED num
								AS ITS PARAMETERS
					II.		IT WILL CHECK IF node HAS A LEFT PROPERTY; THAT IS, A NODE ASSIGNED TO
								ITS LEFT PROPERTY
								a.	IT WILL CALL THE dfs HELPER FUNCTION WITH THE LEFT PROPERTY OF node
										and num PLUS ONE
					III.	IT WILL CHECK IF node HAS A RIGHT PROPERTY; THAT IS, A NODE ASSIGNED TO
								ITS RIGHT PROPERTY
								a.	IT WILL CALL THE dfs HELPER FUNCTION WITH THE RIGHT PROPERTY OF node
										AND num PLUS ONE
			D.	IT WILL CALL THE dfs HELPER FUNCTION WITH THE ARGUMENTS root and 0
			E.	IT WILL RETURN THE VALUE OF THE VARIABLE total

*/

// IT WORKS BY KEEPING TRACK OF THE VALUE OF num AT EACH NODE AND WHEN IT CALLS THE LEFT OR
// RIGHT NODE/CHILD, IT ADDS ONE TO WHATEVER NUM IS AT THAT DEPTH OF THE TREE AND THEN
// ADDS THAT FIGURE TO TOTAL
const totalEdgesFromRoot = (root) => {
  let total = 0;
  const dfs = (node, num) => {
    total += num;
    if (node.left) {
      dfs(node.left, num + 1);
    }
    if (node.right) {
      dfs(node.right, num + 1);
    }
  };
  dfs(root, total);
  return total;
};

const totalEdges = (node, depth) => {
  if (!node) return 0;
  return (
    depth + totalEdges(node.left, depth + 1) + totalEdges(node.right, depth + 1)
  );
};

const numOfNodes = (root) => {
  if (root) {
    const stack = [root];
    let node,
      total = 0;
    while (stack[0]) {
      node = stack.pop();
      total += 1;
      if (node.left) stack[stack.length] = node.left;
      if (node.right) stack[stack.length] = node.right;
    }
    return total;
  }
};

console.log('total number of nodes in binary tree: ', numOfNodes(myBST.root));

/*

				find the total edges for all nodes from root node : 16

						10
					/	   \
				4		    15
			 / \     /  \
		  2   5   13   20
     / \
		1		3
*/

// console.log('TOTAL EDGES FROM ROOT: ', totalEdges(myBST.root, 0));
// console.log(totalEdgesFromRoot(myBST.root.left))
// console.log(totalEdgesFromRoot(myBST.root.left.left))
// console.log(totalEdgesFromRoot(myBST.root.right))

/*
	TASK: WRITE A FUNCTION THAT WILL TAKE A BINARY TREE AND RETURN THE SUM OF ALL THE
				EDGES IN THE BINARY TREE, INCLUDING THE EDGES OF ALL THE SUBTREES THAT ARE FOUND
				INSIDE THE INITIALLY PASSED IN BINARY TREE NODE

	NOTE: STACK APPROACH
	1.	CREATE A FUNCTION NAMED totalEdgesFromAllTrees
			A.	IT WILL TAKE A BINARY TREE NODE AS ITS SOLE PARAMETER NAMED root
			B.	IT WILL CREATE AN UNMUTABLE VARIABLE NAMED stack AND ASSIGN IT THE VALUE OF AN
					ARRAY WITH root AS AN ELEMENT INSIDE IT
			C.	IT WILL CREATE TWO MUTABLE VARIABLES
					I.		NAME THE FIRST VARIABLE total AND ASSIGN IT THE VALUE OF ZERO
					II.		NAME THE SECOND VARIABLE tmp AND LEAVE IT UNASSIGNED
			D.	LOOP WHILE THERE IS AN ELEMENT FOUND IN THE stack ARRAY
					I.		IT WILL POP A NODE FROM THE stack ARRAY AND ASSIGN IT TO tmp
					II.		IT WILL ADD TO THE total VARIABLE THE RETURN VALUE OF CALLING THE FUNCTION
								totalEdgesFromRoot WITH THE ARGUMENTS tmp and 0
					III.	IT WILL CHECK IF tmp HAS A RIGHT NODE PROPERTY AND PUSH IT ONTO THE
								STACK IF IT DOES
					IV.		IT WILL CHECK IF THE tmp A LEFT NODE PROPERTY AND PUSH IT ONTO THE STACK
								IF IT DOES
			E.	IT WILL RETURN THE VALUE OF THE total VARIABLE
*/

const totalEdgesFromAllTrees = (root) => {
  const stack = [root];
  let total = 0,
    tmp;
  while (stack[0]) {
    tmp = stack.pop();
    total += totalEdgesFromRoot(tmp, 0);
    if (tmp.right) stack[stack.length] = tmp.right;
    if (tmp.left) stack[stack.length] = tmp.left;
  }
  return total;
};

/*

				find the total edges for all nodes from root node, including all edges for all nodes in subtree : 26

						10
					/	   \
				4		    15
			 / \     /  \
		  2   5   13   20
     / \
		1		3
*/

// console.log(
//   'TOTAL EDGES FROM TREE AND SUBTREES: ',
//   totalEdgesFromAllTrees(myBST.root)
// );

/*
  1.  TASK:   CREATE A FUNCTION THAT WILL TAKE A ROOT NODE AND A TARGET NODE AND HAVE IT RETURN THE
              TOTAL NUMBER/SUM OF ALL DISTANCES/EDGES FROM THE TARGET TO ALL THE OTHER NODES IN THE
              BINARY TREE

      NOTE: DFS APPROACH WITH AN OBJECT TO STORE DISTANCES FOR EACH NODE TO TARGET NODE
      1.  define a helper function that will perform dfs via recursion that takes a node and a variable
          to keep track of the number of edges/depth
      2.  define a base case where if node is undefined/null to return
      3.  assign the depth/edge value to the key of node in object
      4.  if node equals target set depth/edge variable to zero
      5.  call the dfs helper function on the left property of node and the depth/edge variable plus one
      6.  call the dfs helper function on the right property of node and the depth/edge variable plus one
      7.  invoke the helper function with root node and the value of zero for the depth/edge variable
      8   return the sum of all the values found in distances object
*/

const allEdges2TargetNode = (root, point) => {
  let sum = 0;

  if (root && point) {
    let currDepth = 0,
      nodes;

    const getResults = (node, target, totalDepth, totalNodes) => {
      if (node.val === target) {
        sum = totalDepth;
        return;
      }

      if (node.left) {
        nodes = numOfNodes(node.left);
        currDepth = totalDepth - nodes + (totalNodes - nodes);
        getResults(node.left, target, currDepth, totalNodes);
      }

      if (node.right) {
        nodes = numOfNodes(node.right);
        currDepth = totalDepth - nodes + (totalNodes - nodes);
        getResults(node.right, target, currDepth, totalNodes);
      }
    };

    getResults(root, point, totalEdges(root, 0), numOfNodes(root));
  }
  return sum;
};



console.log('total edges to target: ', allEdges2TargetNode(myBST.root, 15));

// const allNodeDistances2TargetNode = (root, target) => {  // this will give the distances to the root
//   const distances = {};
//   let total = 0;

//   const dfs = (node, num) => {
//     if(!node) return;
//      if(node.val === target) num = 0;
//      distances[node.val] = num;
//     total += num;
//     dfs(node.left, num+1);
//     dfs(node.right, num+1);
//   }
//   // console.log(total)
//   dfs(root, 1);

//   // let sum = 0;
//   // for(let val in distances){
//   //   if(val !== target+'') sum += distances[val];
//   // }
//   console.log('distances: ', distances)
//   return total;
// }

// console.log(allNodeDistances2TargetNode(myBST.root, 5))

/*
        target node's value is 15
				find the total edges for all nodes to the target node: 19

						10
					/	   \
				4		    15
			 / \     /  \
		  2   5   13   20
     / \
		1		3
*/
