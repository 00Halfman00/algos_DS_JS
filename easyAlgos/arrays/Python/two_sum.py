"""

1. Two Sum
Solved
Easy
Hint

Given an array of integers nums and an integer target, return indices of the two numbers such that
they add up to target. You may assume that each input would have exactly one solution, and you may
not use the same element twice.

You can return the answer in any order.

Example 1: #################################################################################
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2: #################################################################################
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3: #################################################################################
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

"""

"""
  note: algorithm has been modified to return a list of multiple list of possible two-pair solutions
  MAIN FUNCTION ( parameters: nums_list (list of integers), target_num (integer) )
  1.  cratea a variable, call it hash_map and inititate it with a empty dictionary
  2.  create a variable, call it results, and initiate it with a empty list
  3.  traverse the list of integers
      4.  check if the current element in the list is a key in the dictionary, hash_map
          5.  append to results a list containing the value of current element in the dictionary
              and the current index
      6.  find the difference between the target integer and the current integer and assingn
          the difference to a variable, call it difference
      7.  enter difference as a key in the dictionary, hash_map, and enter the value of the current index
  8. return the list: results

  time complexity: O(n)
"""
def two_sum(nums_list, target_num):
  hash_map, results  = {}, []
  for idx, num in enumerate(nums_list):
    if num in hash_map:
      results.append([hash_map[num], idx])
    difference = target_num - num
    hash_map[difference] = idx
  return results




nums1 = [2,7,11,15]
target1 = 9       #  Output: [ [0,1] ]
nums2 = [3,2,4,3]
target2 = 6       #  Output: [ [1,2]. [0,3] ]
nums3 = [3,5,3,1]
target3 = 6       #  Output: [ [0,2], [1, 3] ]


print(two_sum(nums1, target1))
print(two_sum(nums2, target2))
print(two_sum(nums3, target3))
