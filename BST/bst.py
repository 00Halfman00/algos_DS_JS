"""
  1.  Create Node class that will provide nodes for the BST class
  2.  Create BST classs to store the binary search tree data structure
      along with methods to add, delete and manipulate nodes.
      METHODS:
        I.    TO INSERT NEW NODES
              a.    insert_iterate method to add nodes at the proper place in bst
              b.    insert_recurse method to add nodes at the proper place in bst
        II.   TO FIND A NODE BY ITS VALUE
              a.    find_iterate method to find a node in the bst by its value
              b.    find_recurse method to find a node in the bst by its value
        III.  TO TRAVERSE THE BINARY SEARCH TREE
              a.    bfs_iterate
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
  ####################            METHODS TO INSERT INTO BST      ##################################
  ##################################################################################################

  ##################   insert_iterate METHOD ( ITERATION )    #######################################
  #   time complexity: O(n)
  """
    1.  VALIDATE ARGUMENT PASSED IN
        a.  create new node
    2.  IF BINARY SEARCH TREE HAS AT LEAST ONE NODE
        a.  check if incoming node is smaller or bigger than root node
            and place accordingly
    3.  ELSE BINARY SEARCH TREE HAS NO NODES
        a.  make incoming node the root node
  """
  def insert_iterate(self, val):
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      incoming_node = Node(val)
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        parent_node = self.root
        while parent_node:
          if val == parent_node.val:
            break
          if val < parent_node.val:
            if not parent_node.left:
              parent_node.left = incoming_node
              break
            parent_node = parent_node.left
          else:
            if not parent_node.right:
              parent_node.right = incoming_node
              break
            parent_node = parent_node.right
      # else the binary search three is empty, so add first node  ##############
      else:
        self.root = incoming_node
    return self



  ##################   insert_recurse METHOD ( RECURSION )    #######################################
  #  time complexity: O(n)
  """
    1.  IF VALID ARGUMENT IS PASSED IN
        I.  create an incoming node
    2.  IF THERE IS A ROOT
        I.    create an incoming node
        II.   create a helper function to recurse that will take two arguments a root node as parent
              node and an incoming node.
              a.  if parent node is None, return
              b.  if parent node's value is less than incoming node's value
                  1b. if parent node does not have a left property (a node)
                      a1. make incoming node the left property
                  2b. else call helper function with parent node's left property and incoming node
              c.  if parent node's value is greater than temporary node's value
                  1c. if parent node does not have a right proptery
                      a1. make incoming node the right property
                  2c. else call helper function with paren node's right property and incoming node
    3.  INVOKE HELPER FUNCTION
    4.  RETURN SELF
    """
  def insert_recurse(self, val):
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      incoming_node = Node(val)
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        def recurse(parent_node, incoming_node):
          if not parent_node:
            return
          if val < parent_node.val:
            if not parent_node.left:
              parent_node.left = incoming_node
            else:
              recurse(parent_node.left, incoming_node)
          if val > parent_node.val:
            if not parent_node.right:
              parent_node.right = incoming_node
            else:
              recurse(parent_node.right, incoming_node)

        return recurse(self.root, incoming_node)
      # else the binary search three is empty, so add first node  ##################################
      else:
        self.root = incoming_node
    return self



  ##################################################################################################
  ####################          METHODS TO FIND NODE IN  BST      ##################################
  ##################################################################################################



  ##################   find_iterate METHOD ( ITERATION )    ########################################
   #  time complexity: O(n)
  """
    1.  CREATE A TEMPORARY VARIABLE NAMED found_node AND ASSIGN IT THE VALUE OF NONE
    2.  IF A VALID ARGUMENT IS PASSED IN
        I.    if there is at least a single node in bst
              a.  create a variable named parent_node and assign it the root node's value
              b.  iterate while parent node is not None
                  1b.   if value is the same as parent node's value
                        b1.   assgin parent node to found_node
                        b2.   break while loop
                  2b.   if value is smaller than parent node's value
                        b1.   assign the parent node to be the parent node's left property
                  3b.   if value is greater than parent nodes's value
                        b1.   assign the parent node to be the parent node's right property
    3.  RETURN found_node
  """

  def findIterate(self, val):
    #  create a variable to return   ###############################################################
    found_node = None
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        parent_node = self.root
        while parent_node:
          if val == parent_node.val:
            found_node = parent_node
            break
          if val < parent_node.val:
            parent_node = parent_node.left
          if val > parent_node.val:
            parent_node = parent_node.right
    return found_node


  ##################   find_recurse METHOD ( RECURSION )    ########################################
  #  time complexity: O(n)
  """
    1.  IF VALID ARGUMENT IS PASSED IN
        I.    if bst has at least one node in it
              a.    create a helper function to recurse with that takes a node as parent_node and a value
                    1a.   if parent is None
                          a1.   return
                    2a.   if val is the same as parent_node's value
                          a1.   return
                    3a.   if val is less than parent_node's value
                          a1.   call helper function, passing in parent_node.left and value
                    4a.   if val is greater than parent_node's value
                          a1.   call helper function, passing in parent_node.right and value
              b.    invoke helper function passing in root node and value that was passed in

    2. RETURN CALL TO HELPER FUNCTION

  """
  def findRecurse(self, val):
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        def recurse(parent_node, val):
          if not parent_node:
            return
          if val == parent_node.val:
            return parent_node
          if val < parent_node.val:
            return recurse(parent_node.left, val)
          if val > parent_node.val:
            return recurse(parent_node.right, val)
    return recurse(self.root, val)


  ##################################################################################################
  ####################           METHODS TO TRAVERSE THE BST      ##################################
  ##################################################################################################


  ##################   BREATH FIST SEARCH METHOD ( ITERATION WITH QUEUE )    #######################
  #  time complexity: O(n)
  """
    1.  CREATE VARIABLE NAMED response AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BINARY SEARCH TREE
        I.    create a variable named queue and initiate it with the value of a list with the root node in it
        II.   create a variable named tmp_node and initiate if to be None
        III.  iterate while the queue has anythng in it
              a.    remove the first node in the queue and assign it to a variable named tmp_node
              b.    append the value of tmp_node to the response list
              c.    if tmp_node has a left node
                    1c.   append the value of tmp_node's left property
              d.    if tmp_node has a right node
                    1d.   append the value of tmp_node's right property
    3.  RETURN response

  """
  def bfs_iterate(self):
    #  create a variable to return   ###############################################################
    response = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      queue, tmp_node = [self.root], None
      while len(queue):
        tmp_node = queue.pop(0)
        response.append(tmp_node.val)
        if tmp_node.left:
          queue.append(tmp_node.left)
        if tmp_node.right:
          queue.append(tmp_node.right)
    return response


  def printer(self):
    if self.root:
      print(self.root)

my_BST = BST()
# my_BST.insertIterate(8)
# my_BST.insertIterate(3)
# my_BST.insertIterate(10)
# my_BST.insertIterate(1)
# my_BST.insertIterate(14)
# my_BST.insertIterate(6)
# my_BST.insertIterate(4)
# my_BST.insertIterate(7)
# my_BST.insertIterate(13)



my_BST.insert_recurse(8)
my_BST.insert_recurse(3)
my_BST.insert_recurse(10)
my_BST.insert_recurse(1)
my_BST.insert_recurse(14)
my_BST.insert_recurse(6)
my_BST.insert_recurse(4)
my_BST.insert_recurse(7)
my_BST.insert_recurse(13)

# my_BST.printer()


# print('find method using iteration: ', my_BST.findIterate(7).val)
# print('find method using iteration: ', my_BST.findIterate(13).val)
# print('find method using iteration: ', my_BST.findIterate(50))


# print('find method using recursion: ', my_BST.findRecurse(7).val)
# print('find method using recursion: ', my_BST.findRecurse(13).val)
# print('find method using recursion: ', my_BST.findRecurse(50))


print('traverse the bst via bfs: ', my_BST.bfs_iterate())
