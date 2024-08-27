/*

Given the root of a binary tree, imagine yourself standing on the right side of it, return the
values of the nodes you can see ordered from top to bottom.

Example 1:

          1   < ---
        /   \
      2       3   < --
    /   \    /  \
  null   5 null   4  < --

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]


[1]
[2, 3]
[2, 5, 4]

Example 2:

           1   < --
         /   \
       null   3  < --

Input: root = [1,null,3]
Output: [1,3]


Example 3:

Input: root = []
Output: []



note:
1.  seems to lend itself to BFS with a queue and poping off the last node at each level
2.  each level down doubles in the length of possible nodes at that level
*/



const Node = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

const root1 = new Node(1)
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.right = new Node(5);
root1.right.right = new Node(4);


const rightSideView = root => {
  const queue = [root], righties = [];
  let curr, levelLength;

  while(queue[0]){
    levelLength = queue.length;

    for(i = 0; i < levelLength; ++i){
      curr = queue.shift();

      if(curr){
        if(i === levelLength - 1) righties[righties.length] = curr.val;
        if(curr.left) queue[queue.length] = curr.left;
        if(curr.right) queue[queue.length] = curr.right;
      }
    }
  }
  return righties;
}

console.log(rightSideView(root1));

/*  A bit of help from Leet Code contributors; just by reading the right code out theres
  1.  create a queue with root in it
  2.  loop over queue while it has a value
      3.  grab the length of the queue at he current iteration
      4.  start another loop that loops while i is less than length
          5.  shift from the beginning of the queue and assign it to a variable named curr
          6.  if index i is the same value of the length of the queuue, your reached the far right side of
              the level, so add curr to the results array
          7.  if the curr node has a left child push it onto the queue
          8.  if the curr node has a right child push it onto the queue
*/
