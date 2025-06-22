"""
Sliding Window - min_subarr_len

Write a function called min_subarr_len which accepts two parameters
- an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of
which the curr_sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.


Examples:
min_subarr_len([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
min_subarr_len([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
min_subarr_len([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
min_subarr_len([1,4,16,22,5,7,8,9,10],39) // 3
min_subarr_len([1,4,16,22,5,7,8,9,10],55) // 5
min_subarr_len([4, 3, 3, 8, 1, 2, 3], 11) // 2
min_subarr_len([1,4,16,22,5,7,8,9,10],95) // 0


Time Complexity - O(n)
Space Complexity - O(1)


THEORY
  A sliding windown reduces redundant computaions when dealing with contigous elements in an array.

STRATEGY
  Create sliding window.
  Outer loop with right_pointer adding to curr_sum.
  Inner loop with left_pointer subtracting from curr_sum.

DIAGRAM
  to be continued, later

PSEUDO STEPS
  (figure out core logic first, then refine for edge cases)
  1   Return zero if array is empty
  2   Outer loop with the right_pointer over entire array, expanding window size
      2.2   Inner loop with the left_pointer while the current window sum is >= target, contracting the window size
  4   Retur min window size

"""


def min_subarr_len(nums: list[int], target: int) -> int:
    if not nums:
        return 0

    min_len = float("inf")
    curr_sum = left_pointer = 0
    for right_pointer in range(len(nums)):
        curr_sum += nums[right_pointer]

        while curr_sum >= target:
            min_len = min(min_len, (right_pointer - left_pointer) + 1)
            curr_sum -= nums[left_pointer]
            left_pointer += 1

    return min_len if min_len != float("inf") else 0


# print(min_subarr_len([2, 3, 1, 2, 4, 3], 7))  # 2
print(min_subarr_len([2, 1, 6, 5, 4], 9))  # 2
print(min_subarr_len([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))  # 1
print(min_subarr_len([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))  # 3
print(min_subarr_len([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))  # 5
print(min_subarr_len([4, 3, 3, 8, 1, 2, 3], 11))  # 2
print(min_subarr_len([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))  # 0
