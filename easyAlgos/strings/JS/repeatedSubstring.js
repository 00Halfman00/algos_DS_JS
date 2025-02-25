/*
459. Repeated Substring Pattern
Easy
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.


Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.

1.  If there is indeed a repeating pattern in the string,
    one should find it by concatenating the string to itself and
    by removing the first and last character of that merge.
2.  if the pattern occurs only once, then it is not repeating.
3.  But if the pattern appears more than once, then it is true
4.  by cutting of the first and last character, one eliminates one
    instance of the pattern, yet is there another instance, a repeating pattern?
*/

const string1 = 'abab';

var repeatedSubstringPattern = function (s) {
  const t = s + s;
  return t.substring(1, t.length - 1).includes(s) ? true : false;
};

console.log(repeatedSubstringPattern(string1));
