/*
  CREATE A FUNCTION THAT WILL TAKE A NUMBER AS ITS PARAMETER.
  THE FUNCTION WILL RETURN ALL THE POSSIBLE FULL BINARY TREES THAT CAN BE FORMED
  FROM THE NUMBER PASSED IN; THAT IS, THE NUMBER REPRESENTS THE NUMBER OF NODES THAT ARE
  IN THE BINARY TREE.
  THE FUNCTION WILL RETURN AN ARRAY WITH THE NODES THAT REPRESENT THE DIFFERENT POSSSIBLE
  COMBINATIONS OF FULL BINARY TREES THAT CAN BE COMPOSED WITH THAT NUMBER OF NODES IN THE
  BINARY TREE.
  NOTE:   A FULL BINARY TREE MUST HAVE EITHER ZERO NODES OR A NODE WITH TWO CHILD NODES;
          THAT IS, EITHER A NODE HAS NO CHILD NODES OR MUST HAVE BOTH CHILD NODES TO BE
          CONSIDERED A FULL TREE
*/

// function to create TreeNode classes
// when creating simeple classes with a function, it must be created with the function key word
const TreeNode = function(val, l, r){
  this.value = val ? val : 0;
  this.left = l ? l : null;
  this.right = r ? r : null;
}


const allPossibleFullTrees = (n) => {  // function to get all full possible binary tree combinations
  if(!(n % 2)) return [];
  const memo = {}; // before each time recurse returns, it will first enter n as a key and the trees array as its value

  const recurse = (n) => {
    if(n === 1) return [new TreeNode(0)]; // base case to unwind recusive calls by returning an array with a single Node
    if(memo[n]) return memo[n]; // if value for n has been computed and cached, use it by returning it.

    const trees = []; // each recurse call will return an array with full TreeNode/s
    for(let i = 1; i < n; i += 2){  // must start with odd number and increment by two to stay odd
      // for each time this for loop in initiated, recurse will go all the way right and left will be a single node cause i starts with 1,
      // as n gets smaller it will match i = 1, and the building up begins, as i gets bigger n will get smaller and the switch of possible nodes happens
      // but as it starts to unwind and return, right will start getting smaller till it becomes a single node as the value of i increments, having its effect.
      const leftNodes = recurse(i);  // left will be 1 to begin with but as i grows so will the number of left nodes
      const rightNodes = recurse(n - i - 1); //right will be larger at first with the exception of going to the bottom right: n = (3 - 1 -1) = 1 node

      for(left of leftNodes){ // loop over what nodes are found in leftNodes array
        for(right of rightNodes){ // loop over what node are found in rightNodes array. For each left node, go thru right nodes
          trees[trees.length] = new TreeNode(0, left, right); // push a new TreeNode with left node as child and right node as child
        }
      }
    }

    memo[n] = trees;  // enter into memo the key n with value of trees array to avoid future computation
    return trees;
  }

  return recurse(n);  // if you return memo[n] instead, you may be able to avoid virtually all computation
                      // just need to keep cache outside of function
}


console.log(allPossibleFullTrees(7));
