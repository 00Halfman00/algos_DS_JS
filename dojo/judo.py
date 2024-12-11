"""
  1.  Create Node class that will provide nodes for the BST class
  2.  Create BST classs to store the binary search tree data structure
      along with methods to insert nodes, find nodes by value and to traverse the tree.
      METHODS:
        I.    TO INSERT NEW NODES
              a.    insert_iterate method to add nodes at the proper place in bst
              b.    insert_recurse method to add nodes at the proper place in bst
        II.   TO FIND A NODE BY ITS VALUE
              a.    find_iterate method to find a node in the bst by its value
              b.    find_recurse method to find a node in the bst by its value
        III.  TO TRAVERSE THE BINARY SEARCH TREE
              a.    BFS (BREATH FIRST SEARCH)
                    1a.   bfs_iterative
                    2a.   bfs_recurse
              b.    DFS (DEPTH FIRST SEARCH)
                    1b.   dfs_preorder_iterate
                    2b.   dfs_preorder_recurse
                    3b.   dfs_inorder_iterate
                    4b.   dfs_inorder_recurse
                    5b.   dfs_postorder_iterate
                    6b.   dfs_postorder_recurse

"""

##################################   NODE CLASS   ##################################################
class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None


##################################   BST CLASS   ###################################################
class BST:
  def __init__(self):
    self.root = None


  ##################################################################################################
  ####################       METHODS TO INSERT A  NODE INTO BST      ###############################
  ##################################################################################################

  ##################   insert_iterate METHOD     ###################################################
  #   time complexity: O(n)
  """
    1.  IF ARGUMENT IS VALID
        I.  create new node
    2.  IF THRE IS ATLEAST ONE NODE IN BST
        I.  cretea variable, call it tmp_node, and assign it the value of the root node
        II. loop while tmp_node is not None
            a.    if value passed in is smaller than tmp_node's value,
                  1a.   if tmp_node does not have a left property
                        a1.  place accordingly and break
                  2a.   else assign tmp_node to be its left property
            b.    else value passed in must be be larger than tmp_node's value
                  1b.   if tmp_node does not have a right propery
                        b1.   place accordingly and break
                  2b.   else assign tmp_node to be its right property
    3.  ELSE BST IS EMPTY
        a.  make incoming node the root node
    4.  RETURN SELF
  """
  def insert_iterate(self, val):
    if type(val) == int:
      incoming_node = Node(val)
      if self.root:
        tmp_node = self.root
        while tmp_node:
          if val < tmp_node.val:
            if not tmp_node.left:
              tmp_node.left = incoming_node
              break
            else:
              tmp_node = tmp_node.left
          else:
            if not tmp_node.right:
              tmp_node.right = incoming_node
              break
            else:
              tmp_node = tmp_node.right
      else:
        self.root = incoming_node
      return self
   ##################        insert_recurse METHOD       ############################################
  #  time complexity: O(n)
  """
    1.  IF VALID ARGUMENT IS PASSED IN
        I.  create an incoming node
    2.  IF THERE IS A ROOT
        I.    create a helper function to recurse that will take two arguments: a current
              node and an incoming node.
              a.  if incoming node's value is less than current node's value
                  1b.   if current node does not have a left property
                        a1.   make incoming node the left property
                  2b.   else call helper function with current node's left property and incoming node
              b.  if incoming node's value is greater than current node's value
                  1c.   if current node does not have a right proptery
                        a1.   make incoming node the right property
                  2c.   else call helper function with paren node's right property and incoming node
    3.  INVOKE HELPER FUNCTION
    4.  RETURN SELF
    """


  def insert_recurse(self, val):
      if type(val) == int:
        incoming_node = Node(val)
        if self.root:
          def recurse(current_node, incoming_node):
            if val < current_node.val:
              if not current_node.left:
                current_node.left = incoming_node
              else:
                recurse(current_node.left, incoming_node)
            if val > current_node.val:
              if not current_node.right:
                current_node.right = incoming_node
              else:
                recurse(current_node.right, incoming_node)
          recurse(self.root, incoming_node)
        else:
          self.root = incoming_node
      return self











  def printer(self):
    if self.root:
      print(self.root)












my_BST = BST()

####################################################################################################


# my_BST.insert_iterate(10)
# my_BST.insert_iterate(6)
# my_BST.insert_iterate(8)
# my_BST.insert_iterate(15)
# my_BST.insert_iterate(3)
# my_BST.insert_iterate(20)


my_BST.insert_recurse(10)
my_BST.insert_recurse(6)
my_BST.insert_recurse(15)
my_BST.insert_recurse(3)
my_BST.insert_recurse(8)
my_BST.insert_recurse(20)


my_BST.printer()
