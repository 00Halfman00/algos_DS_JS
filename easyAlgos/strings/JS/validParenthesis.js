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
  const stack = []; // time complexity: O(1)
  for (const braket of str) {
    // time complexity: O(n)
    if (braket === '(') stack.push(')'); // time complexity: O(1)
    else if (braket === '{') stack.push('}'); // time complexity: O(1)
    else if (braket === '[') stack.push(']'); // time complexity: O(1)
    else if (braket !== stack.pop()) return false; // time complexity: O(1)
  }
  return !stack.length; // time complexity: O(1)
};

// time complexity: O(n)
// space complexity: O(n)

const s = ')([])';

console.log(isValid(s));
console.log(isValidV2(s));

/*
Both isValid and isValidV2 have the same asymptotic time and space complexities,
but isValidV2 is likely to be slightly faster and more efficient in practice.

Here's a breakdown:

Similarities:

Time Complexity: Both are O(n), as they iterate through the input string once.
Space Complexity: Both are O(n), due to the potential growth of the stack.


Differences and Efficiency:

1.  isValid (Using Map for Pairs):

  Uses a Map to store bracket pairs.
  Requires pairs.has(braket) and pairs.get(stack[stack.length - 1]) for lookups.
  Map lookups, while generally fast, have some overhead compared to direct comparisons.

2.  isValidV2 (Direct Comparisons):

  Uses direct if/else if comparisons for bracket types.
  Avoids the overhead of Map lookups.


Why isValidV2 Is Likely Faster:

Reduced Overhead: Direct comparisons are generally faster than Map lookups.
Simpler Logic: The if/else if structure is more straightforward and might allow
JavaScript engines to perform better optimizations.


In Practice:

The performance difference might be subtle, especially for small input strings.
However, for larger inputs or in performance-critical scenarios, isValidV2 is likely to be slightly more efficient.


In summary:

While both versions are functionally equivalent and have the same time and space complexities,
isValidV2 is likely to be faster due to its reduced overhead from avoiding Map lookups.
Direct comparisons are usually faster than map lookups.
*/
