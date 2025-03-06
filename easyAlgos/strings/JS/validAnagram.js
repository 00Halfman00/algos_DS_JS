/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

//   JS: isAnagram (Fixed Sized Array)

var isAnagram = function (one, two) {
  if (one.length === two.length) {
    // time complexity: O(1)
    const buckets = new Array(26).fill(0); // time complexity: O(1)
    for (let i = 0; i < one.length; ++i) {
      // time complexity: O(n)
      buckets[one.charCodeAt(i) - 97]++; // time complexity: O(1)
      buckets[two.charCodeAt(i) - 97]--; // time complexity: O(1)
    }
    return buckets.every((e) => e === 0); // time complexity: O(1)
  }
  return false; // time complexity: O(1)
};

// time complexity: O(n)
// space complexity: O(1)

const s1 = 'anagram',
  t1 = 'nagaram';

console.log(isAnagram(s1, t1));
