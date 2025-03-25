/*
268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.


Example 1:
Input: nums = [3,0,1]
Output: 2

Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.


Example 2:
Input: nums = [0,1]
Output: 2

Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
2 is the missing number in the range since it does not appear in nums.


Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
8 is the missing number in the range since it does not appear in nums.

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.


Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

*/
// Gauss' formula:  sum of natural numbers up to n  = n * (n + 1) / 2
var missingNumber = function (nums) {
  if (!nums.length) return 0; // edge case
  const length = nums.length; // get value of n
  // use Gauss' formula to find expected sum for all numbers in nums
  const length_sum = Math.floor((length * (length + 1)) / 2);
  // get actual sum of nums array
  let nums_sum = 0;
  for (const num of nums) {
    nums_sum += num;
  }
  return length_sum - nums_sum;
};

// time complexity: O(n)
// space complexity: O(1)
console.log(missingNumber([3, 0, 1])); // expect: 2
console.log(missingNumber([0, 1, 2, 4, 5])); // expect: 3
console.log(missingNumber([1, 2, 3, 4])); // expect: 0
