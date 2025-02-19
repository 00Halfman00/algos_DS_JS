"""
1064. Fixed Point
Hint
Given an array of distinct integers arr, where arr is sorted in ascending order, return the smallest index i that satisfies arr[i] == i. If there is no such index, return -1.


Example 1:
Input: arr = [-10,-5,0,3,7]
Output: 3
Explanation: For the given array, arr[0] = -10, arr[1] = -5, arr[2] = 0, arr[3] = 3, thus the output is 3.


Example 2:
Input: arr = [0,2,5,8,17]
Output: 0
Explanation: arr[0] = 0, thus the output is 0.


Example 3:
Input: arr = [-10,-5,3,4,7,9]
Output: -1
Explanation: There is no such i that arr[i] == i, thus the output is -1.


raints:
1 <= arr.length < 104
-109 <= arr[i] <= 109


Follow up: The O(n) solution is very straightforward. Can we do better?
"""


def fixed_point(arr: list):
    left, right, min_idx, mid = 0, len(arr) - 1, -1, None
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] >= mid:
            if arr[mid] == mid:
                min_idx = mid
            right = mid - 1
        else:
            left = mid + 1
    return min_idx


arr1 = [-10, -5, 0, 3, 7]
#        l       m     r
#                   lm     min_ idx = mid
#                r  l      while left <= right: break
arr2 = [0, 2, 5, 8, 17]
arr3 = [-10, -5, 3, 4, 7, 9]

print(fixed_point(arr1))
print(fixed_point(arr2))
print(fixed_point(arr3))
