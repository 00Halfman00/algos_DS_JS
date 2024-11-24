"""
bubble_sort (this sorting algorithm was alreday improved by someone else)
  1. outer loop from end to beginning
  2. inner loop from beginning to end
  3. move larger numbers towards the end of list
  time complexity: O(n^2) in worst case; O(n) if list is mostly sorted
"""


ints1 = [23, 10, 9, 50, 3, 47]
ints2 = [1, 2, 4, 3, 5, 7, 9]


def bubble_sort(intsList):
    sorted = True
    for i in range(len(intsList) - 1, -1, -1):
      sorted = True
      for j in range(0 , i):
        if intsList[j] > intsList[j + 1]:
           sorted = False
           intsList[j], intsList[j + 1] = intsList[j + 1], intsList[j]
      if sorted:  # this line makes it O(n) in certain cases
         break

# print('before: ', ints2)
# bubble_sort(ints2)
# print('after: ', ints2)


"""
selection_sort (finally, this sorting algorithm is improved by yours truly)
  1.  outer loop from the beginning to the end
  2.  inner loop from the end to the beginning
  3.  move smaller numbers towards the start of list
time complexity: O(n^2) in worst case; O(n) if list is mostly sorted
"""


def selection_sort(intsList):
   sorted = True
   for i in range(len(intsList)):
      sorted = True
      for j in range(len(intsList) - 1, i, -1):
         if intsList[j] < intsList[j - 1]:
            sorted = False
            intsList[j], intsList[j - 1] = intsList[j - 1], intsList[j]
      if sorted:  # this line makes it O(n) in certain cases
         print('list is sorted so breaking early')
         break


# print('before: ', ints2)
# selection_sort(ints2)
# print('after: ', ints2)


"""
insertion sort (finally, this sorting algorithm was improved by yours truly)
  1.  check if list has more than one element. If not, do nothing
  2.  outer loop from second element till the end of list
  3.  check if the element before the current element is larger, If not, continue
  4.  If so, get the current element
  5.  inner loop from the element just before current element,
      going in reverse towards the beginning of the list
  5.  check if element at j is greater than tmp and if
      the element at j is larger than the element infront of it, swap
time complexity: O(n^2) in worst case; O(n) if list is mostly sorted
"""
# ints1 = [23, 10, 9, 50, 3, 47]

def insertion_sort(intsList):
  if len(intsList) > 1:
    tmp = 0
    for i in range(1, len(intsList)):
        if intsList[i - 1 > intsList[i]]:  # this line makes it O(n) in certain cases
          tmp = intsList[i]
          for j in range(i - 1, -1, -1):
               if intsList[j] > tmp and intsList[j] > intsList[j + 1]:
                  intsList[j], intsList[j + 1] = intsList[j + 1], intsList[j]

# print('before: ', ints1)
# insertion_sort(ints1)
# print('after: ', ints1)


###############################################################################
#############    end of time complexity O(n^2)     ############################
###############################################################################

"""
merge_two_sorted_list helper function
  1.  takes two sorted list
  2.  loops and appends the smallest element from the two list into a new list
  time complexity: O(n)
"""

def merge_two_sorted_list(list1, list2):
   res, left, right, = [], 0, 0

   while left < len(list1) and right < len(list2):
      if list1[left] < list2[right]:
         res.append(list1[left])
         left += 1
      else:
        res.append(list2[right])
        right += 1

   while left != len(list1):
      res.append(list1[left])
      left += 1

   while right != len(list2):
      res.append(list2[right])
      right += 1

   return res

# print(merge_two_sorted_list([2, 4, 6, 8, 10, 12], [ 1, 3, 5]))

"""
merge_sort
  1.  takes an array and finds the middle
  2.  recursively calls itself on the left side of the list and
      assigns the return value to a variable named left
      until it reaches a list of one element
  3.  recursively calls itself on the right side of the list and
      assigns the return value to a variable named right
      until it reaches a list of one element
  4.  return a recursive call to merge_two_sorted_list
time complexity: O(n log n): space complexity: O(n)
"""
def merge_sort(intsList):
   if len(intsList) <= 1:
      return intsList

   mid = len(intsList)//2
   left = merge_sort(intsList[:mid])
   right = merge_sort(intsList[mid:])

   return merge_two_sorted_list(left, right)

# ints2 = [2, 4, 6, 8, 10, 12, 1, 3, 5]
# print(merge_sort(ints2))

###############################################################################
#############    end of merge and helper function     #########################
###############################################################################



"""
swap helper function
   1. takes a list and two indices.
   2. It swaps two elements at those indices in list with each other.
time complexity: O(1)
"""

def swap(intsList, idx1, idx2):
   intsList[idx1], intsList[idx2] = intsList[idx2], intsList[idx1]


"""
pivot helper function
   1. takes a list, start and end indices
   2. picks an element to pivot, first pointer, inside the list
   3. creates a swap index, second pointer, to manipulate list
   4. moves all elements smaller than pivot to left side, beginning, of the list
   5. swaps itself with the largest element that is smaller than the pivot element
   6. returns the swapIndex
   ints1 = [23, 10, 9, 50, 3, 47]
"""

def pivot(intsList = [], startIdx = 0, endIdx = 0):
   piv, swapIdx = intsList[startIdx], startIdx

   if len(intsList) > 1:
      for i in range(startIdx + 1, endIdx + 1):
         if piv > intsList[i]:
            swapIdx += 1
            swap(intsList, swapIdx, i)

      swap(intsList, swapIdx, startIdx)
   return swapIdx


# print(pivot(ints1, 0, len(ints1) - 1))
# print(ints1)


"""
quick_sort
   1. takes a list, a start and end indices
   2. checks if the start index is smaller than the end index
   3. If so, It starts by calling the pivot helper function with its passed in arguments
      which will commence sorting in O(n) time complexity, returning a pivot index
   4. merge recursively calls itself with a left side and a right side of pivot index in list
\
"""

def quick_sort(intsList = [], startIdx = 0, endIdx = 0):
   if startIdx < endIdx:
      pivotIdx = pivot(intsList, startIdx, endIdx)
      quick_sort(intsList, startIdx, pivotIdx - 1)
      quick_sort(intsList, pivotIdx + 1, endIdx)
   return intsList


print(quick_sort(ints1, 0, len(ints1) - 1))
