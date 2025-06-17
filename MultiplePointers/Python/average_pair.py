"""
Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a
target average, determine if there is a pair of values in the array where
the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)


Sample Input:
averagePair([1,2,3],2.5) # true
averagePair([1,3,3,5,6,7,10,12,19],8) # true
averagePair([-1,0,3,4,5,6], 4.1) # false
averagePair([],4) # false


THEORY, STRATEGY AND PSEUDOCODE


STRATEGY
  Since the array is already sorted, perform a sliding window search with two pointers,
  adding them, getting their average, seeing if the average equates to the target
  and moving either pointer depending on if the average is larger or smaller.


PSEUDO STEPS
1   Grab first and last elements in array, call them left and right
2   Iterate while left does not equal right
    2.1   Do the math to get average
    2.2   Adjust pointers
"""


def average_pair(nums: list[int], target: int) -> int:
    if len(nums) > 1:
        left, right = 0, len(nums) - 1

        while left <= right:
            average = (nums[left] + nums[right]) / 2
            if average == target:
                return True

            if average > target:
                right -= 1
            else:
                left += 1

    return False


print(average_pair([1, 2, 3], 2.5))  # true
print(average_pair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))  # true
print(average_pair([-1, 0, 3, 4, 5, 6], 4.1))  # false
print(average_pair([], 4))  # false
