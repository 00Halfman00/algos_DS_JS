

"""
bubble sort
  1. loop from end to beginning
  2. loop from beginning to end
  3. move larger number towards the end of list
  time complexity: O(n^2)
"""

ints1 = [23, 10, 9, 50, 3, 47]

def bubble_sort(intsArr):
    for i in range(len(intsArr) - 1, -1, -1):
      for j in range(0 , i):
        if intsArr[j] > intsArr[j + 1]:
           intsArr[j], intsArr[j + 1] = intsArr[j + 1], intsArr[j]


# print('before: ', ints1)
# bubble_sort(ints1)
# print('after: ', ints1)



"""
selectionSort
  1.  outer loop from the beginning to the end
  2.  inner loop from the end to the beginning
  3.  move smaller numbers towards the start of list
time complexity: O(n^2)
"""

def selection_sort(intsArr):
   for i in range(len(intsArr)):
      for j in range(len(intsArr) - 1, i, -1):
         if intsArr[j] < intsArr[j - 1]:
            intsArr[j], intsArr[j - 1] = intsArr[j - 1], intsArr[j]


# selection_sort(ints1)
# print('before: ', ints1)
# selection_sort(ints1)
# print('after: ', ints1)


"""
insertion sort
  1.  check if list has 2 or more elements. If not, do nothing
  2.  outer loop from second element till the end of list
  3.  check if the current element is smaller than element before it, If not, continue
  4.  get the current element
  5.  inner loop from the element just before current element,
      going in reverse towards the first element in list
  5.  check if element at j is greater than tmp
  6.  if the element at j is larger than the element infront of it, swap
time complexity: O(n^2)
"""
# ints1 = [23, 10, 9, 50, 3, 47]
def insertion_sort(intsArr):
  if len(intsArr) > 1:
    tmp = 0
    for i in range(1, len(intsArr)):
        if intsArr[i] < intsArr[i - 1]:
          tmp = intsArr[i]
          for j in range(i - 1, -1, -1):
               if intsArr[j] > tmp:
                if intsArr[j] > intsArr[j + 1]:
                    intsArr[j], intsArr[j + 1] = intsArr[j + 1], intsArr[j]


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
  4.  return a recursive call
"""
def merge_sort(intsArr):
   if len(intsArr) <= 1:
      return intsArr

   mid = len(intsArr)//2
   left = merge_sort(intsArr[:mid])
   right = merge_sort(intsArr[mid:])

   return merge_two_sorted_list(left, right)

ints2 = [2, 4, 6, 8, 10, 12, 1, 3, 5]
print(merge_sort(ints2))
