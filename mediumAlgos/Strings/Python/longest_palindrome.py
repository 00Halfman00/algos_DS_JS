"""
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
"""

# efficient
# def longestPalindrome(s: str) -> str:
#   res = ''
#   # helper function
#   def expand(left, right):
#     pass
#   # main function body
#   odd_pal, even_pal = 0, 0
#   for i in range(len(s)):
#     # odd palindrome
#     odd_pal = expand(i, i)
#     if len(odd_pal) > len(res): res = odd_pal
#     # even palindrome
#     even_pal = expand(i, i + 1)


# print(longestPalindrome("babad"))
import re


# more efficient
def longestPalindrome(s: str) -> str:
    # cleaning up string with .lower and .replace makes O(n) + O(n)
    s = re.sub("[^a-zA-Z0-9]", "", s.lower().replace(" ", ""))
    # avoiding repeated function calls to len()
    str_len = len(s)

    # expand's time complexity: O(n) due to while loop
    def expand(left, right):
        """
        indixes are expanded and 1 is subtracted to return length,

        """
        while left >= 0 and right < str_len and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    res, odd_pal_len, even_pal_len, half = [0, 0], 0, 0, 0
    # for loop's time complexity: O(n)
    for i in range(str_len):
        odd_pal_len = expand(i, i)  # time complexity: O(n) for each call
        if odd_pal_len > res[1] - res[0]:
            # expanding from the middle
            half = odd_pal_len // 2
            res = [i - half, i + half + 1]
        # time complexity: O(n)
        even_pal_len = expand(i, i + 1)  # time complexity: O(n) for each call
        if even_pal_len > res[1] - res[0]:
            # expanding from the middle
            half = even_pal_len // 2
            res = [i - half + 1, i + half + 1]
    return s[res[0] : res[1]]


# the for loop using the while loop at each iteration makes
# time complexity: O(n^2)
# use of variables to store data makes
# space complexity: O(1)


print(longestPalindrome("babad"))
