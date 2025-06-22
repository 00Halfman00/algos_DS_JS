"""
Sliding Window - longest_substr

Write a function called longest_substr, which accepts a string and
returns the length of the longest substring with all distinct characters.

longest_substr('') // 0
longest_substr('rithmschool') // 7
longest_substr('thisisawesome') // 6
longest_substr('thecatinthehat') // 7
longest_substr('bbbbbb') // 1
longest_substr('longestsubstring') // 8
longest_substr('thisishowwedoit') // 6

Time Complexity - O(n)

THEORY
  A sliding windown reduces redundant computaions when dealing with contigous characters in a string.

STRATEGY
  Create a sliding window
  Outer loop with right pointer adding characters to string
  Conditionally move the left pointer forward to contract the window when a duplicate character is encountered.
  Calculate max window size

DIAGRAM
  longest_substr('rithmschool') // 7
  'rithmschool'       curr_str_map = { r: 0 }  max_len = 1
  'rithmschool'       curr_str_map = { r: 0, i: 1 } max_len = 2
  'rithmschool'       curr_str_map = { r: 0, i: 1, t: 2, h: 3 } max_len = 3
  'rithmschool'       curr_str_map = { r: 0, i: 1, t: 2, h: 3, m: 4 } max_len = 4
  'rithmschool'       curr_str_map = { r: 0, i: 1, t: 2, h: 3, m: 4, s: 5 } max_len = 5
  'rithmschool'       curr_str_map = { r: 0, i: 1, t: 2, h: 3, m: 4, s: 5 } max_len = 6
  'rithmschool'       curr_str_map = { r: 0, i: 1, t: 2, h: 3, m: 4, s: 5, c: 6 } max_len = 7
  'rithmschool'       curr_str_map = { r: 0, i: 1, t: 2, h: 3, m: 4, s: 5, c: 6 } here we encounter a character in dictionary
  so left pointer becomes 4


PSEUDOCODE
  1   If string is empty return 0
  2   Outer loop with right pointer for the length of the entire string
      2.1   check if current character is in dictionary
            2.1.1   move left pointer to the index after the first occurence/index
                    of the current character if greater than left pointer
      2.2   add current character to dictionary with the value of its index
      2.3   calculate length of substring by subtracting left from right pointer
            and see if its greater than existing max length
  return max substring length

"""


def longest_substr(text):
    if not text:
        return 0

    char_map = {}
    max_len = left_pointer = 0
    for right_pointer, char in enumerate(text):
        if char in char_map:
            left_pointer = max(left_pointer, char_map[char] + 1)
        char_map[char] = right_pointer
        max_len = max(max_len, (right_pointer - left_pointer) + 1)

    return max_len


print(longest_substr("rithmschool"))
