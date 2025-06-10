"""
215. Kth Largest Element in an Array

Given an integer array nums and an integer k,
return the kth largest element in the array.

Note that it is the kth largest element in the sorted order,
not the kth distinct element.

Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
"""


def findKthLargest(nums: list[int], k: int) -> int:
    """
    PSEUDOCODE
    1   Reassign k to be the kth largest index of a sorted list
    2   Declare and initialize the quick_select recursive function
        2.1 Takes two arguments: left and right indexes
        2.2 Declares and initializes two variables: pointer with the value of left(index),
            and pivot with the value of the element(number) in nums at right(index)
        2.3 Iterates over nums array, starting at left(index) and up to right(index)
            2.3.1   If current element(number) is less than or equal to pivot
                    2.3.1.1 swap the element at pointer index with the element at right index
                    2.3.1.2 increase the value of the pointer index by 1
        2.4 swap the element at the pointer index with element at the right index (left, pointer, right)
        2.5 If p(index) is less than k(index)
            2.5.1   return call to quick_select, passing in p + 1 and right
        2.6 Else if p(index) is greater than k(index)
            2.6.1   return call to quicselect, passgin in left and p - 1
        2.7 Else
            2.7.1   return the element at the pointer index
    3   return call to qucickSelect, passing in zero and index of last element in nums array
    """
    k = len(nums) - k

    def quickSelect(left: int, right: int) -> int:
        pointer, pivot = left, nums[right]

        for i in range(left, right):
            if nums[i] <= pivot:
                nums[i], nums[pointer] = nums[pointer], nums[i]
                pointer += 1

        nums[pointer], nums[right] = nums[right], nums[pointer]

        if pointer < k:
            return quickSelect(pointer + 1, right)
        elif pointer > k:
            return quickSelect(left, pointer - 1)
        else:
            return nums[pointer]

    return quickSelect(0, len(nums) - 1)


nums1 = [3, 2, 1, 5, 6, 4]
k1 = 2
# nums = [3,2,1,5,6,4], k = 2  ->  [1,2,3,4,5,6], kth largest number: len(nums) - k
# counting from end                         2,1
#                                           5
nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]
k2 = 4
# nums = [3,2,3,1,2,4,5,5,6], k = 4  ->  sorted array [1,2,2,3,3,4,5,5,6], kth largest: len(nums) - k
# counting from end                                              4,3,2,1
#                                                                4
# print(findKthLargest(nums1, k1))  # 5
print(findKthLargest(nums2, k2))  # 4
