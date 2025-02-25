/*
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
*/

const isValid = function (str) {
  const combinations = new Map(),
    stack = [];
  combinations.set('{', '}').set('[', ']').set('(', ')');
  for (const braket of str) {
    if (combinations.has(braket)) stack.push(braket);
    else if (combinations.get(stack.pop()) !== braket) return false;
  }
  return !stack.length;
};

const s = '()[]{}';

console.log(isValid(s));
