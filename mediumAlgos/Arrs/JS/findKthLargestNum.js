/*
215. Kth Largest Element in an Array

Medium
Topics
Companies

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting? // What they mean is not sorting like its
// normally done but in some other thing that is obviously a way of sorting or
// how could you solve this: Magic? I don't think so.

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5


Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

//           METHOD ONE: USING SORT()

var findKthLargest_v1 = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};

//          METHOD 2: USING COUNT APPROACH

var findKthLargest_v2 = function (nums, k) {
  let minNum = Infinity,
    maxNum = -Infinity;
  for (const num of nums) {
    // find smallest and largest numbers in array
    if (num < minNum) minNum = num;
    if (num > maxNum) maxNum = num;
  }
  const size = maxNum - minNum + 1;
  const countHash = new Array(size).fill(0); // track frequency for each num
  for (const num of nums) {
    countHash[num + -minNum]++;
  }

  let findK = 0;
  for (let i = countHash.length - 1; i >= 0; --i) {
    findK += countHash[i]; // add frequency of num till k is found
    if (findK >= k) return i + minNum;
  }

  return -1;
};

//            METHOD 3: USING QUICK SELECT, WHICH IS SIMILAR TO QUICKSORT
/*
  1   Reassign k to be the kth index if the array was in ascending order
  2   Define quickSelect recursive function that takes a left and right indexes as parameters
      2.1   Declare a pointer variable and initiate it to the value of the left parameter and a pivot pointer initiated to the value of the element in nums at the right parameter
      2.2   Iterate over the nums array
          2.2.1   If the current element is less than or equal to the pivot element
                2.2.1.1   swap the element in the nums array at the pointer index with the element at current index
                2.2.1.2   increment the pointer variable by one
      2.3.  Swap the elment in the array at the pointer index/value with the element at the right index/value
      2.4.  If the value of p is less than k
          2.4.1   return quickSelect with p + 1 and r
      2.5.  Else if the value of p is greater than k
          7.1   return quickSelect with p - 1 and r
      2.6.  Else return p
  3   Call quickSelect with zero and the index of the last element in nums

*/

const findKthLargest_v3 = function (nums, k) {
  k = nums.length - k;

  const quickSelect = (l, r) => {
    let p = l,
      pivot = nums[r];

    for (let i = l; i < r; ++i) {
      if (nums[i] < pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        ++p;
      }
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];

    if (p < k) return quickSelect(p + 1, r);
    else if (p > k) return quickSelect(l, p - 1);
    else return nums[p];
  };

  return quickSelect(0, nums.length - 1);
};

const nums1 = [3, 2, 1, 5, 6, 4],
  k1 = 2; // Output: 5
/*
  sorted = [1, 2, 3, 4, 5, 6]
  nums = [3, 2, 1, 5, 6, 4], k = 2
  minNum = 1, maxNum = 6, size = 6
  countHash = [0, 0, 0, 0, 0, 0]
               1, 1, 1, 1, 1, 1
  k = 1, i = 5
  k = 2, i = 4
  return 4 + 1 = 5

*/

const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k2 = 4; // Output: 4
/*
sorted = [1, 2, 2, 3, 3, 4, 5, 5, 6]
nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
minNum = 1, maxNum = 6, size = 6
countHash = [0, 0, 0, 0, 0, 0]
frequencies [1, 2, 2, 1, 2, 1]
   indexes   0, 1, 2, 3, 4, 5
k = 1, i = 5
k = 3, i = 4
k = 4, i = 3
return 3 + 1 = 4
*/

var findKthLargest = function (nums, k) {
  k = nums.length - k;
  const quickSelect = (l, r) => {
    let p = l,
      pivot = nums[r];

    for (let i = l; i < r; ++i) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        ++p;
      }
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];

    if (p < k) return quickSelect(p + 1, r);
    else if (p > k) return quickSelect(l, p - 1);
    else return nums[p];
  };

  return quickSelect(0, nums.length - 1);
};

// console.log(findKthLargest_v3(nums1, k1));
console.log(findKthLargest(nums1, k1));
