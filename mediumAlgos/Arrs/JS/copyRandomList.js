/*
138. Copy List with Random Pointer

A linked list of length n is given such that each node contains an additional random pointer,
which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes,
where each new node has its value set to the value of its corresponding original node.
Both the next and random pointer of the new nodes should point to new nodes in the copied list
such that the pointers in the original list and copied list represent the same list state.
None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y,
then for the corresponding two nodes x and y in the copied list, x.random --> y.
Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes.
Each node is represented as a pair of [val, random_index] where:
val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.



Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]


Constraints:

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.
*/

// funcdtion to create Node class instances for testing purposes
const Node = function (val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

/////////////////////////////        first example        ////////////////////////
// Input: head = [ [4,1],[7,2],[-2,null] ]
// Output: [ [4,1],[7,2],[-2,null] ]
// to use, uncomment the code block below
/*
// create three nodes
const fourNode = new Node(4, null, null);
const sevenNode = new Node(7, null, null);
const negTwoNode = new Node(-2, null, null);

// next pointer
fourNode.next = sevenNode;
sevenNode.next = negTwoNode;

// random pointer
fourNode.random = negTwoNode;
sevenNode.random = fourNode;
*/

/////////////////////////////     second example         ///////////////////////
// Input: head = [ [7,null],[13,0],[11,4],[10,2],[1,0] ]
// Output: [ [7,null],[13,0],[11,4],[10,2],[1,0] ]
const sevenNode = new Node(7, null, null);
const thirteenNode = new Node(13, null, null);
const elevenNode = new Node(11, null, null);
const tenNode = new Node(10, null, null);
const oneNode = new Node(1, null, null);

// next pointer
sevenNode.next = thirteenNode;
thirteenNode.next = elevenNode;
elevenNode.next = tenNode;
tenNode.next = oneNode;

// random pointer
thirteenNode.random = sevenNode;
elevenNode.random = oneNode;
tenNode.random = elevenNode;
oneNode.random = sevenNode;

const copyRandomPointerRecurse = (head) => {
  // create data structure
  const hashMap = new Map();
  // create recursive function
  const recurse = (node) => {
    // base case to stop recursive calls
    if (!node) return null;
    // check for existence of node in hashMap
    if (hashMap.has(node)) return hashMap.get(node);
    // create a deep copy of node
    const newNode = new Node(node.val);
    // add node to hashMap with newNode as value
    hashMap.set(node, newNode);
    // recursive calls for next property
    newNode.next = recurse(node.next);
    // recursive calls for random property
    newNode.random = recurse(node.random);
    // return deep copy
    return newNode;
  };
  // initiate recursive calls to the callstack and return
  return recurse(head);
};

const CopyRandomPointerIterate = (head) => {
  if (head) {
    // create datastructure to store key:value pairs
    const hashMap = new Map();
    // create two pointers: oneto manipulate list; the other to return
    let deepCopy, node;
    // iterate over original list to copy the list from start to end, moving to the next node
    for (node = head; node; node = node.next) {
      const newNode = new Node(node.val);
      hashMap.set(node, newNode);
      if (!deepCopy) deepCopy = newNode;
    }
    // reset node to point to the start of the new list and iterate over it again
    for (node = head; node; node = node.next) {
      // add deep copy of next property
      if (node.next) {
        const tmp1 = hashMap.get(node);
        tmp1.next = hashMap.get(node.next);
      }
      // add deep copy of random property
      if (node.random) {
        const tmp2 = hashMap.get(node);
        tmp2.random = hashMap.get(node.random);
      }
    }
    return deepCopy;
  }
};

const deepCopySevenNodeRecurse = copyRandomPointerRecurse(sevenNode); // first example
const deepCopySevenNodeIterate = CopyRandomPointerIterate(sevenNode); // second example
console.log(deepCopySevenNodeRecurse);
console.log(deepCopySevenNodeIterate);
