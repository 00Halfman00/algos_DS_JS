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

var longestPalindrome = function (s) {
  let check = function (i, j) {
    let left = i;
    let right = j - 1;

    while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  };

  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      if (check(start, start + length)) {
        return s.substring(start, start + length);
      }
    }
  }

  return '';
};

console.log(longestPalindrome('babad'));
