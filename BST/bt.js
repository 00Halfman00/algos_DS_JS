///////////////////////////////////  function to create a node class for binary tree ////////////////////////////
const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.nodes = null;
  this.edges = null;
  this.distances = null;
};

/////////////////////////////////   class to create a binary search tree with instance methods //////////////////
const BST = class {
  constructor() {
    this.root = null;
    this.nodes = [];
  }
  ////////////////////////////////////// method to insert a node via Iteration   ////////////////////////////////
  insertIteration(val) {
    if (val) {
      const incoming = new Node(val);
      if (this.root) {
        let node = this.root;
        while (true) {
          if (val < node.val) {
            if (!node.left) {
              node.left = incoming;
            } else {
              node = node.left;
            }
          } else if (val > node.val) {
            if (!node.right) {
              node.right = incoming;
            } else {
              node = node.right;
            }
          } else {
            break;
          }
        }
      } else {
        this.root = incoming;
      }
    }
  }

  ////////////////////////////////////// method to insert a node via recursion  //////////////////////////////////
  insertRecursion(val) {
    if (val) {
      const incoming = new Node(val);

      if (this.root) {
        const insertR = (node) => {
          if (val < node.val) {
            if (!node.left) node.left = incoming;
            else insertR(node.left);
          }
          if (val > node.val) {
            if (!node.right) node.right = incoming;
            else insertR(node.right);
          }
        };

        insertR(this.root);
      } else {
        this.root = incoming;
      }
    }
  }
  /////////////////////////////////   method to find a node inside the BST via Iteration  ////////////////////
  findIteration(val) {
    if (this.root && val) {
      let node = this.root;
      while (node) {
        if (node.val === val) return node;
        node = val < node.val ? node.left : node.right;
      }
    }
  }
  /////////////////////////////////   method to find a node inside the BST via recursion  ////////////////////

  //////////////  method to retrieve all values from nodes inside BST via breath first search BFS   /////////////////

  ///////////  method to retrievve all values from nodes inside BST via inorder Iteration   /////////////////

  /////////////   method to retrieve all values from nodes inside BST via preorder Recursion  /////////////////
};

const myBST = new BST();

// myBST.insertIteration(10);
// myBST.insertIteration(4);
// myBST.insertIteration(2);
// myBST.insertIteration(15);
// myBST.insertIteration(4);
// myBST.insertIteration(1);
// myBST.insertIteration(5);
// myBST.insertIteration(20);
// myBST.insertIteration(13);
// myBST.insertIteration(3);

myBST.insertRecursion(10);
myBST.insertRecursion(4);
myBST.insertRecursion(2);
myBST.insertRecursion(3);
myBST.insertRecursion(15);
myBST.insertRecursion(1);
myBST.insertRecursion(5);
myBST.insertRecursion(20);
myBST.insertRecursion(13);

// console.log(myBST.root);
// console.log(myBST.findIteration(13));

// find all distances from root

/*
						10         // 0 += 0 = 0
					/	   \
				4		    15     // 0 += 1 = 1
			 / \     /  \
		  2   5   13   20  // 1 += 1 = 2
     / \
		1		3              // 2 += 1 = 3
*/

// distances = 16

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

//       TWO HELPER FUNCTIONS BELOW TO HELPT FIND ALL DISTANCES TO A TARGET NODE

const getTreeDistances = (root) => {
  let count = 1;
  let edges = 0;
  const dfs = (node, sum) => {
    edges += sum;
    if (node.left) {
      count++;
      dfs(node.left, sum + 1);
    }
    if (node.right) {
      count++;
      dfs(node.right, sum + 1);
    }
  };
  dfs(root, edges);
  root.edges = edges;
  root.nodes = count;
};

const getAllTreesDistances = (root) => {
  const stack = [root];
  let node;
  while (stack[0]) {
    node = stack.pop();
    getTreeDistances(node);
    if (node.right) stack[stack.length] = node.right;
    if (node.left) stack[stack.length] = node.left;
  }
};

getAllTreesDistances(myBST.root); // for debugging purposes

const allDistances2TargetRecursion = (root, target) => {
  let sum;
  if (root && target) {
    let distances;

    const getDistances = (node, goal, allDistances, totalNodes) => {
      if (node.val === goal) sum = allDistances;

      if (node.left) {
        distances = allDistances - node.left.nodes + (totalNodes - node.left.nodes);
        getDistances(node.left, goal, distances, totalNodes);
      }
      if (node.right) {
        distances = allDistances - node.right.nodes + (totalNodes - node.right.nodes);
        getDistances(node.right, goal, distances, totalNodes);
      }
    };

    // getAllTreesDistances(root); // when to run this function is the question
    getDistances(root, target, root.edges, root.nodes);
  }
  return sum;
};

const allDistances2TargetIteration = (root, target) => {
  if (root && target) {
    root.distances = root.edges;
    const stack = [root];
    let node;

    while (stack[0]) {
      node = stack.pop();

      if (target === node.val) return node.distances;
      if (node.right){
        stack[stack.length] = node.right;
        node.right.distances = (node.distances - node.right.nodes) + (root.nodes - node.right.nodes)
      }
      if (node.left){
        stack[stack.length] = node.left;
        node.left.distances = (node.distances - node.left.nodes) + (root.nodes - node.left.nodes);
      }
    }
  }
};


// console.log('sumTreeDistances: ', sumTreeDistances(myBST.root));
// console.log("sumAllTreesDistances: ", sumAllTreesDistances(myBST.root))
// console.log(myBST.root)
console.log(allDistances2TargetRecursion(myBST.root, 1));
console.log(allDistances2TargetIteration(myBST.root, 1));
