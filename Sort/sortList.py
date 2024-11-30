"""
bubble_sort (this sorting algorithm was alreday improved by someone else)
  1. outer loop from end to beginning
  2. inner loop from beginning to end
  3. move larger numbers towards the end of list
  time complexity: O(n^2) in worst case; O(n) if list is mostly sorted
"""


nums1 = [23, 10, 9, 50, 3, 47]
#                          i
#        j
nums2 = [1, 2, 4, 3, 5, 7, 9]

def bubble_sort(nums_list):
  sorted = True
  for i in range(len(nums_list) -1, -1, -1):
    sorted = True
    for j in range(0, i):
      if nums_list[j] > nums_list[j + 1]:
        sorted = False
        nums_list[j], nums_list[j + 1] = nums_list[j + 1], nums_list[j]
    if sorted:
      break  # this line enables O(n) time complexity
  return nums_list

# print('before: ', nums2)
# bubble_sort(nums2)
# print('after: ', nums2)

"""
selection_sort (finally, this sorting algorithm is improved by yours truly)
  1.  outer loop from the beginning to the end
  2.  inner loop from the end to the beginning
  3.  move smaller numbers towards the start of list
time complexity: O(n^2) in worst case; O(n) if list is mostly sorted
"""
nums1 = [23, 10, 9, 50, 3, 47]
#        i
#                          j


def selection_sort(nums_list):
  sorted = True
  for i in range(0, len(nums_list)):
    sorted = True
    for j in range(len(nums_list) - 1, i, -1):
      if nums_list[j] < nums_list[j - 1]: # this line enables O(n) time complexity
        sorted = False
        nums_list[j], nums_list[j - 1] = nums_list[j - 1], nums_list[j]
    if sorted:
      break  # this line enables O(n) time complexity
  return nums_list

# print('before: ', nums1)
# selection_sort(nums1)
# print('after: ', nums1)


"""
insertion_sort (finally, this sorting algorithm was improved by yours truly)
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

nums1 = [23, 10, 9, 50, 3, 47]
#            i
#        i-1
#            piv

def insertion_sort(nums_list):
  if len(nums_list) > 1:
    piv = 0
    for i in range(1, len(nums_list)):
      if nums_list[i] < nums_list[i - 1]:
        piv = nums_list[i]
        for j in range(i - 1, -1, -1):
          if nums_list[j] > piv: break
          if nums_list[j] > nums_list[j + 1]:
            nums_list[j], nums_list[j + 1] = nums_list[j + 1], nums_list[j]


# print('before: ', nums2)
# insertion_sort(nums2)
# print('after: ', nums2)


###############################################################################
#############    end of time complexity O(n^2)     ############################
###############################################################################

"""
merge_sort
  1.  takes a list and finds the middle
  2.  recursively calls itself on the left side of the list and
      assigns the return value to a variable named left
      until it reaches a list of one element
  3.  recursively calls itself on the right side of the list and
      assigns the return value to a variable named right
      until it reaches a list of one element
  4.  returns a recursive call to function that merges two sorted list
      ( create merge_two_sorted_list helper function )
time complexity: O(n log n): space complexity: O(n)
"""


"""
merge_two_sorted_list helper function
  1.  takes two sorted list
  2.  loops over both list and returns a single sorted list
  time complexity: O(n)
"""



def merge_two_sorted_list(nums_list_one, nums_list_two):
  res, left, right = [], 0, 0

  while left < len(nums_list_one) and right < len(nums_list_two):
    if nums_list_one[left] < nums_list_two[right]:
      res.append(nums_list_one[left])
      left += 1
    else:
      res.append(nums_list_two[right])
      right += 1

  while left != len(nums_list_one):
    res.append(nums_list_one[left])
    left += 1
  while right != len(nums_list_two):
    res.append(nums_list_two[right])
    right += 1

  return res


def merge_sort(nums_list):
  if len(nums_list) <= 1:
    return nums_list

  mid = len(nums_list)//2
  left = merge_sort(nums_list[:mid])
  right = merge_sort(nums_list[mid:])

  return merge_two_sorted_list(left, right)



###############################################################################
#############    end of merge and helper function     #########################
###############################################################################


"""
quick_sort
   1. takes a list, a start and end indices
   2. checks if the start index is smaller than the end index
   3. If so, It starts by calling the pivot helper function (create pivot helper function)
      which will commence sorting in O(n) time complexity, returning a pivot index
   4. merge recursively calls itself with a left side and a right side of pivot index in list
time complexity: O(n log n)
"""

"""
pivot helper function
   1. takes a list, start and end indices
   2. picks an element to pivot, first pointer, inside the list
   3. creates a swap index, second pointer, to manipulate list
   4. moves all elements smaller than pivot element to the left side of the list
      (create swap helper function)
   5. swaps the pivot element in list with the last element that is smaller.
   6. returns the swapIndex
time complexity: O(n log n)
"""

"""
swap helper function
   1. takes a list and two indices.
   2. It swaps two elements at those indices in list with each other.
time complexity: O(1)
"""


def swap(intsList, idx1, idx2):
  intsList[idx1], intsList[idx2] = intsList[idx2], intsList[idx1]


#nums1 = [23, 10, 9, 50, 3, 47]
def pivot(nums_list, start_idx, end_idx):
  pivot_num = nums_list[start_idx]
  swap_idx = start_idx

  if len(nums_list) > 1:
    for i in range(start_idx + 1, end_idx + 1):
      if pivot_num > nums_list[i]:
        swap_idx += 1
        swap(nums_list, swap_idx, i)

    swap(nums_list, swap_idx, start_idx)
    return swap_idx

# print('before: ', nums1)
# pivot(nums1, 0, len(nums1) - 1)
# print('after: ', nums1)

def quick_sort(nums_list, start_idx, end_idx):
  if(start_idx < end_idx):
    pivot_idx = pivot(nums_list, start_idx, end_idx)
    quick_sort(nums_list, start_idx, pivot_idx - 1)
    quick_sort(nums_list, pivot_idx + 1, end_idx)

  return nums_list



# print(quick_sort(nums1, 0, len(nums1) - 1))

###############################################################################
#############    end of quick_sort and helper functions    ####################
###############################################################################


"""
  CREATE FUKNCTION NAMED radix_sort
    (great for softing numbers)

    1. takes a list of numbers named nums_list
    2. gets the length of the largest number in nums_list (create helper funciton named most_digits)
    3. outer loops with i over the length of the largest number
    4. creates a list of ten empty list, reprenting 0-9 indices
    5. inner loops over the length of the list and assigns each number
       in the list at index i to the proper 0-9 index list (create helper function named get_digit)
    6. before the end of each outer loop, dumps all the elements
       in all 0-9 list into one list: nums_list

    NOTE: CURRENTLY WORKING WITH POSITIVE NUMBERS
   nums1 = [230, 10, 9, 5000, 36, 0, 3, 47]
"""
nums3 = [30, 10, 90, 500, 3650, 0, 300, 47]

"""
most_digits
  1.  takes a list of numbers
  2.  returns the length of the largest number
"""

def most_digits(nums_list):
  largest_len = num_len = 0
  for i, num in enumerate(nums_list):
    num_len = len(str(num))
    if num_len > largest_len:
      largest_len = num_len
  return largest_len

# print('largest len: ', most_digits(nums3))

"""
get_base_10_digit
  1.  takes a number and an index
  2.  returns the base 10 digit at the index of num, starting from right to left
"""

def get_base_10_digit(num, idx):
  numStr = str(num)
  return int(numStr[len(numStr) - idx - 1])

print('digit at : ', get_base_10_digit(56789, 1))

def radix_sort(nums_list):
  largest_num_len = most_digits(nums_list)

  for i in range(largest_num_len):
    base_10_containers = [ [], [], [], [], [], [], [], [], [], [] ]

    for _, num in enumerate(nums_list):
      base_10_container =  base_10_containers[get_base_10_digit(num), i]
      base_10_container.push(num)

    tmp_container = []

    for _, container in enumerate(base_10_containers):
      tmp_container.extend(container)

    nums_list = tmp_container


  return nums_list
