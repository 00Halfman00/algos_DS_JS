"""
  1.  The logic here is to try and simulate what ARRAY methods in JavaScript can do for DLL in Python programming language
  2.  Start by creating an empty doubly link list ( my_DLL = Doubly_LL() ), just like creating an empty list( my_list = [] )
  3.  Indices that are illogicaly small or greater than or equal to the length of DLL will access first and last node, respectively
  NOTE: push, pop, shift, and unshift all have a time complexity of O(1), which in the SLL only three of the four JS style methods had an O(1) time complexity
  NOTE: get, set, insert and remove all have a time complexity of O(n)/2 which is an improvement over SLL similar methods that have an O(n) time complexity
  NOTE: reverse and printer methods both have a time complexity of O(n) and they are the same in in both DLL and SLL
"""

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None
    self.prev = None

class DLL:
  def __init__(self):
    self.head = None
    self.tail = None
    self.len = 0


  ####################### METHOD TO ADD A NEW NODE TO THE END OF THE DLL  ######################  PY
  #  time complexity: O(1)

  def append(self, val):
    if type(val) == int:
      tmp_node = Node(val)
      if self.len:
        self.tail.next = tmp_node
        tmp_node.prev = self.tail
      else:
        self.head = tmp_node
      self.tail = tmp_node
      self.len += 1
    return self

  ####################### METHOD TO REMOVE A NODE FROM THE END OF DLL  #########################  JS
  #  time complexity: O(1)

  def pop(self):
    found = None
    if self.len:
      found = self.tail
      if self.len == 1:
        self.head = None
        self.tail = None
      else:
        self.tail = found.prev
        self.tail.next = None
        found.prev = None
      self.len -= 1
    return found

  ####################### METHOD TO REMOVE NODE FROM START OF DLL  #############################  JS
  #  time complexity: O(1)

  def shift(self):
    found = None
    if self.len:
      found = self.head
      if self.len == 1:
        self.head = None
        self.tail = None
      else:
        self.head = found.next
        self.head.prev = None
        found.next = None
      self.len -= 1
    return found

  #######################  METHOD TO ADD A NEW NODE TO THE START OF DLL  ######################   JS
  # time complexity: O(1)

  def unshift(self, val):
    if type(val) == int:
      tmp_node = Node(val)
      if self.len:
        tmp_node.next = self.head
        self.head.prev = tmp_node
      else:
        self.tail = tmp_node
      self.head = tmp_node
      self.len += 1
    return self

  #######   METHOD TO GET A NODE BY INDEX FROM DLL (takes positive and negative index)   ###########
  # time complexity: best cases O(1); worst and average cases O(n)/2

  def get(self, idx):
    found_node = None
    # IF INDEX IS AN INTEGER  ######################################################################
    if type(idx) == int:
      # IF INDEX IS ZERO OR INDEX IS LESS THAN OR EQUAL TO NEGATIVE LENGTH OF DLL   ################
      if idx == 0 or idx <= -self.len:
        found_node = self.head
        # IF INDEX IS -1 OR INDEX IS GREATER THAN OR EQUAL TO ONE LESS THAN THE LENGHT OF DLL   ####
      elif idx >= self.len - 1 or idx == -1:
        found_node = self.tail
      # IF INDEX IS NEITHER AT THE FIRST OR LAST NODE  #############################################
      else:
        target_idx = idx
        if idx < 0:
          target_idx = self.len + idx
        # GO LEFT TO RIGHT  ########################################################################
        if idx <= self.len/2:
          tmp_node, count  = self.head.next, 1
          while tmp_node:
            if count == target_idx:
              found_node = tmp_node
            tmp_node = tmp_node.next
            count += 1
        # GO RIGHT TO LEFT  #######################################################################
        else:
          tmp_node, count = self.tail.prev, self.len - 2
          while tmp_node.prev:
            if count == target_idx:
              found_node = tmp_node
            tmp_node = tmp_node.prev
            count -= 1

    return found_node

  ###  METHOD TO SET A VALUE ON A NODE BY INDEX IN DLL (takes positive and negative index)   #######
  # time complexity: best case O(1); worst case and on average O(n)/2

  def set(self, idx, val):
    response = False
    # IF VALID ARGUMENT IS PASSED IN  ##############################################################
    if type(val) == int:
      # IF THERE IS AT LEAST ONE NODE IN DLL  ######################################################
      if self.len:
        found_node = self.get(idx)
        # IF SOMETHING GOES SIDEWAYS, BEST CHECK  ##################################################
        if found_node:
          found_node.val = val
          response = True
    return response

  ###  METHOD TO INSERT A NEW NODE BY INDEX INTO DLL (takes positive and negative index)   #########
  # time complexity: best case O(1); worst case and on average O(n)/2

  def insert(self, idx, val):
    if type(val) == int:
      #  WHEN INDEX IS ZERO OR SMALLER THAN OR EQUAL TO THE NEGATIVE LENGTH OF DLL  ################
      #  NOTE:  IF DLL IS EMPTY, IT WILL CREATE FIRST NODE IN DLL
      if idx == 0 or idx <= -self.len:
        return bool(self.unshift(val))
      #  WHEN INDEX IS NEGATIVE ONE OR GREATER THAN OR EQUAL TO THE LENGHT OF DLL  #################
      #  NOTE:  IF DLL IS EMPTY, IT WILL CREATE FIRST NODE IN DLL
      elif idx >= self.len:
        return bool(self.append(val))
      #  WHEN DLL HAS THREE OR MORE NODES AND IT'S NOT THE FIRST OR LAST INDEX
      else:
        # GRAB THE THREE NEEDED NODES  #############################################################
        tmp_node = Node(val)
        prev_node = self.get(idx - 1)
        next_node = prev_node.next  # may be None
        # SWITCH NODE LINKS  # #####################################################################
        prev_node.next = tmp_node
        tmp_node.prev = prev_node
        tmp_node.next = next_node
        next_node.prev  = tmp_node
        self.len += 1
        return True
    return False

  ####################  METHOD TO REMOVE A NODE BY INDEX  ##########################################
  # time complexity: best cases O(1); worst and average cases O(n)/2

  def remove(self, idx):
    found_node = None
    # IF VALID ARGUMENT IS PASSED IN  ##############################################################
    if type(idx) == int:
      #  REMOVE THE FIRST NODE   ###################################################################
      if idx == 0 or idx <= -self.len:
        found_node = self.shift()
      #  REMOVE THE LAST NODE   ####################################################################
      elif idx == -1 or idx >= self.len - 1:
        found_node = self.pop()
      #  WHEN DLL HAS THREE OR MORE NODES AND IT'S NOT THE FIRST OR LAST INDEX  ####################
      else:
        found_node = self.get(idx)
        # SWITCH LINKS  ############################################################################
        found_node.prev.next = found_node.next
        found_node.next.prev = found_node.prev
        # SEVER CONNECTIONS  #######################################################################
        found_node.prev = None
        found_node.next = None

        self.len -= 1
    return found_node

  #######################  METHOD TO REVERSE THE NODES IN DLL  #####################################
  def reverse(self):
    # time complexity: O(n)
    if self.len > 1:
      tmp_node = self.head
      prev_node = next = None
      self.head = self.tail
      self.tail = tmp_node

      while tmp_node:
        prev_node = tmp_node.prev
        tmp_node.prev = tmp_node.next
        tmp_node.next  = prev_node

        tmp_node = tmp_node.prev
      return self


  ##################################  for testing  #################################################
  # time complexity: O(n)
  def printer(self):
    if self.head:
      tmp_node, vals_list = self.head, []
      while tmp_node:
        vals_list.append(tmp_node.val)
        tmp_node = tmp_node.next
      print(vals_list)
      print('head: ', self.head.val)
      print('tail: ', self.tail.val)
      print('len: ', self.len)
    else:
      print('list is empty')
      print('head: ', self.head)
      print('tail: ', self.tail)
      print('len: ', self.len)


my_DLL = DLL()

my_DLL.append(1)
my_DLL.append(2)
my_DLL.append(3)
my_DLL.append(4)
my_DLL.append(5)

print('before: ')
my_DLL.printer()

# print('popped value: ', my_DLL.pop().val)
# print('popped value: ', my_DLL.pop().val)
# print('popped value: ', my_DLL.pop().val)
# print('popped value: ', my_DLL.pop())


# print('shift value: ', my_DLL.shift().val)
# print('shift value: ', my_DLL.shift().val)
# print('shift value: ', my_DLL.shift().val)
# print('shift value: ', my_DLL.shift())


# my_DLL.unshift(0)

# print('get node by index: ', my_DLL.get(-5).val)
# print('get node by index: ', my_DLL.get(0).val)
# print('get node by index: ', my_DLL.get(4).val)
# print('get node by index: ', my_DLL.get(20).val)


print('set node by index: ', my_DLL.set(-5, 100))
print('set node by index: ', my_DLL.set(0, 100000000001))
print('set node by index: ', my_DLL.set(4, 6789))
print('set node by index: ', my_DLL.set(20, 4444))
print('set node by index: ', my_DLL.set(2, 4444))


# print('insert node at index: ', my_DLL.insert(-26, 20000))


# print('removing node: ', my_DLL.remove(-2).val)

print(my_DLL.reverse())
print('after: ')
my_DLL.printer()
# print('get node by index:                            ', my_DLL.get(-2).val)
