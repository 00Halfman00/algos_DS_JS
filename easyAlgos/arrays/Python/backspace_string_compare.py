"""
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

"""


def backspaceCompare(s, t):
    return edit(s) == edit(t)


def edit(text):
    storage = []
    for _, char in enumerate(text):
        if char == "#":
            if len(storage):
                storage.pop()
        else:
            storage.append(char)
    return storage


text1 = "y#fo##f"
text2 = "y#f#o##f"

print(backspaceCompare(text1, text2))
