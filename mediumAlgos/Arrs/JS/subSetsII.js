/*
90. Subsets II
Medium

Given an integer array nums that may contain duplicates,
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
Return the solution in any order.



Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]


Example 2:
Input: nums = [0]
Output: [[],[0]]


Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10

*/

const container = [];

var subsetsWithDup = function (subSet, numsArr) {
  if (!numsArr.length) container.push(subSet);
  else {
    subSet.push(numsArr.shift());
    return subsetsWithDup(subSet, numsArr);
  }
  return container;
};

const nums1 = [1, 2, 2]; // [[],[1],[1,2],[1,2,2],[2],[2,2]]

console.log(subsetsWithDup([], nums1));
