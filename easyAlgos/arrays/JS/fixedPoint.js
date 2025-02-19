/*
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


Constraints:
1 <= arr.length < 104
-109 <= arr[i] <= 109


Follow up: The O(n) solution is very straightforward. Can we do better?
*/

var fixedPoint = function (arr) {
  minIdx = -1;
  for (let left = 0, right = arr.length - 1, mid; left <= right; ) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= mid) {
      if (mid === arr[mid]) minIdx = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
  return minIdx;
};

const arr1 = [-10, -5, 0, 3, 7]; // output: 3
const arr2 = [0, 2, 5, 8, 17]; // output: 0
const arr3 = [-10, -5, 3, 4, 7, 9]; // output: -1

console.log(fixedPoint(arr1));
console.log(fixedPoint(arr2));
console.log(fixedPoint(arr3));
