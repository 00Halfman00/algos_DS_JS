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


def soft_colors1(nums):
    """
    initiate three variable to zero, each representing one of the three colors available
    loop over nums and add one to the respetcive variable that represents that color.
    Next, iterate over the same length a sencond time from zero to lenght of nums,
    replacing each element in the original list with
    time complexity: O(n)
    colors = [2, 2, 0, 1, 0, 1, 2]
    """
    red = white = blue = 0
    for num in nums:
        if num == 0:
            red += 1
        elif num == 1:
            white += 1
        else:
            blue += 1

    color = 0
    for i in range(red + white + blue):
        if i == red:
            color += 1
        if i == red + white:
            color += 1

        if color == 0:
            nums[i] = 0
        elif color == 1:
            nums[i] = 1
        else:
            nums[i] = 2


def soft_colors2(nums):
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
colors2 = [2, 2]

soft_colors1(colors2)
print(colors2)


# this approach would work if the items in the nums list where not a few known items, but a list with many different items in it
def soft_colors_bubble_sort(nums):
    """
    Do not return anything, modify nums in-place instead.
    When list is sorted, it will break and stoop looping and return early
    without having to iterate in O(n^2) time.
    """
    sorted = True
    for i in range(len(nums), -1, -1):
        sorted = True
        for j in range(0, i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
                sorted = False
        if sorted:
            break


# soft_colors_bubble_sort(colors)
# print(colors)
