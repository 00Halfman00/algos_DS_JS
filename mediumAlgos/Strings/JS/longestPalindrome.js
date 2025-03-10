/*
5. Longest Palindromic Substring

Hint
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.


Example 2:
Input: s = "cbbd"
Output: "bb"


Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

// var longestPalindrome = function (s) {
//   // cleaning up string with .toLowerCase and .replace makes O(n) + O(n)
//   s = s.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '');
//   let res = '';
//   // expand's time complexity: O(n) due to while loop
//   var expand = function (left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       --left;
//       ++right;
//     }
//     return s.substring(left + 1, right);
//   };
//   let oddPal, evenPal;
//   // for loop's time complexity: O(n)
//   for (let i = 0; i < s.length; ++i) {
//     oddPal = expand(i, i); // time complexity: O(n) for each call
//     if (oddPal.length > res.length) res = oddPal;
//     evenPal = expand(i, i + 1); // time complexity: O(n) for each call
//     if (evenPal.length > res.length) res = evenPal;
//   }
//   return res;
// };
// // thus, the for loop using the while loop at each iteration makes
// // time complexity: O(n^2)
// // use of primitives to store odds and even palindromes makes
// // space complexity: O(1)

const longestPalindrome = (s) => {
  // helper function; time complexity: O(n)
  const expand = (leftIdx, rightIdx) => {
    /*  expand palindrome indexes and return their length */
    while (leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
      --leftIdx;
      ++rightIdx;
    }
    return rightIdx - leftIdx - 1;
  };

  // function's main body time complexity: O(n)
  let startIdx = 0,
    endIdx = 0,
    half = 0,
    oddPalLength = 0,
    evenPalLength = 0;
  for (let i = 0; i < s.length; ++i) {
    oddPalLength = expand(i, i);
    if (oddPalLength > endIdx - startIdx) {
      half = Math.floor(oddPalLength / 2);
      startIdx = i - half;
      endIdx = i + half + 1;
    }
    evenPalLength = expand(i, i + 1);
    if (evenPalLength > endIdx - startIdx) {
      half = Math.floor(evenPalLength / 2);
      startIdx = i - half + i;
      endIdx = i + half + i;
    }
  }
  return s.slice(startIdx, endIdx);
};

console.log(longestPalindrome('babad'));
