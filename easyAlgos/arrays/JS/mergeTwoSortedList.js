/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.


Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

// Node class and SinglyLinkedList class are constructed for testing purposes; that is,
// a real singly linked list is needed to test out the mergeTwoList function/algo.

const Node = function (val) {
  this.val = val;
  this.next = null;
};

const SinglyLinkedList = class {
  constructor() {
    this.root = null;
  }

  insertNode(val) {
    if (typeof val === 'number') {
      const incoming = new Node(val);
      if (this.root) {
        if (val < this.root.val) {
          incoming.next = this.root;
          this.root = incoming;
          return;
        } else {
          let tmp = this.root;
          while (tmp.val <= incoming.val && tmp.next !== null) {
            tmp = tmp.next;
          }
          tmp.next = incoming;
        }
      } else this.root = incoming;
    }
  }

  printList() {
    const nodes = [];
    if (this.root) {
      let tmp = this.root;
      while (tmp) {
        nodes.push(tmp.val);
        tmp = tmp.next;
      }
    }
    return nodes;
  }
};

// recursive version
// time complexity: O(n)
// mutates existing list, if that is ok????
const mergeTwoListsRecurse = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoListsRecurse(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRecurse(list1, list2.next);
    return list2;
  }
};

// iterative version
// time complexity: O(n)

/*
  steps:
  1.  check if either or both of the list are empty
  2.  create a starting variable according to the list with lowest val
  3.  create a copy of the starting variable so as to not lose the starting reference pointer
  4.  loop  while both list have nodes and to create list in proper order
  5.  check if either of two list still has nodes in it
  6.  return the starting pointer
*/

const mergeTwoListIterate = (list1, list2) => {
  // if either or both list are empty return the one that is not or any of the empty list
  if (!list1) return list2;
  if (!list2) return list1;

  // pick a starting list and adjust the picked list accordingly
  let resp;
  if (list1.val <= list2.val) {
    resp = list1;
    list1 = list1.next;
  } else {
    resp = list2;
    list2 = list2.next;
  }
  // create copy to move forward and manipulate so that the original still points to the start of the list
  let copy = resp;

  // loop until one of the two list runs out of nodes
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      copy.next = list1;
      list1 = list1.next;
    } else {
      copy.next = list2;
      list2 = list2.next;
    }
    copy = copy.next;
  }

  // look to see if one of the list still has nodes that havent been covered
  if (!list1) copy.next = list2;
  if (!list2) copy.next = list1;

  // return resp.next because it contains the start of the splicing of list1 and list2
  // this approach creates a new spliced list of the two original list, yet it has a root node that is not part of the two original list
  return resp;
};

// const list1 = [1, 2, 4],
//   list2 = [1, 3, 4];

const firstSLL = new SinglyLinkedList();
firstSLL.insertNode(1);
firstSLL.insertNode(2);
firstSLL.insertNode(4);

const secondSLL = new SinglyLinkedList();
secondSLL.insertNode(1);
secondSLL.insertNode(3);
secondSLL.insertNode(4);

const mTLR = mergeTwoListsRecurse(firstSLL.root, secondSLL.root);
console.log(firstSLL.printList());
console.log(firstSLL);

// const mTLI = mergeTwoListIterate(firstSLL.root, secondSLL.root);
// console.log(firstSLL.printList());
// console.log(mTLI);
