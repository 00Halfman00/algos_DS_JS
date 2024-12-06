"""
1.  Create a Node class to produce nodes for a queue.
2.  Create a Queue (FIFO) class using a DLL.
      NOTE: shift, get, set, and remove methods are used to traverse queue and edit/cancel nodes.
            head, tail, and len properties are also useful to gather information:
              1.  the oldest node and its info
              2.  the newest node and its info
              3.  the size of the queue
      METHODS:
        I.    JS array-style unshift method to add a node to the start of the queue.    (takes a value as parameter)
        II.   JS array-style pop method to remove a node from the start of the queue.   (takes no parameter)
        III.  JS array-style shift method to remove a node from the start of the queue. (takes no parameter)
        IV.   get method to retrieve a node by index from the queue                     (takes a index as parameter)
        V.    set method to edit a node's properties inside the queue                   (takes index and value as parameters)
              ( makes use of the get method )
        VI.   remove method to remove a node from the queue, if needed                  (takes a index as parameter)
              ( makes use of the shift, pop, and get methods )
        NOTE: Why remove a node from a queue? Perhaps there is some slow process that takes days or weeks or months and is canceled.
"""



#######################    CLASS TO CREATE NODES TO PLACE IN queue   ###############################

class Node:
  def __init__(self, val) -> None:
    self.val = val
    self.next = None
    self.prev = None


#######################   CLASS TO CREATE A QUEUE DATA STRUCTURE   #################################

class Queue:
  def __init__(self) -> None:
    self.head = None
    self.tail = None
    self.len = 0


  #######################  METHOD TO ADD A NEW NODE TO THE START OF DLL  ######################   JS
  # time complexity: O(1)

  def unshift(self, val):
    #  check if val is of integer type
    if type(val) == int:
      tmp_node = Node(val)
      #  if there is a node in the queue, link those nodes infront of tmp_node
      if self.len:
        tmp_node.next = self.head
        self.head.prev = tmp_node
      # else make the new node the tail
      else:
        self.tail = tmp_node
      # these lines below run regardles of queue being empty or not
      self.head = tmp_node
      self.len += 1
    return self


  ####################### METHOD TO REMOVE NODE FROM START OF DLL  #############################  JS
  #  time complexity: O(1)

  def _shift(self):
    #  create a variable to return
    found_node = None
    #  check if there is a node in queue
    if self.len:
      #  get the first node
      found_node = self.head
      #  if there is only one node in the queue, clean head and tail
      if self.len == 1:
        self.head = None
        self.tail = None
      #  else make the node after the first node the new head
      else:
        self.head = found_node.next
        self.head.prev = None
        found_node.next = None
      self.len -= 1
    return found_node




  ##################################################################################################
  ##################################################################################################
  ##################################################################################################

  #           METHODS BELOW USE _name VARIABLES AND ARE MEANT FOR EDITING THE QUEUE                #

  ##################################################################################################
  ##################################################################################################
  ##################################################################################################



  #####################   METHOD TO REMOVE A NODE FROM THE END OF THE QUEUE   ##################  JS
  #  time complexity: O(1)

  def _pop(self):
    #  create a variable to return
    found_node = None
    #  check if there is a node in queue
    if self.len:
      #  get the tail in the queue
      found_node = self.tail
      #  if there is only one node in the queue, clean head and tail
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


  # METHOD TO RETRIEVE A NODE FROM THE QUEUEU, USING POSITIVE OR NEGATIVE INDICES
  # time complexity: best cases O(1); worst and average cases O(n)/2

  def _get(self, idx):
    #  create a variable to return
    found_node = None
    #  check if index is of integer type
    if type(idx) == int:
      #  check if there is a node in queue
      if self.len:
        #  check if idx is zero or smaller or equal to the negative length of queue
        if idx == 0 or idx  <= -self.len:
          found_node = self.head
        #  check if idx is negative one or larger than or equal to the length of the queue minus one
        elif idx == -1 or idx >= self.len - 1:
          found_node = self.tail
        #  code below will only run if there are three or more nodes in queue ( not the head or the tail but between)
        else:
          target_idx = idx
          if idx < 0:
            target_idx = self.len + idx
          #  if idx is less than or equal to half the length of the queue, start from the head and move towards the tail
          if idx <= self.len//2:
            tmp_node, count  = self.head.next, 1
            while tmp_node:
              if count == target_idx:
                found_node = tmp_node
                break
              tmp_node = tmp_node.next
              count += 1
          #  else idx is greater than half the length of the queue, start from the tail and move towards the head
          else:
            tmp_node, count = self.tail.prev, self.len - 2
            while tmp_node:
              if count == target_idx:
                found_node = tmp_node
                break
              tmp_node = tmp_node.prev
              count -= 1
    return found_node


  ###    METHOD TO SET A VALUE ON A NODE BY INDEX IN QUEUE, VIA POSITIVE OR NEGATIVE INDICES    ####
  # time complexity: best case O(1); worst case and on average O(n)/2
  def _set(self, idx, val):
    response = False
    if type(idx) == int and type(val) == int:
      if self.len:
        tmp_node = self._get(idx)
        if tmp_node:
          tmp_node.val = val
          response = True
    return response


   ####################  METHOD TO REMOVE A NODE BY INDEX  ##########################################
  # time complexity: best cases O(1); worst and average cases O(n)/2

  def _remove(self, idx):
    found_node = None
    # IF VALID ARGUMENT IS PASSED IN  ##############################################################
    if type(idx) == int:
      #  REMOVE THE FIRST NODE   ###################################################################
      if idx == 0 or idx <= -self.len:
        found_node = self.shift()
      #  REMOVE THE LAST NODE   ####################################################################
      elif idx == -1 or idx >= self.len - 1:
        found_node = self._pop()
      #  WHEN DLL HAS THREE OR MORE NODES AND IT'S NOT THE FIRST OR LAST INDEX  ####################
      else:
        found_node = self._get(idx)
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

  def _printer(self):
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




my_queue = Queue()


# working
my_queue.unshift(1)
my_queue.unshift(2)
my_queue.unshift(3)
my_queue.unshift(4)
my_queue.unshift(5)

print('before: ')
my_queue._printer()

# working
# print('remove from the start of queue: ', my_queue._shift().val)
# print('remove from the start of queue: ', my_queue._shift().val)
# print('remove from the start of queue: ', my_queue._shift().val)
# print('remove from the start of queue: ', my_queue._shift().val)
# print('remove from the start of queue: ', my_queue._shift().val)
# print('remove from the start of queue: ', my_queue._shift())


##################################################################################################
##################################################################################################
##################################################################################################
#                        editing methods below



print('get node by index: ', my_queue._get(-20).val) #  first node
print('get node by index: ', my_queue._get(-5).val)  #  first node
print('get node by index: ', my_queue._get(0).val)   #  first node
print('get node by index: ', my_queue._get(2).val)   #  middle node
print('get node by index: ', my_queue._get(-3).val)  #  middle node
print('get node by index: ', my_queue._get(-1).val)  #  last node
print('get node by index: ', my_queue._get(4).val)   #  last node
print('get node by index: ', my_queue._get(20).val)  #  last node


print('set node by index: ', my_queue._set(-5, 100))
print('set node by index: ', my_queue._set(0, 100000000001))
print('set node by index: ', my_queue._set(4, 6789))
print('set node by index: ', my_queue._set(20, 4444))
print('set node by index: ', my_queue._set(2, 4444))
print('set node by index: ', my_queue._set(-2, 88))


print('removing node: ', my_queue._remove(-2).val)

print('after: ')
my_queue._printer()

