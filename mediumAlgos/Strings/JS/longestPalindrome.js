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

var longestPalindrome = function (s) {
  strLength = s.length;
  // helper function
  expand = (left, right) => {
    /* indixes are expanded and 1 is subtracted to return length */
    while (left >= 0 && right < strLength && s[left] === s[right]) {
      --left;
      ++right;
    }
    return right - left - 1;
  };

  // main funntion body
  let idxs = [0, 0];
  let oddPalLength = 0,
    evenPalLength = 0,
    half = 0;
  for (i = 0; i < strLength; ++i) {
    // odd length palindromes
    oddPalLength = expand(i, i);
    if (oddPalLength > idxs[1] - idxs[0]) {
      // expanding from the middle
      half = Math.floor(oddPalLength / 2);
      idxs = [i - half, i + half + 1];
    }
    // even length palindromes
    evenPalLength = expand(i, i + 1);
    if (evenPalLength > idxs[1] - idxs[0]) {
      // expanding from the middle
      half = Math.floor(oddPal / 2);
      idxs = [i - half + 1, i + half + 1];
    }
  }
  return s.slice(idxs[0], idxs[1]);
};

console.log(longestPalindrome('babad'));
