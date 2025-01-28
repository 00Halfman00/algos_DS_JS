/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not
use the same element twice.
You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]


Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// time complexity: O(n)
// this version of using a regular object as a hash map is slower than using a new Map object
/*
According to google search with AI assisting:
"In JavaScript, a regular object and a "new Map" object both store key-value pairs,
but the key difference is that a Map is generally faster for operations like adding,
removing, and accessing data, especially when dealing with frequent changes,
because it's specifically designed for efficient key-value lookups and maintains
insertion order, while a regular object is not optimized for these actions and has
limitations on key types (only allowing strings and symbols)."
*/
const twoSum = (nums, target) => {
  for (let i = 0, hash = {}; i < nums.length; ++i) {
    if (hash[nums[i]] !== undefined) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return [];
};

// time complexity: O(n)
// faster version than the one above because it uses a new Map object, which has faster insertion,
// deleting and retrieving of key/values
const twoSumV2 = (nums, target) => {
  for (let i = 0, hash = new Map(); i < nums.length; ++i) {
    if (hash.has(nums[i])) return [hash.get(nums[i]), i];
    hash.set(target - nums[i], i);
  }
  return [];
};

// time complexity: O(n)
// this version of using an array as a hash map is slower than using a new Map object
// but faster than using a regular object
const twoSumV3 = (nums, target) => {
  for (let i = 0, hash = []; i < nums.length; ++i) {
    if (hash[nums[i]] !== undefined) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return [];
};

const nums1 = [2, 7, 11, 15],
  target1 = 9;
const nums2 = [3, 2, 4],
  target2 = 6;
const nums3 = [3, 3],
  target3 = 6;

console.log(twoSum(nums1, target1)); // [0, 1]
console.log(twoSum(nums2, target2)); // [1, 2]
console.log(twoSum(nums3, target3)); // [0, 1]
