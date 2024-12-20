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
  #   time complexity: O(log n)
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
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      incoming_node = Node(val)
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        current_node = self.root
        while current_node:
          #  if value already exist, avoid it
          if val == current_node.val:
            break
          if val < current_node.val:
            if not current_node.left:
              current_node.left = incoming_node
              break
            current_node = current_node.left
          else:
            if not current_node.right:
              current_node.right = incoming_node
              break
            current_node = current_node.right
      # else the binary search tree is empty, add first node  ##############
      else:
        self.root = incoming_node
    return self



  ##################        insert_recurse METHOD       ############################################
  #  time complexity: O(log n)
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
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      incoming_node = Node(val)
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        #  create a helper function that takes two nodes. It will traverse the bst, recursively  ###
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
        return recurse(self.root, incoming_node)
      # else the binary search tree is empty, so add first node  ##################################
      else:
        self.root = incoming_node
    return self



  ##################################################################################################
  ####################          METHODS TO FIND NODE IN  BST          ##############################
  ##################################################################################################



  ##################   find_iterate METHOD ( ITERATION )    ########################################
   #  time complexity: O(log n)
  """
    1.  CREATE A TEMPORARY VARIABLE NAMED found_node AND ASSIGN IT THE VALUE OF NONE
    2.  IF A VALID ARGUMENT IS PASSED IN
        I.    if there is at least a single node in bst
              a.  create a variable named current_node and assign it the root node's value
              b.  iterate while current node is not None
                  1b.   if value is the same as current node's value
                        b1.   assgin current node to found_node
                        b2.   break while loop
                  2b.   if value is smaller than current node's value
                        b1.   assign the current node to be the current node's left property
                  3b.   if value is greater than current nodes's value
                        b1.   assign the current node to be the current node's right property
    3.  RETURN found_node
  """

  def find_iterate(self, val):
    #  create a variable to return   ###############################################################
    found_node = None
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        current_node = self.root
        #  while current node is not None  #########################################################
        while current_node:
          if val == current_node.val:
            found_node = current_node
            break
          if val < current_node.val:
            current_node = current_node.left
          if val > current_node.val:
            current_node = current_node.right
    return found_node


  ##################   find_recurse METHOD ( RECURSION )    ########################################
  #  time complexity: O(log n)
  """
    1.  IF VALID ARGUMENT IS PASSED IN
        I.    if bst has at least one node in it
              a.    create a helper function to recurse with that takes a node as current_node and a value
                    1a.   if current node is None
                          a1.   return
                    2a.   if val is the same as current_node's value
                          a1.   return current_node
                    3a.   if val is less than current_node's value
                          a1.   call helper function, passing in current_node.left and value
                    4a.   if val is greater than current_node's value
                          a1.   call helper function, passing in current_node.right and value
              b.    invoke helper function passing in root node and value that was passed in

    2. RETURN CALL TO HELPER FUNCTION

  """
  def find_recurse(self, val):
    #  if argument passed in is valid  #############################################################
    if type(val) == int:
      #  if there is at least a single node in binary search tree  #################################
      if self.root:
        #  create a helper function that takes a node and val. It will traverse the bst, recursively
        def recurse(current_node, val):
          if not current_node:
            return
          if val == current_node.val:
            return current_node
          if val < current_node.val:
            return recurse(current_node.left, val)
          if val > current_node.val:
            return recurse(current_node.right, val)
    return recurse(self.root, val)






  ##################################################################################################
  ####################           METHODS TO TRAVERSE THE BST        ################################
  ##################################################################################################









  ##################################################################################################
  #######################        BREATH FIRST SEARCH         #######################################
  ##################################################################################################


  ##################       bfs_iterate  METHOD ( ITERATION WITH QUEUE )      #######################
  #  time complexity: O(n)
  """
    1.  CREATE VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BINARY SEARCH TREE
        I.    create a queue ( FIFO ) and initiate it to be a list with the root node in it
        II.   create a variable named tmp_node and initiate if to be None
        III.  iterate while the queue has anythng in it
              a.    remove the first node in the queue and assign it to a variable named tmp_node
              b.    append the value of tmp_node to the results list
              c.    if tmp_node has a left node
                    1c.   at the end of the queue, add the value of tmp_node's left property
              d.    if tmp_node has a right node
                    1d.   at the end of the queue, add the value of tmp_node's right property
    3.  RETURN results

  """
  def bfs_iterate(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      #  inititalize a queue with the root node inside it for FIFO ( FIRST IN FIRST OUT ) operations
      queue, tmp_node = [self.root], None
      while len(queue):
        tmp_node = queue.pop(0)
        results.append(tmp_node.val)
        if tmp_node.left:
          queue.append(tmp_node.left)
        if tmp_node.right:
          queue.append(tmp_node.right)
    return results


  ##################      bfs_recurse METHOD ( RECURSION WITH LIST)         ########################
  #  time complexity: O(n)
  """
    1.  CREATE A VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BINARY SEARCH TREE
        I.    create a variable named response and assign it an empty list
        II.   create helper function to recurse with that takes a node and an integer as level
              a.    if level is greater or the same as the length of the response list, append
                    an empty list to response
              b.    append the node's value to the list at index level of the response list
              c.    if node has a left property
                    1c.   call helper function with node's left property and level + 1
              d.    if node has a right property
                    1d.   call helper funtion with node's right property and level + 1
        III.  invoke a call to helper function, passing in the root node and zero
        IV.  iterate over response
              a.    for each list in response, extend list to results
    3.  RETURN results

  """

  def bfs_recurse(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      response = []
      # create a helper function that takes a node and an int. It will traverse the bst, recursively
      def recurse(node, level):
        if level >= len(response):
          response.append([])
        response[level].append(node.val)
        if node.left:
          recurse(node.left, level + 1)
        if node.right:
          recurse(node.right, level + 1)
      recurse(self.root, 0)
      #  flatten out a list to return   ############################################################
      for l in response:
        results.extend(l)
    return results








  ##################################################################################################
  ###################           DEPTH FIRST SEARCH          ########################################
  ##################################################################################################


  ################        dfs_preorder_iterate METHOD         ######################################
  #  time complexity: O(n)
  """
    1.  CREATE A VARIABLE NAMED results and assign it an empty list
    2.  IF THERE IS AT LEAST A SINGLE NODE IN BST
        I.    initiate a stack ( LIFO ) using a list that has the root node inside, only
        II.   initalize a temporary variable to None
        III.  loop while there is something inside the stack
              a.  remove the node at the top/end of the stack and assign it to the temporary variable
              b.  append the value of the temporary variable to the resulsts list
              c.  if the temporary variable/node has a right property
                  1c.   append the temporary variable's right property to the stack
              d.  if the temporary variable/node has a left property
                  1d.   append the temporary variable's left property to the stack
    3.  RETURN results
  """


  def dfs_preorder_iterate(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      # initialize a stack with the root node inside for LIFO (LAST IN FIRST OUT) operations
      stack, tmp_node = [self.root], None
      # while stack has something inside   #########################################################
      while len(stack):
        tmp_node = stack.pop()
        results.append(tmp_node.val)
        if tmp_node.right:
          stack.append(tmp_node.right)
        if tmp_node.left:
          stack.append(tmp_node.left)
    return results


  ################        dfs_preorder_recurse METHOD         ######################################
  #  time complexity: O(n)
  """
    1.  CREATE A VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BST
        I.    create a helper function to recurse with that takes a node as an argument
              a.    append the node's value to the results list
              b.    if node has a left property that is not None
                    1c.   call the helper function, passing in node.left
              c.    if node has a right property that is not None
                    1d.   call the helper function, passing in node.right
    3.  INVOKE A CALL TO THE HELPER FUNCTION, PASSING IN THE ROOT NODE AS THE ARGUMENT
    4.  RETURN results
  """


  def dfs_preorder_recurse(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      #  create a helper function that takes a node. It will traverse the bst, recursively  ########
      def recurse(node):
        results.append(node.val)
        if node.left:
          recurse(node.left)
        if node.right:
          recurse(node.right)
      recurse(self.root)
    return results


  ################         dfs_inorder_iterate METHOD         ######################################
  #  time complexity: O(n)

  """
    1.  CREATE A VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BST
        I.    create a stack with as an empty list for FIFO ( FIRST IN FIRST OUT ) operations
        II.   create a variable named current and assign it the root node
        III.  outer loop while there is something in the stack or current node is not None
              a.    inner loop while current node has a valid left property
                    1b.   assign current node to be the node of its left property
              c.    append current's value to the results list
              d.    assign current to be the node of its right property
        IV.   RETURN results
  """

  def dfs_inorder_iterate(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      stack, current_node = [], self.root
      #  outer loop while that stack has something in it or if current node is not None  ###########
      while len(stack) or current_node:
        #  inner loop while current is not None   ##################################################
        while current_node:
          stack.append(current_node)
          current_node = current_node.left
        current_node = stack.pop()
        results.append(current_node.val)
        current_node = current_node.right
    return results


  ################         dfs_inorder_recurse METHOD         ######################################
  #  time complexity: O(n)
  """
    1.  CREATE A VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BST
        I.    create a helper function that takes a node. It will traverse the bst, recursively
              a.    if node's left property is not None:
                    1a.   call helper function, passing node's left property as the argument
              b.    append the node's value to the results list
              c.    if node's right property is not None
                    1c.   call helper function, passing node's right property as the argument
    3.  INVOKE A CALL TO THE HELPER FUNCTION, PASSING IN THE ROOT NODE
    4.  RETURN results
  """

  def dfs_inorder_recurse(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      #  create a helper function that takes a node. It will traverse the bst, recursively  ########
      def recurse(node):
        if node.left:
          recurse(node.left)
        results.append(node.val)
        if node.right:
          recurse(node.right)
      recurse(self.root)
    return results



  ################         dfs_postorder_iterate METHOD         ####################################
  #  time complexity: O(n)
  """
    1.  CREATE A VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BST
        I.    create two stacks, putting the root in the first stack and leaving the second stack empty
              ( both stack will use LIFO operations )
        II.   create a current node variable and initiate it to None
        III.  Loop while there is something in the first stack
              a.    assign current node the value of the node removed from the end of first stack
              b.    append the value of current node to the second stack
              c.    if current node has a left node
                    1c.   append to the end of the first stack the left property of the current node
              d.    if current node has a right property
                    1d.   append to the end of the first stack the right property of the current node
        IV.   loop while there is something in the second stack
              a.    assign current node the value of the node removed from the end of the second stack
              b.    append the current node's value to the results list
    3.  RETURN results

  """

  def dfs_postorder_iterate(self):
    #  create a variable to return   ###############################################################
    results = []
    #  if there is at least a single node in binary search tree  ###################################
    if self.root:
      stack1, stack2, current_node = [self.root], [], None

      while len(stack1):
        current_node = stack1.pop()
        stack2.append(current_node)
        if current_node.left:
          stack1.append(current_node.left)
        if current_node.right:
          stack1.append(current_node.right)

      while len(stack2):
        current_node = stack2.pop()
        results.append(current_node.val)

    return results



  ################         dfs_postorder_iterate METHOD         ####################################
  #  time complexity: O(n)

  """
    1.  CREATE A VARIABLE NAMED results AND ASSIGN IT AN EMPTY LIST
    2.  IF THERE IS AT LEAST ONE NODE IN THE BST
        I.  create a helper function that takes a node. It will traverse the bst, recursively
            a.    if node has a left property
                  1a.   call helper function, passing node's left property as the argument
            b.    if node's right property is not None
                  1b.   call helper function, passing node's right property as the argument
            c.    append node's value to the results list
    3.  INVOKE CALL TO HELPER FUNCTION, PASSING IN THE ROOT NODE
    4.  RETURN results
  """

  def dfs_postorder_recurse(self):
    results = []
    if self.root:
      def recurse(node):
        if node.left:
          recurse(node.left)
        if node.right:
          recurse(node.right)
        results.append(node.val)
      recurse(self.root)
    return results



  ##################################################################################################
  #####################             FOR TESTING             ########################################
  ##################################################################################################
  def printer(self):
    if self.root:
      print(self.root)

my_BST = BST()

####################################################################################################

# my_BST.insert_iterate(8)
# my_BST.insert_iterate(3)
# my_BST.insert_iterate(10)
# my_BST.insert_iterate(1)
# my_BST.insert_iterate(14)
# my_BST.insert_iterate(6)
# my_BST.insert_iterate(4)
# my_BST.insert_iterate(7)
# my_BST.insert_iterate(13)



my_BST.insert_recurse(10)
my_BST.insert_recurse(6)
my_BST.insert_recurse(15)
my_BST.insert_recurse(3)
my_BST.insert_recurse(8)
my_BST.insert_recurse(20)


# my_BST.printer()

##################################################################################################

# print('find method using iteration: ', my_BST.find_iterate(7).val)
# print('find method using iteration: ', my_BST.find_iterate(13).val)
# print('find method using iteration: ', my_BST.find_iterate(50))


print('find method using recursion: ', my_BST.find_recurse(3))
print('find method using recursion: ', my_BST.find_recurse(13))
print('find method using recursion: ', my_BST.find_recurse(15))

##################################################################################################

# print('traverse the bst via bfs_iterate: ', my_BST.bfs_iterate())  #  expect:  [10, 6, 15, 3, 8, 20]
# print('traverse the bst via bfs_recurse: ', my_BST.bfs_recurse())  #  expect:  [10, 6, 15, 3, 8, 20]

# ##################################################################################################

# print('dfs_preorder_iterate:  ', my_BST.dfs_preorder_iterate())  #  expect:   [10, 6, 3, 8, 15, 20]
# print('dfs_preorder_recurse:  ', my_BST.dfs_preorder_recurse())  #  expect:   [10, 6, 3, 8, 15, 20]

# ##################################################################################################

# print('dfs_inorder_iterate:  ', my_BST.dfs_inorder_iterate())  #  expect:   [3, 6, 8, 10, 15, 20]
# print('dfs_inorder_recurse:  ', my_BST.dfs_inorder_recurse())  #  expect:   [3, 6, 8, 10, 15, 20]

# ##################################################################################################

# print('dfs_postorder_iterate:  ', my_BST.dfs_postorder_iterate())  #  expect:  [3, 8, 6, 20, 15, 10]
# print('dfs_postorder_recurse:  ', my_BST.dfs_postorder_recurse())  #  expect:  [3, 8, 6, 20, 15, 10]
