class Node():
  def __init__(self, val) -> None:
    self.val = val
    self.next = None

class Singly_LL:
  def __init__(self) -> None:
    self.head = None
    self.tail = None
    self.len = 0

  """
  1.  The logic here is to try and simulate what list methods can do
  2.  Start by creating an empty singly link list ( my_SLL = Singly_LL() ), just like creating an empty list( my_list = [] )
  3.  Methods:
      I.    append  ( seems to be working just like list method )
            (adds node to the end of singly link list)
            takes a value, creates a node and adds it to the end of the list
            time complexity: O(1)

      II.   insert  ( seems to be working just like list method )
            (adds node to the place of the provided index)
            takes a positive or negative index and a value to insert
            time complexity: O(1) for inserting at beginning or at end; O(n) for inserting between start and end

      III.  remove  ( seems to be working just like list method )
            (removes the node that has the value passed in from the singly linked list)
            time complexity: O(n) except if it is the first node then O(1)

      IV.   pop ( seems to be working just like list method except for implementing IndexError return )
            (removes the last node in the list by default else at the provided index)
            takes a positive or negative index to remove from SLL and returns node



  """
  ##################################################################################################
  def append(self, val) -> None:
    incoming_node = None
    if type(val) == int:
      incoming_node = Node(val)
      if self.head:
        self.tail.next = incoming_node
      else:
        self.head = incoming_node
      self.tail = incoming_node
      self.len += 1


  ##################################################################################################
  def insert(self, idx, val) -> None:
    incoming_node = None
    if type(idx) == int and type(val) == int:
      incoming_node = Node(val)

      # if there is at least one node in SLL  ######################################################
      if self.head:
        # if idx is zero or a negative number whose absolute value is longer than self.len #########
        if idx == 0 or idx < 0 and abs(idx) >= self.len:
          incoming_node.next = self.head
          self.head = incoming_node
          self.len += 1
          return
        # if idx is a positive number and greater than self.len ####################################
        if idx >= self.len:
          self.tail.next = incoming_node
          self.tail = incoming_node
          self.len += 1
          return
        # work from left to right (positive idx) ###################################################
        if idx > 0:
          count, tmp_node = 0, self.head
          while(count <= idx):
            if(count == idx - 1):
              next_node = tmp_node.next
              tmp_node.next = incoming_node
              incoming_node.next = next_node
              break
            tmp_node = tmp_node.next
            count += 1
        # work from right to left (negative idx) ###################################################
        else:
          target_idx = self.len + idx
          count, tmp_node = 0, self.head
          while count <= target_idx:
            if count == target_idx - 1:
              next = tmp_node.next
              tmp_node.next = incoming_node
              incoming_node.next = next
              break
            tmp_node = tmp_node.next
            count += 1

      else: # if there are zero nodes in SLL #######################################################
        self.head = incoming_node
        self.tail = incoming_node
      self.len += 1
      return self

  ##################################################################################################
  def remove(self, val):
    # if any node/s exist
    if self.len:
      # if the first node is the node to remove ####################################################
      if val == self.head.val:
        if self.len > 1:
          tmp_node = self.head.next
          self.head = None
          self.head = tmp_node
        self.len -= 1
      # if there is more than one node and val is not the self.head.val ############################
      elif self.len > 1:
        count, tmp_node = 0, self.head
        while count < self.len - 1:
          if(tmp_node.next and tmp_node.next.val == val):
            found = tmp_node.next
            if found == self.tail:
              self.tail = tmp_node
            tmp_node.next = found.next
            found = None
          tmp_node = tmp_node.next
          count += 1
        self.len -= 1
      if not self.len:
        self.head = None
        self.tail = None
        self.len = 0

  ##################################################################################################
  def pop(self, idx=None):
    # if no index is provided ######################################################################
    if idx == None:
      idx = self.len - 1
    # if someone tries to use a bogus index ########################################################
    if idx > self.len - 1 or idx < -self.len:
      return None
    # if SLL has at least one node #################################################################
    if self.len:
      count, tmp_node, found = 0, self.head, None
      # if list has only one node ##################################################################
      if self.len == 1 and count == idx:
        found = self.head
        self.head = None
        self.tail = None
      # if list has more than one node and index is zero or negative self.len ######################
      elif self.len > 1 and (count == idx or idx == -self.len):
        found = tmp_node
        self.head = found.next
        found.next = None
      # if list has more than one node and idx is a positive or negative number ###################
      else:
        target_idx = 0
        if idx < 0:
          target_idx = self.len + idx
        else:
          target_idx = idx
        while count < self.len - 1:
          if count + 1 == target_idx:
            if tmp_node.next:
              found = tmp_node.next
              if found == self.tail:
                self.tail = tmp_node
                tmp_node.next = None
              else:
                next = found.next
                tmp_node.next = next
              found.next = None
          count += 1
          tmp_node = tmp_node.next
      self.len -= 1
      return found.val

  ##################################################################################################
  def print_SLL(self) -> None:
    if self.len >= 1:
      count, tmp, val_list = 0, self.head, []
      while count < self.len:
        val_list.append(tmp.val)
        tmp = tmp.next
        count += 1
      print('self.len: ', self.len)
      print(val_list)
    else:
      print('nothing in list;  self.head: ', self.head, '  self.tail: ', self.tail, 'self.len: ', self.len)






my_SLL = Singly_LL()

my_SLL.append(1)
my_SLL.append(2)
my_SLL.append(6)

print('before: ')
my_SLL.print_SLL()
############################################  insert  ##############################################
# my_SLL.insert(-1, 4)
# my_SLL.insert(2, 3)
# my_SLL.insert(-10, 0)
# my_SLL.insert(10, 1000)
# my_SLL.insert(-2, 5)

############################################  remove  ##############################################
# my_SLL.remove(0)
# my_SLL.remove(1)
# my_SLL.remove(3)
# my_SLL.remove(4)
# my_SLL.remove(5)
# my_SLL.remove(6)
# my_SLL.remove(2)
# my_SLL.remove(1000)

############################################  remove  ##############################################
print('pop: ', my_SLL.pop(5))

print('after: ')
my_SLL.print_SLL()

# print(my_SLL.head.next.next.next.val)
