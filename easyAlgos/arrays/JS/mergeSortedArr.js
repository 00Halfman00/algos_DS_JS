/*
88. Merge Sorted Array
Easy


Hint  ##############################################################################################
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single
array sorted in non-decreasing order. The final sorted array should not be returned by the function,
but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
where the first m elements denote the elements that should be merged, and the last n elements are set to 0
and should be ignored. nums2 has a length of n.


Example 1:   #######################################################################################
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


Example 2:   #######################################################################################
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].


Example 3:   #######################################################################################
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


Constraints:   #####################################################################################
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109


Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/*
  1.  create a variable, call it temp, and initiate it with the value of nums1
  2.  create three variables, call them left and right and count, and inititate both to zero
  3.  loop while left does not equal m and while irght does not equal n
      4.  check if tmp at left is less than or equal to nums2 at right
          5.  assign nums1 at count to be tmp at left
          6.  increase left by one
      7.  else
          8.  assign nums1 at count to be nums2 at right
          9.  increase right by one
      8.  increase count by one
  9.  while left < m
      10. assign nums1 at count to be tmp at left
          11. increase left and count by one
  11. while right < n
      12. assing nums1 at count to be nums2 at right
          13. increase right and count by one
*/
var merge = function (nums1, m, nums2, n) {
  const tmp = nums1.slice(0, m);
  let left = 0,
    right = 0,
    count = 0;
  while (left !== m && right !== n) {
    if (tmp[left] <= nums2[right]) {
      nums1[count] = tmp[left];
      ++left;
    } else {
      nums1[count] = nums2[right];
      ++right;
    }
    ++count;
  }

  while (left < m) {
    nums1[count] = tmp[left];
    ++count;
    ++left;
  }

  while (right < n) {
    nums1[count] = nums2[right];
    ++count;
    ++right;
  }
};

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

const ints1 = [1, 2, 3, 0, 0, 0];
merge(ints1, 3, [2, 5, 6], 3);
console.log('ints1: ', ints1);

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

const ints2 = [1];
merge(ints2, 1, [], 0);
console.log('ints2: ', ints2);

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

const ints3 = [0];
merge(ints3, 0, [1], 1);
console.log('ints3: ', ints3);
