"""
Multiple Pointers - is_subsequence

Write a function called is_subsequence which takes in two strings and
checks whether the characters in the first string form a subsequence
of the characters in the second string. In other words, the function
should check whether the characters in the first string appear
somewhere in the second string, without their order changing.

Examples:

is_subsequence('hello', 'hello world')  true
is_subsequence('sing', 'sting')  true
is_subsequence('abc', 'abracadabra')  true
is_subsequence('abc', 'acb')  false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

THEORY

STRATEGY
  Use a left pointer to iterate over the first string and a right pointer to iterate
  over the second string. Both pointers will be initiated to 0.
  Loop over the second string. if the character at left index in the first string equasl
  the current character at the second string, increase left pointer. If left pointer
  equals the length of the first string, a subsequence has been found.


PSEUDO STEPS

1   Check if the length of the first string is less than the second string's length
2   Create a left pointer with a value of zero
3   Loop over the second string
    3.1 If both characters are the same
        3.1.1   Increment the left pointer
    3.2   If the value of left equals the length of the first string
          3.2.1   Return True




"""


def is_subsequence(firstStr: str, secondStr: str) -> bool:
    if len(firstStr) <= len(secondStr):
        left = 0
        firstStrLen = len(firstStr)
        for right in range(len(secondStr)):
            if firstStr[left] == secondStr[right]:
                left += 1
            if left == firstStrLen:
                return True
    return False


print(is_subsequence("hello", "hello world"))  # true
print(is_subsequence("sing", "sting"))  # true
print(is_subsequence("abc", "abracadabra"))  # true
print(is_subsequence("abc", "acb"))  # false (order matters)
