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


def is_valid1(string: str):
    hash_map = dict([("(", ")"), ("[", "]"), ("{", "}")])  # time complexity: O(1)
    stack = []  # time complexity: O(1)

    for char in string:  # time complexity: O(n)
        if char in hash_map:  # time complexity: O(1)
            stack.append(char)  # time complexity: O(1)
        elif stack and hash_map.get(stack[-1]) == char:  # time complexity: O(1)
            stack.pop()  # time complexity: O(1)
        else:
            return False

    return not stack  # time complexity: O(1)


def is_valid(s: str):
    stack = []
    if len(s) < 2 or len(s) % 2:
        return False
    for _, char in enumerate(s):
        if char == "(":
            stack.append(")")
        elif char == "}":
            stack.append("}")
        elif char == "[":
            stack.append("]")
        elif stack and char != stack.pop():
            return False
    return not stack


# time complexity: O(n)
# space complexity: O(n)

# print(is_valid("()[]{}"))  # true
# print(is_valid("([])"))  # true
# print(is_valid("){"))  # false
# print(is_valid("(]"))  # false

# print(is_valid(")(){}"))  # false

# print(is_valid("))"))  # false
print(is_valid(")(){}"))  # false
