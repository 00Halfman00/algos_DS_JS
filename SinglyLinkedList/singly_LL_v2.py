
"""
  1.  The logic here is to try and simulate what ARRAY methods in JavaScript can do for SLL in Python programming language
  2.  Start by creating an empty singly link list ( my_SLL = Singly_LL() ), just like creating an empty list( my_list = [] )
  3.  Indices that are illogicaly small or greater than or equal to the length of SLL will access first and last node, respectively
"""


class Node:
  def __init__(self, val):
    self.val = val
    self.next = None


class SLL:
  def __init__(self) -> None:
    self.head = None
    self.tail = None
    self.len = 0

  ##################     PYTHON/JS VERSION OF APPEND/PUSH METHOD FOR []s ###########################
  # time complexity: O(1)
  def append(self, val):
    if val:
      tmp_node = Node(val)
      if self.head:
        self.tail.next = tmp_node
      else:
        self.head = tmp_node
      self.tail = tmp_node
      self.len += 1
      return self
    return None

  #######################  JS VERSION OF POP METHOD FOR []s  #######################################
  # time complexity: O(1)
  def pop(self):
    found_node = None
    # IF THERE IS AT LEAST A SINGLE NODE IN SLL  ###################################################
    if self.head:
      # IF THERE IS ONLY ONE NODE IN SLL  ##########################################################
      if self.len == 1:
        found_node = self.head
        self.head = None
        self.tail = None
      # IF THERE IS MORE THAN ONE NODE IN SLL ######################################################
      else:
        tmp_node = self.head
        while tmp_node:
          if(tmp_node.next and tmp_node.next == self.tail):
            found_node = tmp_node.next
            tmp_node.next = None
            self.tail = tmp_node
          tmp_node = tmp_node.next
      self.len -= 1
    return found_node

  #######################  JS VERSION OF SHIFT METHOD FOR []s  #####################################
  # time complexity: O(1)
  def shift(self):
    found_node = None
    # IF THERE IS AT LEAST A SINGLE NODE IN SLL  ###################################################
    if self.head:
      # IF THERE IS ONLY ONE NODE IN SLL  ##########################################################
      if self.len == 1:
        found_node = self.pop()
      # IF THERE IS MORE THAN ONE NODE IN SLL ######################################################
      else:
        found_node = self.head
        self.head = found_node.next
        found_node.next = None
        self.len -= 1
    return found_node

  #######################  JS VERSION OF UNSHIFT METHOD FOR []s  ###################################
  # time complexity: O(1)
  def unshift(self, val):
    if type(val) == int:
      tmp_node = Node(val)
      # IF THERE IS AT LEAST ONE NODE IN SLL  ######################################################
      if self.head:
        tmp_node.next = self.head
        self.head = tmp_node
      # IF THERE IS NOT A SINGLE NODE IN SLL  ######################################################
      else:
        self.head = tmp_node
        self.tail = tmp_node
      self.len += 1
      return self.len
    return None


  #########    JUST A GET METHOD FOR SLL (TAKES POSITIVE AND NEGATIVE INDEX )     ##################
  # time complexity: best case O(1); worst case and on average O(n)
  def get(self, idx):
    found_node = None
    # if index is an integer  ######################################################################
    if type(idx) == int:
      # if index is zero or smaller or equal to negative version of length of the SLL  #############
      if(idx == 0 or idx <= -self.len):
        found_node = self.head
      # if index is -1 or greater than or equal to self.len - 1  ###################################
      elif(idx == -1 or idx >= self.len - 1):
        found_node = self.tail
      # if index is neither at the first or last node  #############################################
      else:
        target_idx = None
        if idx < 0:
          target_idx = self.len + idx
        else:
          target_idx = idx
        # need to keep moving right up until the second to last node  ##############################
        tmp_node, count = self.head, 0
        while count < self.len - 1:
          if tmp_node.next and count + 1 == target_idx:
            found_node = tmp_node.next
          tmp_node = tmp_node.next
          count += 1
    return found_node


  #########    JUST A SET METHOD FOR SLL (TAKES POSITIVE AND NEGATIVE INDEX )     ##################
  # time complexity: best case O(1); worst case and on average O(n)
  def set(self, idx, val):
    # IF VALID ARGUMENTS ARE PASSED IN  ############################################################
    if type(val) == int and type(idx):
      # IF THERE IS AT LEAST ONE NODE IN SLL  ######################################################
      if self.head:
        # KEEP CODE DRY BY USING METHODS ALREADY WRITTEN  ##########################################
        found_node = self.get(idx)
        if found_node:
          found_node.val = val
          return True
    return False

  #######################  PYTHON VERSION OF INSERT METHOD FOR []s  ################################
  # time complexity: best case O(1); worst case and on average O(n)
  def insert(self, idx, val):
    # IF VALID ARGUMENTS ARE PASSED IN  ############################################################
    if type(idx) == int and type(val) == int:
      # IF THERE IS AT LEAST ONE NODE IN SLL  ######################################################
      if self.head:
        # if index is zero or smaller or equal to negative version of length of the SLL  ###########
        if idx == 0 or idx <= -self.len:
          return bool(self.unshift(val))
        # if index is greater or equal to self.len  ################################################
        elif(idx >= self.len):
          return bool(self.append(val))
        else:
          # GET THE NODE JUST BEHIND THE SOUGHT FOR INDEX'S POSITION   #############################
          # KEEP CODE DRY BY USING METHODS ALREADY WRITTEN  ########################################
          prev_node = self.get(idx - 1)
          if prev_node:
            tmp_node = Node(val)
            next = prev_node.next
            prev_node.next = tmp_node
            tmp_node.next = next
            self.len += 1
            return True
    return False

  #######################   METHOD TO REMOVE NODE FROM SLL  ########################################
  # time complexity: best case O(1); worst case and on average O(n)
  def remove(self, idx):
     # IF VALID ARGUMENTS IS PASSED IN  ############################################################
    if type(idx) == int:
      # IF THERE IS AT LEAST ONE NODE IN SLL  ######################################################
      if self.len:
        # if index is logical  ###################################################################
        if idx >= -self.len and idx < self.len:
          # if index is the first node  ############################################################
          if idx == 0 or idx == -self.len:
            return self.shift()
          # if index is the last node ##############################################################
          elif idx == -1 or idx == self.len - 1:
            return self.pop()
          # GET THE NODE JUST BEHIND THE SOUGHT FOR INDEX'S POSITION   #############################
          # KEEP CODE DRY BY USING METHODS ALREADY WRITTEN  ########################################
          else:
            prev_node = self.get(idx - 1)
            tmp_node = prev_node.next
            prev_node.next = tmp_node.next
            tmp_node.next = None
            self.len -= 1
            return tmp_node
    return None

  ###########################  METHOD TO REVERSE SLL  ##############################################
  # time complexity: O(n)
  def reverse(self):
    # IF THERE IS MORE THAN ONE NODE IN SLL  #######################################################
    if self.len > 1:
      prev = next = None
      tmp_node = self.head
      self.head = self.tail
      self.tail = tmp_node

      while tmp_node:
        next = tmp_node.next
        tmp_node.next = prev
        prev = tmp_node
        tmp_node = next
    return self

  ##################################  for testing  #################################################
  # time complexity: O(n)
  def print_SLL(self):
    if self.len:
      nodes_vals, tmp_node = [], self.head
      while tmp_node:
        nodes_vals.append(tmp_node.val)
        tmp_node = tmp_node.next
      print(nodes_vals)
      print('head: ', self.head.val)
      print('tail: ', self.tail.val)
      print('len: ', self.len)
    else:
      print('list is empty')





my_SLL = SLL()
my_SLL.append(1)
my_SLL.append(2)
my_SLL.append(3)

# print('popped: ', my_SLL.pop().val)
# print('popped: ', my_SLL.pop().val)
# print('popped: ', my_SLL.pop().val)

# print('removed the first node in SLL: ', my_SLL.shift().val)
# print('removed the first node in SLL: ', my_SLL.shift().val)
# print('removed the first node in SLL: ', my_SLL.shift().val)

my_SLL.unshift(-1)
my_SLL.unshift(-2)
my_SLL.unshift(-3)

print('before: ')
my_SLL.print_SLL()

"""
  [-3, -2, -1, 1, 2, 3]
"""

# print("get nodes's value at the given index: ", my_SLL.get(-20).val) ok

# print('set some value and return true if node is found: ', my_SLL.set(-12, -10)) ok

# print('insert a new node at given index: ',  my_SLL.insert(-15, 4)) ok

# print('remove a node at given index: ',  my_SLL.remove(5)) ok
# my_SLL.reverse()
print('after: ')
my_SLL.print_SLL()
