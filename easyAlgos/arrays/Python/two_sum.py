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


def two_sum(nums, target):
    differences = {}  # time complexity: O(1)
    for idx, num in enumerate(nums):  # time complexity: O(n)
        if num in differences:  # time complexity: O(1)
            return [differences[num], idx]  # time complexity: O(1)
        differences[target - num] = idx  # time complexity: O(1)
    return []  # time complexity: O(1)


# time complexity: O(n)
# space complexity: O(n)

nums1 = [2, 7, 11, 15]
target1 = 9  #  Output: [ [0,1] ]
nums2 = [3, 2, 4, 3]
target2 = 6  #  Output: [ [1,2]. [0,3] ]
nums3 = [3, 5, 3, 1]
target3 = 6  #  Output: [ [0,2], [1, 3] ]


print(two_sum(nums1, target1))
print(two_sum(nums2, target2))
print(two_sum(nums3, target3))
