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
      I.    append
            (adds node to the end of singly link list)
            takes value to append
            Creates incoming_node and checks if head exist. If head does exist, it makes incoming_node
            the tails next property, else it makes incoming_node the head. Either way incoming_node
            also becomes the tail and one is added to the len property
            time complexity: O(1)
      II.   insert
            (adds node to the place of the provided index)
            takes positive or negative index and value to insert
            time complexity: O(1) for inserting at beginning or end; O(n) for inserting between start and end
      III.  remove
            (removes the node that has the value passed in from the singly linked list)
            time complexity: O(n) except if it is the first node then O(1)
      IV.   pop
            (removes the last node in the list by default else at the provided index)


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

      if self.head:
        # if idx is zero or a negative number whose absolute value is longer than self.len
        if idx == 0 or idx < 0 and abs(idx) >= self.len:
          incoming_node.next = self.head
          self.head = incoming_node
          self.len += 1
          return
        # if idx is greater self.len or is -1
        if idx >= self.len or idx == -1:
          self.tail.next = incoming_node
          self.tail = incoming_node
          self.len += 1
          return

        # work from left to right
        if idx > 0:
          count, tmp_node = 0, self.head
          while(count <= idx):
            # if idx is 1 or more
            if(count == idx - 1):
              next_node = tmp_node.next
              tmp_node.next = incoming_node
              incoming_node.next = next_node
              break
            tmp_node = tmp_node.next
            count += 1

        else: # work from right to left
          target_idx = self.len + idx
          count, tmp_node = 0, self.head
          while count <= target_idx:
            if count == target_idx - 1:
              next = tmp_node.next
              tmp_node.next = incoming_node
              incoming_node.next = next
            tmp_node = tmp_node.next
            count += 1
      else:
        self.head = incoming_node
        self.tail = incoming_node
      self.len += 1


  def remove(self, val):
    # if any node/s exist
    if self.len:
      # if list has only one node and it happens to have the value sought
      if val == self.head.val and self.len == 1:
        self.head = None
        self.tail = None
        self.len = 0
      # if list has two or more nodes
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


  def pop(self, idx=None): # work in progress
    if idx == None:
      idx = self.len - 1
    if self.len:
      count, tmp_node = 0, self.head
      # if list has only one node
      if self.len == 1:
        tmp_node = self.head
        self.head = None
        self.tail = None
      # if list has more than one node
      else:
        while count < self.len - 1:
          if count + 1 == idx:
            if tmp_node.next:
              pass

      self.len -= 1
      return tmp_node

  def print_SLL(self) -> None:
    count, tmp = 0, self.head
    while count < self.len:
      print(tmp.val)
      tmp = tmp.next
      count += 1






my_SLL = Singly_LL()

my_SLL.append(1)
my_SLL.append(2)
my_SLL.append(3)
my_SLL.append(4)

my_SLL.remove(4)

# my_SLL.insert(-2, 24)
# my_SLL.insert(2, 3)
# my_SLL.insert(-10, 0)
# my_SLL.insert(10, 1000)


print('self.head: ', my_SLL.head.val)
print('self.tail: ', my_SLL.tail.val)
print('my_SLL.len:  ', my_SLL.len)
print('\n\n')
my_SLL.print_SLL()

# print(my_SLL.head.next.next.next.val)
