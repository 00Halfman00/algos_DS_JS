"""
  20. Valid Parentheses
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example :

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([])"
Output: true

Constraints:

 <= s.length <= 04
s consists of parentheses only '()[]{}'.
"""


def is_valid(string: str):
    hash_map = dict([("(", ")"), ("[", "]"), ("{", "}")])
    stack = []

    for char in string:
        if char in hash_map:
            stack.append(char)
        elif stack and hash_map.get(stack[-1]) == char:
            stack.pop()
        else:
            return False

    return not stack


print(is_valid("()[]{}"))  # true
print(is_valid("([])"))  # true
print(is_valid("){"))  # false
print(is_valid("(]"))  # false

print(is_valid(")(){}"))  # false

print(is_valid("))"))  # false
