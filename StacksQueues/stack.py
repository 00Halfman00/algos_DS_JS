"""
1.  Creating a Node class to produce nodes for a stack.
2.  Creating a Stack (FIFO) class using a DLL.
      NOTE: head, tail, get, set, remove and len properties are used to traverse stack and edit nodes.
            head, tail, and len properties are also useful to gather information:
              1.  the oldest node and its info
              2.  the newest node and its info
              3.  the size of the stack
      Methods:
        I.    Python list-style append method to add a node to the end of the stack.    (takes a value as parameter)
        II.   JS array-style pop method to remove a node from the end of the stack.     (takes no parameter)
        III.  JS array-style shift method to remove a node from the start of the stack. (takes no parameter)
        IV.   get method to retrieve a node by index from the Stack                     (takes a index as parameter)
        V.    set method to edit a node's properties inside the Stack                   (takes index and value as parameters)
              ( makes use of the get method )
        VI.   remove method to remove a node from the stack, if needed                  (takes a index as parameter)
              ( makes use of the shift, pop, and get methods )
        NOTE: Why remove a node from a stack? Perhaps there is some slow process that takes days or weeks or months and is canceled.
"""

#######################    CLASS TO CREATE NODES TO PLACE IN STACK   ###############################

class Node:
  def __init__(self, val) -> None:
    self.val = val
    self.next = None
    self.prev = None


#######################   CLASS TO CREATE A STACK DATA STRUCTURE   #################################

class Stack:
  def __init__(self) -> None:
    self.head = None
    self.tail = None
    self.len = 0


  #####################   METHOD TO ADD A NEW NODE TO THE END OF THE STACK   ###################  PY
  #  time complexity: O(1)

  def append(self, val):
    #  check the type of argument passed in (can be anything but pick something)
    if type(val) == int:
      #  check if there is a node in stack
      tmp_node = Node(val)
      if self.len:
        self.tail.next = tmp_node
        tmp_node.prev = self.tail
      # else adjust tail accordingly
      else:
        self.head = tmp_node
      # this code below runs regardless of there being a head or not
      self.tail = tmp_node
      self.len += 1
    return self


  #####################   METHOD TO REMOVE A NODE FROM THE END OF THE STACK   ##################  JS
  #  time complexity: O(1)

  def pop(self):
    #  create a variable to return
    found_node = None
    #  check if there is a node in stack
    if self.len:
      #  get the tail in the stack
      found_node = self.tail
      #  if there is only one node in the stack, clean head and tail
      if self.len == 1:
        self.head = None
        self.tail = None
      #  else edit tail accordingly
      else:
        self.tail = found_node.prev
        self.tail.next = None
        found_node.prev = None
      self.len -= 1
    return found_node

  ####################### METHOD TO REMOVE NODE FROM START OF DLL  #############################  JS
  #  time complexity: O(1)

  def shift(self):
    #  create a variable to return
    found_node = None
    #  check if there is a node in stack
    if self.len:
      #  get the first node
      found_node = self.head
      #  if there is only one node in the stack, clean head and tail
      if self.len == 1:
        self.head = None
        self.tail = None
      #  else make the node after the first node the head
      else:
        self.head = found_node.next
        self.head.prev = None
        found_node.next = None
      self.len -= 1
    return found_node

  # METHOD TO RETRIEVE A NODE FROM THE STACK, USING POSITIVE OR NEGATIVE INDICES
  # time complexity: best cases O(1); worst and average cases O(n)/2

  def get(self, idx):
    #  create a variable to return
    found_node = None
    #  check if index is of integer type
    if type(idx) == int:
      #  check if there is a node in stack
      if self.len:
        #  check if idx is zero or smaller or equal to the negative length of stack
        if idx == 0 or idx  <= -self.len:
          found_node = self.head
        #  check if idx is negative one or larger than or equal to the length of the stack minus one
        elif idx == -1 or idx >= self.len - 1:
          found_node = self.tail
        #  code below will only run if there are three or more nodes in stack ( not the head or the tail but between)
        else:
          target_idx = idx
          if idx < 0:
            target_idx = self.len + idx
          #  if idx is less than or equal to half the length of the stack, start from the head and move towards the tail
          if idx <= self.len//2:
            tmp_node, count  = self.head.next, 1
            while tmp_node:
              if count == target_idx:
                found_node = tmp_node
                break
              tmp_node = tmp_node.next
              count += 1
          #  else idx is greater than half the length of the stack, start from the tail and move towards the head
          else:
            tmp_node, count = self.tail.prev, self.len - 2
            while tmp_node:
              if count == target_idx:
                found_node = tmp_node
                break
              tmp_node = tmp_node.prev
              count -= 1
    return found_node


  ###    METHOD TO SET A VALUE ON A NODE BY INDEX IN STACK, VIA POSITIVE OR NEGATIVE INDICES    ####
  # time complexity: best case O(1); worst case and on average O(n)/2
  def set(self, idx, val):
    response = False
    if type(idx) == int and type(val) == int:
      if self.len:
        tmp_node = self.get(idx)
        if tmp_node:
          tmp_node.val = val
          response = True
    return response


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



  #################################   FOR TESTING   ################################################
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




my_Stack = Stack()


# working
my_Stack.append(1)
my_Stack.append(2)
my_Stack.append(3)
my_Stack.append(4)
my_Stack.append(5)

print('before: ')
my_Stack.printer()

# working
# print('popped value: ', my_Stack.pop().val)
# print('popped value: ', my_Stack.pop().val)
# print('popped value: ', my_Stack.pop().val)
# print('popped value: ', my_Stack.pop().val)
# print('popped value: ', my_Stack.pop().val)
# print('popped value: ', my_Stack.pop())


# print('get node by index: ', my_Stack.get(-5).val)
# print('get node by index: ', my_Stack.get(0).val)
# print('get node by index: ', my_Stack.get(4).val)
# print('get node by index: ', my_Stack.get(20).val)

# print('get node by index: ', my_Stack.get(-20).val) #  first node
# print('get node by index: ', my_Stack.get(-5).val)  #  first node
# print('get node by index: ', my_Stack.get(0).val)   #  first node
# print('get node by index: ', my_Stack.get(2).val)   #  middle node
# print('get node by index: ', my_Stack.get(-3).val)  #  middle node
# print('get node by index: ', my_Stack.get(-1).val)  #  last node
# print('get node by index: ', my_Stack.get(4).val)   #  last node
# print('get node by index: ', my_Stack.get(20).val)  #  last node


# print('set node by index: ', my_Stack.set(-5, 100))
# print('set node by index: ', my_Stack.set(0, 100000000001))
# print('set node by index: ', my_Stack.set(4, 6789))
# print('set node by index: ', my_Stack.set(20, 4444))
# print('set node by index: ', my_Stack.set(2, 4444))
# print('set node by index: ', my_Stack.set(-2, 88))


# print('removing node: ', my_Stack.remove(-2).val)

print('after: ')
my_Stack.printer()


