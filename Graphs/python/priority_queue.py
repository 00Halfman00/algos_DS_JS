"""
    TO BE USED BY GRAPHS AS A PRIORITY QUEUE FOR NODES
1.  create class Min_Binary_Heap_Priority_Queue
2.  It will be a min heap
3.  It will create and strore nodes in a list called nodes
4.  A node will be a dictionary that has a value as a string and a priority as an integer
5.  It will have methods to enqueue and dequeue nodes from the priority queue

time complexity: O(log n)
"""


class Min_Binary_Heap_Priority_Queue:
    def __init__(self):
        self.priority_queue = []

        """
    1.  IF BOTH ARGUMENTS ARE VALID
        2.    add the incoming node to the end of the PQ
    3.  IF THERE IS MORE THAN ONE NODE IN THE PRIORITY QUEUE
        4.  call the _heap_up method to sort the binary heap in correct order
    5.  return self
    """

    def enqueue(self, val, priority):
        if type(val) == str and type(priority) == int:
            self.priority_queue.append({"val": val, "priority": priority})
        if len(self.priority_queue) > 1:
            self.heap_up()
        return self

    """
    1.  CREATE A CHILD INDEX FROM THE LAST INDEX IN PQ AND USE IT TO CREATE PARENT INDEX
    2.    loop while parent index is zero or greater and the value at parent
          index is greater than the value at child's index
          3.  swap the nodes at those two indices
          4.  adjust the two indices for the next iteration
    """

    def heap_up(self):
        child_idx = len(self.priority_queue) - 1
        parent_idx = (child_idx - 1) // 2

        while (
            parent_idx >= 0
            and self.priority_queue[parent_idx]["priority"]
            > self.priority_queue[child_idx]["priority"]
        ):
            self.priority_queue[parent_idx], self.priority_queue[child_idx] = (
                self.priority_queue[child_idx],
                self.priority_queue[parent_idx],
            )
            child_idx = parent_idx
            parent_idx = (child_idx - 1) // 2

    """
    1.  IF THERE IS AT LEAST ONE NODE IN THE PQ
        2.  create a variable, call it min_node, and assign it the value of the first node in PQ
        3   if lenght of PQ is one
            4.  pop off the only node in PQ
        5.  else PQ has more than one node
            6.  assign the first node of the PQ the value of the last node in PQ
            7.  call the _heap_down helper funciton
        8.  return min_node
    """

    def dequeue(self):
        min_node = None
        if len(self.priority_queue):
            min_node = self.priority_queue[0]
            if len(self.priority_queue) == 1:
                self.priority_queue.pop()
            else:
                self.priority_queue[0] = self.priority_queue.pop()
                self.heap_down()
        return min_node

    """
    1.    create three indices: parent index, left child index, and a right child index
    2.    loop while the node's priority at the parent index is smaller than
            either child's value at their respecitive indices in the PQ and while child
            indices are not longer than the length of the PQ
            I.    find the child node with the smaller value
            II.   swap the two nodes at those indices in the PQ
            III.  make the parent index the smaller child's index and calculate the
                children's indices
    """

    def heap_down(self):
        parent_idx, left_child_idx, right_child_idx = 0, 1, 2

        while (
            left_child_idx < len(self.priority_queue)
            and self.priority_queue[parent_idx]["priority"]
            > self.priority_queue[left_child_idx]["priority"]
        ) or (
            right_child_idx < len(self.priority_queue)
            and self.priority_queue[parent_idx]["priority"]
            > self.priority_queue[right_child_idx]["priority"]
        ):
            smaller_child_idx = left_child_idx
            if (
                right_child_idx < len(self.priority_queue)
                and self.priority_queue[right_child_idx]["priority"]
                < self.priority_queue[left_child_idx]["priority"]
            ):
                smaller_child_idx = right_child_idx

            self.priority_queue[parent_idx], self.priority_queue[smaller_child_idx] = (
                self.priority_queue[smaller_child_idx],
                self.priority_queue[parent_idx],
            )

            parent_idx = smaller_child_idx
            left_child_idx = parent_idx * 2 + 1
            right_child_idx = left_child_idx + 1


# my_pq = Min_Binary_Heap_Priority_Queue()

# my_pq.enqueue("ten", 10)
# my_pq.enqueue("two", 2)
# my_pq.enqueue("three", 3)
# my_pq.enqueue("twelve", 12)
# my_pq.enqueue("six", 6)
# my_pq.enqueue("one", 1)
# my_pq.enqueue("five", 5)
# my_pq.enqueue("four", 4)
# print(my_pq.dequeue())
# print(my_pq.dequeue())
# print(my_pq.dequeue())
# print(my_pq.priority_queue)
