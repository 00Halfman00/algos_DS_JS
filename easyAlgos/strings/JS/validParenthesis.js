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
// time complexity: O(n)
const isValid = function (str) {
  const pairs = new Map(),
    stack = [];
  pairs.set('{', '}').set('[', ']').set('(', ')');
  for (const braket of str) {
    if (pairs.has(braket)) stack.push(braket);
    else if (pairs.get(stack[stack.length - 1]) === braket) stack.pop();
    else return false;
  }
  return !stack.length;
};

var isValidV2 = function (str) {
  const stack = [];
  for (const braket of str) {
    switch (braket) {
      case '(': {
        stack.push(')');
        continue;
      }
      case '{': {
        stack.push('}');
        continue;
      }
      case '[': {
        stack.push(']');
        continue;
      }
      default:
        if (braket !== stack.pop()) {
          return false;
        }
    }
  }
  return !stack.length;
};

const s = ')([])';

console.log(isValid(s));
console.log(isValidV2(s));
/*
  time complexity: O(n)
                                STEPS
  DATA STRUCTURES
  1.  create a hash map of left parenthesis as key and right parenthesis as value
  2.  create a stack
  3.  loop over the string from left to right
  4.  check if parenthesis is a key in the hash map, which would be a left parenthesis
      - push the parenthesis onto the stack
  5.  else if the hash map at the popped parenthesis does not equal the current parenthesis in the loop
      - return false
  6.  after loop return truthy of the length of stack; that is, empty true or not empty false

*/
