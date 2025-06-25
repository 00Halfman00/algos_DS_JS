"""

Frequency Counter / Multiple Pointer - find_pair

Given an unsorted array and a number n, find if there exists a pair of elements
in the array whose difference is n. This function should return true if the pair
exists or false if it does not.

find_pair([6,1,4,10,2,4], 2) // true
find_pair([8,6,2,4,1,0,2,5,13],1) // true
find_pair([4,-2,3,10],-6) // true
find_pair([6,1,4,10,2,4], 22) // false
find_pair([], 0) // false
find_pair([5,5], 0) // true
find_pair([-4,4], -8) // true
find_pair([-4,4], 8) // true
find_pair([1,3,4,6],-2) // true
find_pair([0,1,3,4,6],-2) // true
find_pair([1,2,3], 0) // false


Part 1 - solve this with the following requirements:
Time Complexity Requirement - O(n)
Space Complexity Requirement - O(n)


Part 2 - solve this with the following requirements:
Time Complexity Requirement - O(n log n)
Space Complexity Requirement - O(1)

MY THOUGHTS:
  Part 1 can be solved by using the two sum approach, but more like two diff in this case.
  Part 1 can be solved by using a hash table, not so much a frequency count.

  Part 2 can be solved by sorting the array, first. Hence, time complexity: O(n)
  Part 2 can be solved by using a sliding window strategy after array is sorted.



THEORY
  If one can make keys out of each element, then one can find the difference
  by adding the difference to the current number.

  If num + diff in hash_map or  sum - diff in hash_map




PSEUDO STEPS
  1   Check if the array has at least two elements
  2   Create a hash map
  3   Iterate over array
      3.1   If num + diff in hashMap or num - diff in hashMap
            3.1.1   return True
      3.2   Store the current number as a key in hash map with any value
  4   Return False

"""


def find_pair(nums: list[int], diff: int) -> bool:
    if len(nums) > 1:
        hash_map = {}
        for num in nums:
            if num - diff in hash_map:
                return True
            if num + diff in hash_map:
                return True
            hash_map[num] = True
    return False


# print(find_pair([6, 1, 4, 10, 2, 4], 2))  # true
# print(find_pair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1))  # true
print(find_pair([4, -2, 3, 10], -6))  # true
print(find_pair([6, 1, 4, 10, 2, 4], 22))  # false
print(find_pair([], 0))  # false
print(find_pair([5, 5], 0))  # true
print(find_pair([-4, 4], -8))  # true
print(find_pair([-4, 4], 8))  # true
print(find_pair([1, 3, 4, 6], -2))  # true
print(find_pair([0, 1, 3, 4, 6], -2))  # true
print(find_pair([1, 2, 3], 0))  # false
