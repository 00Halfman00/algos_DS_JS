const TreeNode = function(val, l, r){
  this.value = val ? val : 0;
  this.left = l ? l : null;
  this.right = r ? r : null;
}




const allFPFBT = (n) => {
  // there is an if condition to check for odd value of n at start, but whatever for this
  // investigation into the inner workings of algorithm; that is, how the more complex work
  // is done inside the heper function that that is called recursively. Yet it has three
  // iterations via three for loops inside it.
  const memo = {};

  const recurse = (n) => {
    if(n === 1) return [new TreeNode()];


    // iterate starting at 1 and increment by 2 to keep iterating at odd numbers respresenting the amount of nodes
    for(let i = 1; i < n; i += 2){

      const leftNodesArray = recurse(i);  // [ TreeNode {val: 0, left: null, right: null} ]
      const rightNodesArray = recurse(n - i - 1) // [TreeNode {val: 0, left: TreeNode, right: TreeNode} ]
      // i will be 1 then 3 then 5
      // when i = 1 and n = 7, 7 - 2 = 5, for right side
      // when i = 1 and n = 5, 5 - 2 = 3, for right side
      // when i = 1 and n = 3, 3 - 2 = 1, for right side, and here it returns for first time

      // example when n = 3 and i = 1, left = recurse(1), right recurse(3 - 1 - 1 = 1)
      // so if you were to just make a new class by calling new Node( 0, leftNodes[0], rightNodes[0])
      // you would get a node with a left node and a right node
      // but things need to not be hard coded, so you loop over the leftNodesArray and the rightNodesArray
      // when right firstNodesArray has its first gotten value, as below
      // when n = 3 and i = 1, left and right will have only one element/node in their arrays
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // now it returns outside of all three loops and enters into memo[3] = [node], returns array with a node with two children, hence 3.
      /////////////////////////////////////////////////////////////////////////////////////////////////////////
      // when n = 5 and i = 1, left and right will have only one element/node in their arrays
      // when n = 5 and i = 3, left and right will have only one element/node in their arrays
      /////////////////////////////////////////////////////////////////////////////////////////////////////////
      // now it returns outside of all three loops and enters into memo[5] = [node, node], returns array with two nodes,
      // the first node has one node down its left side and three down its, right and the reverse is true for the second node
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // when n = 7 and i = 1, left will have only one element/node in its array, and right will have two nodes, in its array



    }
  }

}
