/*
844. Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors.
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.



Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/

// time complexity: O(n)
const backspaceCompare = (first, second) => {
  const edit = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; ++i) {
      if (str[i] === '#') {
        stack.pop();
      } else stack.push(str[i]);
    }
    return stack.join('');
  };

  return edit(first) === edit(second);
};

console.log(backspaceCompare('ab#c', 'ad#c'));
