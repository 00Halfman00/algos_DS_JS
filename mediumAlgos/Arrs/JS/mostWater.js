/*
11. Container With Most Water

You are given an integer array height of length n.
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
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

*/

// time complexity O(N)
const water = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// var maxArea = function (height) {
//   let max = 0,
//     i = 0,
//     j = height.length - 1,
//     area;
//   // loop until you bump into i and j bump into each other
//   while (i < j) {
//     // find the smallest of the two values and multiply that time the width between them to get area
//     area = (height[i] < height[j] ? height[i] : height[j]) * (j - i);
//     // if the area is greater than max, asign that area to max
//     max = max >= area ? max : area;
//     // move the smallest value/wall one step forward
//     height[i] < height[j] ? i++ : j--;
//   }

//   return max;
// };

var maxArea = function (height) {
  let j = height.length - 1,
    max = 0,
    area,
    vertical;
  for (let i = 0; i < j; ) {
    vertical = height[i] < height[j] ? height[i] : height[j];
    area = vertical * (j - i);
    max = area > max ? area : max;
    height[i] < height[j] ? ++i : --j;
  }
  return max;
};

console.log(maxArea(water));
