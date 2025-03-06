"""
🧑‍💻 Challenge:
Write a function that takes a string and returns the first non-repeating character. If all characters repeat, return None.

💡 Example:

pythonCopyEditfirst_unique_char("leetcode")  # Output: 'l'
first_unique_char("aabbcc")    # Output: None
first_unique_char("swiss")     # Output: 'w'

"""

from collections import Counter  # to use Counter, import it


def first_unique_char(s: str):
    char_map = Counter(s)  # time complexity: O(n)
    for _, char in enumerate(s):  # time complexity: O(n)
        if char_map.get(char) == 1:  # time complexity: O(1)
            return char
    return None


"""
Conclusion

  - PEP 8 is the official style guide for Python code. It recommends using snake_case for variable names.

charMap = Counter(s)
  - It makes the code more readable and less prone to errors.
  - Counter is implemented in C, making it significantly faster than manually counting characters using a Python dictionary.
  - It's designed specifically for counting hashable objects, so it leverages optimized data structures and algorithms for this task.

for _, char in enumerate(s):
  - Like many built-in functions, enumerate is implemented in C, which provides a performance boost.
  - The underlying iteration mechanisms in Python are highly optimized, and enumerate leverages these.
  -  By using the underscore, the code clearly shows that the index provided by enumerate is not used, improving readability.

charMap.get(char)
  - Using .get() avoids potential KeyError exceptions, making your code more robust.
  - Using .get() can improve readability by clearly showing that the code is accessing a dictionary value and is a good habit to get into.
"""


print(first_unique_char("leetcode"))  # Output: 'l'
print(first_unique_char("aabbcc"))  # Output: None
print(first_unique_char("swiss"))  # Output: 'w'
