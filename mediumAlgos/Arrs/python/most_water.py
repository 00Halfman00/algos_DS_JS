"""
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines
drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container,
such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.


Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.


Example 2:
Input: height = [1,1]
Output: 1


Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
"""


def mas(inicio, fin, alto):
    return min(alto[inicio], alto[fin]) * (fin - inicio)


def maxArea(height: list[int]) -> int:
    start, end, vol = (
        0,
        len(height) - 1,
        0,
    )
    while start < end:
        if mas(start, end, height) > vol:
            vol = mas(start, end, height)
        if height[start] < height[end]:
            start += 1
        else:
            end -= 1
    return vol


water = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(maxArea(water))
