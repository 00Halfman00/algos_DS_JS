"""
  1.  Create Node class that will provide nodes for the MBHPQ class
      I.  It will take a value and make it a property
"""
##################################   NODE CLASS   ##################################################
class Node:
  def __init__(self, val, data):
    self.priority = val
    self.data = data


"""
  1.  CREATE A MIN-BINARY-HEAP-PRIORITY-QUEUE CLASS THAT WILL SERVE AS A PRIORITY QUEUE DATA STRUCTURE.
      METHODS:
        1.  enque_node will insert a new node into the min-binary-heap-priority-queue
            and move it into its proper place in the queue.
        2.  dequeue_node will remove the node at the front of the queue and return it.
        3.  _heap_up is a helper function that will reshuffle the priority queue
            after a new node has been added so that higher priorities come before lower priorities.
        4.  _heap_down i a helper function that will reshuffle the priority queue
            after a node has been removed from the front of the priority queue
"""

#  MIN-BINARY-HEAP-PRIORITY-QUEUE
class min_binary_heap_priority_queue:
  def __init__(self):
    self.nodes = []




  ##################################################################################################
  ####################       METHODS TO INSERT A NODE INTO PQ        ###############################
  ##################################################################################################


   ##################            _heap_up METHOD               #####################################
  #   time complexity: O(log n)

  """
    1.  CREATE A CHILD INDEX FROM THE LAST INDEX IN PQ AND USE IT TO CREATE PARENT INDEX
    2.    loop while parent index is zero or greater and the value at parent
          index is smaller than the value at child's index
          I.      swap the nodes at those two indices
          II.     adjust the two indices for the next iteration
  """

  def _heap_up(self):
    #  CREATE CHILD AND PARENT INDEX IN THAT ORDER         #########################################
    c_Idx = len(self.nodes) - 1
    p_Idx = (c_Idx - 1)//2
    #  loop while parent index is zero or greater and parent's priority is lower than childs
    while p_Idx >= 0 and self.nodes[p_Idx].priority > self.nodes[c_Idx].priority:
      #  swap the child with the parent in PQ
      self.nodes[p_Idx], self.nodes[c_Idx] = self.nodes[c_Idx], self.nodes[p_Idx]
      #  adjust parent and child indices for next iteration
      c_Idx = p_Idx
      p_Idx = (c_Idx - 1)//2






   ##################           enqueue_node METHOD            #####################################
  #   time complexity: O(1)

  """
    1.  IF BOTH ARGUMENTS ARE VALID
        I.    it creates a new node, call it incoming_node
        II.   IF THERE IS ATLEAST A SINGLE NODE IN PQ
              a.    add the incoming node to the end of the PQ
              b.    call helper method named _heap_up
        III.  ELSE ADD THE NODE TO THE PQ
        IV.   RETURN SELF
  """

  def enqueue_node(self, pri, data):
    #  IF BOTH ARGUMENTS PASSED IN ARE VALID  #######################################################
    if type(pri) == int and type(data) == str:
      incoming = Node(pri, data)
      #  IF THERE IS AT LEAST ONE NODE IN PQ, ADD AND SHUFFLE      #################################
      if len(self.nodes):
        self.nodes.append(incoming)
        self._heap_up()
      #  ELSE JUST ADD TO PQ   #####################################################################
      else:
        self.nodes.append(incoming)





  ##################################################################################################
  ####################       METHODS TO REMOVE A NODE FROM PQ        ###############################
  ##################################################################################################




  ###################               _heap_down METHOD        #######################################
  #   time complexity: O(log n)

  """
        1.    create three indices: parent index, left child index, and a right child index
        2.    loop while the node's value at the parent index is smaller than
              either child's value at their respecitive indices in the PQ and while child
              indices are not longer than the length of the PQ
              I.    find the child node with the larger value
              II.   swap the two nodes at those indices in the PQ
              III.  make the parent index the larger child's index and calculate the
                    children's indices
  """

  def _heap_down(self):
    #  CREATE PARENT, LEFT CHILD AND RIGHT CHILD INDICES IN THAT ORDERD    ##########################
    p_idx, l_child_idx, r_child_idx = 0, 1, 2
    #  LOOP WHILE EIHER CHILD'S INDEX IS VALID AND THAT CHILDS PRIORITY IS HIGHER THAN PARENT  #####
    while ((l_child_idx < len(self.nodes) and self.nodes[l_child_idx].priority < self.nodes[p_idx].priority) or (r_child_idx < len(self.nodes) and self.nodes[r_child_idx].priority < self.nodes[p_idx].priority)):
      #  FIND THE VALID CHILD WITH HIGER PRIORITY
      larger_child_idx = l_child_idx
      if r_child_idx < len(self.nodes) and self.nodes[r_child_idx].priority < self.nodes[l_child_idx].priority:
        larger_child_idx = r_child_idx
      #  SWAP THE PARENT AND THE LARGER CHILD IN THE PQ
      self.nodes[p_idx], self.nodes[larger_child_idx] = self.nodes[larger_child_idx], self.nodes[p_idx]
    #  REASSING PARENT, LEFT CHILD AND RIGHT CHILD IN THAT ORDER
      p_idx = larger_child_idx
      l_child_idx = p_idx * 2 + 1
      r_child_idx = l_child_idx + 1

  ###################              dequeue_node METHOD        ######################################
  #   time complexity: O(1)

  """
    1.  IF THERE IS AT LEAST ONE NODE IN THE PQ
        I.    create a variable, call it max_node, and assign it the value of the first node in PQ
        II.   if lenght of PQ is one
              a.  pop off the only node in PQ
        III.  else PQ has more than one node
              a.  assign the first node of the PQ the value of the last node in PQ
              b.  call the _heap_down helper funciton
        IV.   return max_node
  """

  def dequeue_node(self):
    #  IF THERE IS AT LEAST ONE NODE IN THE PQ, ELSE IMPLICITY RETURN NONE
    if len(self.nodes):
      max_node  = self.nodes[0]
      #  IF THERE IS JUST ONED NODE IN PQ, JUST REMOVE IT  #########################################
      if len(self.nodes) == 1:
        self.nodes.pop()
      #  ELSE THERE'S MORE THAN ONE NODE, REASSIGN FIRST NODE IN PQ AND SHUFFLE PQ  ################
      else:
        self.nodes[0] = self.nodes.pop()
        self._heap_down()
      return max_node



  ##################################   for testing    ##############################################
  def printer(self):
    print(self.nodes)





my_pq = min_binary_heap_priority_queue()
my_pq.enqueue_node(1, 'red')
my_pq.enqueue_node(2, 'orange')
my_pq.enqueue_node(8, 'grey')
my_pq.enqueue_node(2, 'orange')
my_pq.enqueue_node(3, 'yellow')
my_pq.enqueue_node(1, 'red-orange')
my_pq.enqueue_node(5, 'green')




print('removing from priority queue: ', my_pq.dequeue_node().priority)
print('removing from priority queue: ', my_pq.dequeue_node().priority)
print('removing from priority queue: ', my_pq.dequeue_node().priority)
# print('removing from priority queue: ', my_pq.dequeue_node().priority)
# print('removing from priority queue: ', my_pq.dequeue_node().priority)
# print('removing from priority queue: ', my_pq.dequeue_node().priority)
# print('removing from priority queue: ', my_pq.dequeue_node().priority)
# print('removing from priority queue: ', my_pq.dequeue_node())

my_pq.printer()
