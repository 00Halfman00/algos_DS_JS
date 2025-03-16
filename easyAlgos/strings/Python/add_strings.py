"""
415. Add Strings

Given two non-negative integers, num1 and num2 represented as strings,
return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large
integers (such as BigInteger). You must also not convert the inputs to integers directly.



Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"


Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"


Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"


Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
"""

"""
steps:
  1.  create variables to manipulate
  2.  loop while length of variables are equal to or greater than zero
      3.  add the unit digit to a sum variable
      4.  do the math
  5.  return the result string
"""


# add two non-negative integers strings
def addStrings(num1: str, num2: str) -> str:
    num1Len = len(num1) - 1
    num2Len = len(num2) - 1
    carry, result = 0, ""

    while num1Len > -0 or num2Len >= 0 or carry > 0:
        if num1Len >= 0:
            carry += ord(num1[num1Len]) - 48
        if num2Len >= 0:
            carry += ord(num2[num2Len]) - 48

        result = str(carry % 10) + result
        carry = carry // 10

        num1Len -= 1
        num2Len -= 1

    return result


print(addStrings("11", "123"))  # 134
print(addStrings("542", "134"))  # 676
print(addStrings("0", "0"))  # 0


"""
steps:
  1.  find the len of the longest string
  2.  create variables to manipulate
  3.  loop while longest len is greater than or equal to zero or carry is greater than zero
      4.  loop over the list of string numbers
          5.  add the unit digit to a sum variable
          6.  do the math
  7.  return the result string
"""


# add many non-negative integers strings
def addManyStrings(digits: list[str]) -> str:
    max_len = max(map(len, digits))
    i = max_len - 1
    carry, sum, result = 0, 0, ""

    while i >= 0 or carry > 0:
        sum = carry

        for j, num in enumerate(digits):
            index = len(num) - 1 - (max_len - 1 - i)
            if index >= 0:
                sum += ord(num[index]) - 48

        result = str(sum % 10) + result
        carry = sum // 10
        i -= 1

    return result


nums = ["11", "123", "542", "134"]
print(addManyStrings(nums))  # 810
