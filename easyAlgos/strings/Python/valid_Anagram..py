"""
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
"""


def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):  # time complexity: O(1)
        return False
    buckets = [0] * 26  # time complexity: O(1)
    for i, _ in enumerate(s):  # time complexity: O(n)
        buckets[ord(s[i]) - 97] += 1  # time complexity: O(1)
        buckets[ord(t[i]) - 97] -= 1  # time complexity: O(1)
    return all(num == 0 for num in buckets)  # time complexity: O(1)


"""
The Optimal Solution (Under Specific Constraints):

Time Complexity: O(n) (linear)
Space Complexity: O(1) (constant) - Due to the fixed-size array, it uses constant space.
Direct Operations: It minimizes overhead by using direct array manipulation and character code operations.
Readability: While not as concise as the Counter version, it's still relatively easy to understand.


Why It's Better Than Counter (Under Specific Constraints):
While Counter is very pythonic and easy to use, it does have some overhead due to its higher level of abstraction.
The array-based approach is more direct and uses primitive operations, which can be faster in some cases, especially for larger inputs.

Constraints:
This optimized version relies on the constraint that the input strings contain only lowercase English letters.
If the character set were larger or unbounded, the array size would need to change, affecting space complexity.

In summary:
For the specific problem of determining if two strings are anagrams of lowercase English letters,
the array-based approach is indeed the most efficient in terms of both time and space complexity.
It is the most performant when the constraints of the problem are known.
It demonstrates the importance of considering specific problem constraints when choosing an algorithm.
"""
