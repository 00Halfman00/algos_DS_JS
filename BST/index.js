const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const BST = class {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (val) {
      const incoming = new Node(val);
      if (this.root) {
        let tmp = this.root;
        while (tmp) {
					if(val < tmp.val){
						if(!tmp.left){
							tmp.left = incoming;
							break;
						} else tmp = tmp.left;
					}
					if(val > tmp.val){
						if(!tmp.right){
							tmp.right = incoming;
							break;
						} else tmp = tmp.right;
					}
				}
      } else {
        this.root = incoming;
      }
    }
  }
};

const myBST = new BST();

myBST.insert(10);
myBST.insert(4);
myBST.insert(2);
myBST.insert(15);
myBST.insert(1);
myBST.insert(5);
myBST.insert(20);
myBST.insert(13);
myBST.insert(3);

/*
						10
					/	   \
				4		    15
			 / \     /  \
		  2   5   13   20
     / \
		1		3
*/

console.log('MY BINARY SEARCH TREE CLASS INSTANCE: ', myBST.root);


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
const totalEdgesFromRoot = root => {
	let total = 0;
	const dfs = (node, num) => {
		total += num;
		if(node.left){
			 dfs(node.left, num+1)
		}
		if(node.right){
			dfs(node.right, num+1)
		}
	}
	dfs(root, total);
	return total;
}

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

console.log('TOTAL EDGES FROM ROOT: ', totalEdgesFromRoot(myBST.root))
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


const totalEdgesFromAllTrees = root => {
	const stack = [root];
	let total = 0, tmp;
	while(stack[0]){
		tmp = stack.pop()
		total += totalEdgesFromRoot(tmp, 0);
		if(tmp.right) stack[stack.length] = tmp.right;
		if(tmp.left) stack[stack.length] = tmp.left;
	}
	return total;
}

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

console.log('TOTAL EDGES FROM TREE AND SUBTREES: ', totalEdgesFromAllTrees(myBST.root));

