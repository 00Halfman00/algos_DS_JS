"""
  1.  Create Node class that will provide nodes for the MBH class
      I.  It will take a value and make it a property
"""
##################################   NODE CLASS   ##################################################
class Node:
  def __init__(self, val, data):
    self.val = val
    self.data = data


"""
  1.  CREATE A MAX BINARY HEAP CLASS THAT WILL SERVE AS A MAX BINARY HEAP DATA STRUCTURE.
      METHODS:
        1.  insert_node will insert a new node into the max binary heap and move it into
            its proper place.
"""


class Max_Binary_Heap:
  def __init__(self):
    self.values = []

  ##################################################################################################
  ####################       METHODS TO INSERT A NODE INTO MBH       ###############################
  ##################################################################################################


   ##################            _heap_up METHOD               #####################################
  #   time complexity: O(n)

  """
    1.  CREATE A CHILD INDEX FROM THE LAST INDEX IN MBH AND USE IT TO CREATE PARENT INDEX
    2.  loop while parent index is zero or greater and the value at parent
        index is smaller than the value at child's index
          I.      swap the nodes at those two indices
          II.     adjust the two indices for the next iteration
  """

  def _heap_up(self):
    c_Idx = len(self.values) - 1
    p_Idx = (c_Idx - 1)//2
    while p_Idx >= 0 and self.values[p_Idx].val < self.values[c_Idx].val:
      self.values[p_Idx], self.values[c_Idx] = self.values[c_Idx], self.values[p_Idx]
      c_Idx = p_Idx
      p_Idx = (c_Idx - 1)//2


  ##################   insert_node METHOD     ######################################################
  #   time complexity: O(n)

  """
    1.  IF BOTH ARGUMENTS ARE VALID
        I.    it creates a new node, call it incoming_node
        II.   IF THERE IS ATLEAST A SINGLE NODE IN MBH
              a.    add the incoming node to the end of the MBH
              b.    call helper method named _heap_up
        III.  ELSE ADD THE NODE TO THE MBH
        IV.   RETURN SELF
  """


  def insert_node(self, val, data):
    if type(val) == int and type(data) == str:
      incoming = Node(val, data)
      if len(self.values):
        self.values.append(incoming)
        self._heap_up()
      else:
        self.values.append(incoming)
    return self




  ##################################################################################################
  ####################       METHODS TO REMOVE A NODE INTO MBH       ###############################
  ##################################################################################################




  ###################        _heap_down METHOD         #############################################
  #   time complexity: O(n)

  """
    1.    create three indices: parent index, left child index, and a right child index
    2.    loop while the node's value at the parent index is smaller than
          either child's value at their respecitive indices in the MBH and while child
          indices are not longer than the length of the MBH
          I.    find the child node with the larger value
          II.   swap the two nodes at those indices in the MBH
          III.  make the parent index the larger child's index and calculate the
                children's indices
  """

  def _heap_down(self):
    # create necessary indices for swapping  #####################################################
    p_Idx = 0
    l_child_Idx = 1
    r_child_Idx = 2
    #  loop while either child's index is within reasonable range and that child's value is larger than the parent's value
    while (l_child_Idx < len(self.values) and self.values[p_Idx].val < self.values[l_child_Idx].val) or (r_child_Idx < len(self.values) and self.values[p_Idx].val < self.values[r_child_Idx].val):
      #  find the larger child  ##################################################################
      larger_child_Idx = l_child_Idx
      if r_child_Idx < len(self.values) and self.values[l_child_Idx].val < self.values[r_child_Idx].val:
        larger_child_Idx = r_child_Idx
      #  swap parent with larger child  ############################################################
      self.values[p_Idx], self.values[larger_child_Idx] = self.values[larger_child_Idx], self.values[p_Idx]
      #  adjust indices for next iteration  ######################################################
      p_Idx = larger_child_Idx
      l_child_Idx = p_Idx * 2 + 1
      r_child_Idx = l_child_Idx + 1



  ########################        shift METHOD         #############################################
  #   time complexity: O(n)

    """
      1.  IF THERE IS AT LEAST ONE NODE IN THE MBH
          I.    create a variable, call it max_node, and assign it the value of the first node in MBH
          II.   if lenght of MBH is one
                a.  pop off the only node in MBH
          III.  else MBH has more than one node
                a.  assign the first node of the MBH the value of the last node in MBH
                b.  call the _heap_down helper funciton
          IV.   return max_node
    """

  def shift(self):
    #  IF THERE IS AT LEAST ONE NODE IN MBH    #####################################################
    if len(self.values):
      max_node = self.values[0]
      if len(self.values) == 1:
        self.values.pop()
      else:
        self.values[0] = self.values.pop()
        self._heap_down()
      return max_node



  ##################################   for testing    ##############################################
  def printer(self):
    print(self.values)



my_MBH = Max_Binary_Heap()
my_MBH.insert_node(5, 'oranges')
my_MBH.insert_node(10, 'bananas')
my_MBH.insert_node(15, 'apples')
my_MBH.insert_node(20, 'avocados')
my_MBH.insert_node(25, 'tomatos')
my_MBH.insert_node(30, 'lettuce')
my_MBH.insert_node(8, 'onions')

print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift().val)
print('remove max node from MBH: ', my_MBH.shift())
my_MBH.printer()

