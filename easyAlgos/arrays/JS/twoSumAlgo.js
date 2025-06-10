/*
🧩 Problem:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Return the answer in any order.



Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

time complexity: O(n)
space complexity: O(n)

plan:
1.  create a hash table
2.  loop over the array of integers
3.  check if the second addend is in hash table
    a.  return the value for the second addend in the hash table and the current index
5.  enter the difference between target and current num in the hash table with the value of current index

*/

const twoSum = (nums, target) => {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; ++i) {
    // if the second addend is in the hash map, you found the two nums that add to target
    if (hashMap.has(nums[i])) return [hashMap.get(nums[i]), i];
    // set the difference, which is the second addend and the current num is the first,
    // as the key for the current index
    else hashMap.set(target - nums[i], i);
  }
};

const nums1 = [2, 7, 11, 15],
  target1 = 9;
console.log(twoSum(nums1, target1)); // [0, 1]

const nums2 = [3, 2, 4],
  target2 = 6;
console.log(twoSum(nums2, target2)); // [1, 2]

const nums3 = [3, 3],
  target3 = 6;
console.log(twoSum(nums3, target3)); // [0, 1]
