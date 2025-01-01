/*

  75. Sort Colors

Given an array nums with n objects colored red, white, or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.


Example 1:      /////////////////////////////////////////
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:      /////////////////////////////////////////
Input: nums = [2,0,1]
Output: [0,1,2]


Constraints:    /////////////////////////////////////////
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

*/

/*
  /////////////////        TWO PASS SOLUTION/ALGORITHM       /////////////////////////////
  NOTE: Being that the colors being sought are just three: red, white and blue,
        one should be able to keep track of the occurences of these three colors.
  1.    Create three variables called red white and blue and initiate them with zero
  2.    Traverse the array and count the number of times each color appears
  3.    Now loop over the sum of those colors or the length of the array
  4.    Do the math: Unless you are a mathematician, even though it is mere addition,
        this form of thinking is not second nature to the human mind.
*/

const softColors = (intsArr) => {
  // part I ( time complexity: O(n) )
  let red = 0,
    white = 0,
    blue = 0;
  // we just need the element, so iterate using the elements in the array
  for (let color of intsArr) {
    if (color === 0) ++red;
    else if (color === 1) ++white;
    else ++blue;
  }

  // part II ( time complexity: O(n) )
  let color = 0;
  // we just need the index, so iterate using the indexes in the array
  for (let i in intsArr) {
    // adjust color to be the right value at the given portion of the array
    if (+i === red) ++color;
    if (+i === red + white) ++color;
    // assign to array in place
    if (color === 0) intsArr[i] = 0;
    else if (color === 1) intsArr[i] = 1;
    else intsArr[i] = 2;
  }
};

// so overall time complexity: O(n + n), which comes down to O(n)
// space complexity: O(1)

/////////////////////       ONE PASS SOLUTION/ALGORITHM     /////////////////////////////
/*
  1.  CREATE THREE POINTERS:
      2.  LEFT TO KEEP TRACK OF ZEROS
      3.  CURRENT TO KEEP TRACK OF THE CURRENT ELEMENT
      4.  RIGHT TO KEEP TRACK OF TWOS
  5.  TRAVERSE THE ARRAY OF INTEGERS
      6.  IF YOU SEE A ZERO MOVE IT TO THE LEFT
      7.  IF YOU SEE A TWO MOVE IT TO THE RIGHT
      8.  ELSE MOVE CURRENT ONE INDEX FORWARD

      Input: nums = [2,0,2,1,1,0]
      Output:       [0,0,1,1,2,2]


*/

const softColorsV2 = (intsArr) => {
  for (let left = 0, curr = 0, right = intsArr.length - 1; curr <= right; ) {
    if (intsArr[curr] === 0) {
      [intsArr[left++], intsArr[curr++]] = [intsArr[curr], intsArr[left]];
    } else if (intsArr[curr] === 2) {
      [intsArr[curr], intsArr[right--]] = [intsArr[right], intsArr[curr]];
    } else ++curr;
  }
};

let nums1 = [2, 0, 2, 1, 1, 0]; // expect: [0,0,1,1,2,2]
let nums2 = [2, 0, 1]; // expect: [0,1,2]
let nums3 = [2, 2];
let nums4 = [1, 0];
let nums5 = [2, 1];
let nums6 = [1, 2, 0];
softColorsV2(nums1);
softColorsV2(nums6);
// softColors(nums2);
console.log(nums1);
console.log(nums6);
// console.log(nums2);
