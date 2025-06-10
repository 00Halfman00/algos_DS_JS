"""
Frequency Counter - sameFrequency
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.


Your solution MUST have the following complexities:
Time: O(N)


Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

      THEORY & PSEUDOCODE
  Create hash map for the frequency count of each digit for both numbers.
  If both hash maps contain the same key:value pairs, they have the same frequency of digits

  1.  Check if both numbers do not have the same length
      return false
  2.  Declare and Initiate both hash maps (one for each argument/number), using Counter
  3.  return the equality of both hash maps

DIAGRAM/TEST RUN:

{'1': 1, '8':1, '2': 1} == {'2': 1, '8':1, '1': 1} == True

"""

from collections import Counter


def sameFrequency(num1: int, num2: int) -> bool:
    if len(str(num1)) != len(str(num2)):
        return False
    return Counter(str(num1)) == Counter(str(num2))


print(sameFrequency(182, 281))  # true
print(sameFrequency(34, 14))  # false
print(sameFrequency(3589578, 5879385))  # true
print(sameFrequency(22, 222))  # false
