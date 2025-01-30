/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagramof s, and false otherwise.

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

var isAnagram = function (one, two) {
  if (one.length === two.length) {
    const buckets = new Array(26).fill(0);
    for (let i = 0; i < one.length; ++i) {
      buckets[one.charCodeAt(i) - 97]++;
      buckets[two.charCodeAt(i) - 97]--;
    }
    return buckets.every((e) => e === 0);
  }
  return false;
};

const one = 'anagram';
const two = 'nagaram';

const three = 'ggii';
const four = 'eekk';

console.log(isAnagram(one, two));
