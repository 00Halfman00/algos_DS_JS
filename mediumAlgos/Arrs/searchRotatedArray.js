/*

33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1


Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

*/

//  nums before pivot: [0,1,2,3,4,5,6,7]  |  nums after pivot:  [4,5,6,7,0,1,2] | target = 0

const searchPivotedArray = (arr, tar) => {
  // first, do a binary search
  let left = 0,
    right = arr.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === tar) return mid;

    // second, check the left and right sides (left sides is arr[0] up to arr[mid - 1] | right side is arr[mid + 1] up to arr[right])
    // see if either side happens to be sorted
    if (arr[left] <= arr[mid])
      target >= arr[left] && target <= arr[mid] ? (right = --mid) : left++;
    if (arr[right] >= arr[mid])
      target <= arr[right] && target >= arr[mid] ? (left = ++mid) : right--;
  }
  return -1;
};

const nums1 = [0, 0, 0];
const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 2;

console.log(searchPivotedArray(nums1, target));
