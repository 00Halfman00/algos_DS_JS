"""
Sliding Window - max_subarray_sum

Given an array of integers and a len, write a function called max_subarray_sum,
which finds the maximum sum of a subarray with the length of the len passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array,
but [100, 300] is not.

max_subarray_sum([100,200,300,400], 2) // 700
max_subarray_sum([1,4,2,10,23,3,1,0,20], 4)  // 39
max_subarray_sum([-3,4,0,-2,6,-1], 2) // 5
max_subarray_sum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
max_subarray_sum([2,3], 3) // null


Constraints:
Time Complexity - O(N)
Space Complexity - O(1)


THEORY
  A sliding windown reduces redundant computaions when dealing with contigous elements in an array.

STRATEGY
  Get the value of the elements of size window from array, then create a sliding window,
  calculating accordingly to get the max sum


PSEUDO STEPS
  1 Iterate over array and have max_sum variable be the addition of those elements of size len
  2 Next, iterate over the array again with two pointers left_pointer being 0 and right_pointer being len value
    2.1 make curr_max be the subtraction of the left_pointer pointer/idex at nums from max_sum
        and the addition of the right_pointer pointer/index at array from max_sum
    2.2 If curr_max is greater than max_sum
        2.2.1 make max_sum equal curr_max
    2.3 increment right pointer by one
  3 Return max_sum

"""


def max_subarray_sum(nums: list[int], sub_len: int) -> int:
    if len(nums) >= sub_len:
        # STEP 1
        max_sum = 0
        nums_len = len(nums)
        for i in range(sub_len):
            max_sum += nums[i]
        # STEP 2
        curr_max = max_sum
        right_pointer = sub_len
        for left_pointer in range(0, (nums_len - sub_len)):
            curr_max -= nums[left_pointer]
            curr_max += nums[right_pointer]
            if curr_max > max_sum:
                max_sum = curr_max
            right_pointer += 1
        return max_sum


print(max_subarray_sum([100, 200, 300, 400], 2))  # 700
print(max_subarray_sum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))  # 39
print(max_subarray_sum([-3, 4, 0, -2, 6, -1], 2))  # 5
print(max_subarray_sum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))  # 5
print(max_subarray_sum([2, 3], 3))  # None
