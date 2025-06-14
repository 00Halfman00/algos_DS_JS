"""
/*
  Frequency Counter - sameFrequency
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.


Your solution MUST have the following complexities:
Time: O(N log N)


Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

  THEORY & PSEUDOCODE
  If one could sort the arrays, first, then a direct comparision can be made via a loop
  and two pointers: one pointer for the first number and a second for the second number.

  DIAGRAM/TEST RUN:

  {'1': 1, '8':1, '2': 1} == {'2': 1, '8':1, '1': 1} == True
*/
"""


def same_frequency(first: int, second: int) -> bool:
    one = list(str(first))
    two = list(str(second))
    if len(one) != len(two):
        return False
    one.sort()
    two.sort()
    for i in range(len(one)):
        if one[i] != two[i]:
            return False
    return True


print(same_frequency(182, 281))  # True
print(same_frequency(34, 14))  # False
print(same_frequency(3589578, 5879385))  # True
print(same_frequency(22, 222))  # False
