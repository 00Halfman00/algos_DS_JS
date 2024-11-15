"""
75. Sort Colors

Given an array nums with n objects colored red, white, or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.



Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]


Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
"""



def soft_colors(nums):
  """
  1. create a new list with three zeros and traverse nums list
  2. at the negative index plus one of that num in nums, add one to its value for each accurance of the same number
  3. loop while the new list has a length that is greater than zero
  4. pop of the last element in new list
  5. loop from zero to the size of that number while replacing the elements in nums from start to end
  """

  rwb = [0, 0, 0]
  for num in nums:
      rwb[-(num + 1)] += 1
  key = 0
  idx = 0
  while len(rwb):
      int = rwb.pop()
      for i in range(int):
          nums[idx] = key
          idx += 1
      key += 1



colors = [2, 2, 0, 1, 0, 1, 2]

soft_colors(colors)

print(colors)
