"""
  CREATE FUKNCTION NAMED radix_sort
    (great for softing numbers)

    1. takes a list of numbers named intsList
    2. gets the length of the largest number in intsList (create helper funciton named most_digits)
    3. outer loops over the length of the largest number
    4. creates a list of ten empty list, reprenting 0-9 indices
    5. inner loops over the length of the list and assigns each number
       in the list at outer index to the proper 0-9 index list (create helper function named get_digit)
    6. before the end of each outer loop, dumps all the elements
       in all 0-9 list into one list: intsList

    NOTE: CURRENTLY WORKING WITH POSITIVE NUMBERS
   nums1 = [230, 10, 9, 5000, 36, 0, 3, 47]
"""
nums1 = [230, 10, 9, 5000, 36, 0, 3, 47]

"""
most_digits
  1.  takes a list of numbers
  2.  returns the length of the largest number
"""
def most_digits(numsList):
  length = 0
  for i, num in enumerate(numsList):
    if len(str(num)) > length:
      length = len(str(num))
  return length


"""
get_base_10_digit
  1.  takes a number and and index
  2.  returns the base 10 digit at the index, starting from right to left
"""

def get_base_10_digit(num, idx):
  numStr = str(num)
  if idx < len(numStr):
    base_10_digit = numStr[len(numStr) - idx - 1]
    return int(base_10_digit)
  return 0


def radix_sort(numsList):
  largest_num_length = most_digits(numsList)

  for i in range(largest_num_length):
    base_10_containers = [[], [], [], [], [], [], [], [], [], []]

    for _, num in enumerate(numsList):
      base_10_digit = get_base_10_digit(num, i)
      base_10_containers[base_10_digit].append(num)

    tmpList = []
    for k, base_10_container in enumerate(base_10_containers):
      tmpList.extend(base_10_container)

    numsList = tmpList

  return numsList


print(radix_sort(nums1))
