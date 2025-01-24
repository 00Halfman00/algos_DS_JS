/*

62. Unique Paths
Medium

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.



Example 1:
Input: m = 3, n = 7
(i.e., grid[m - 1][n - 1])
(i.e., grid[3 - 1][7 - 1])
(i.e., grid[2][6])
[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, R]
]
Output: 28


Example 2:
Input: m = 3, n = 2
(i.e., grid[m - 1][n - 1])
(i.e., grid[3 - 1][2 - 1])
(i.e., grid[2][1])
[
  [0, 0],
  [0, 0],
  [0, R]
]
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down



[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, R]
]

*/

// DFS from start to robot
const uniquePathsV1 = (m, n) => {
  let count = 0;
  const recurse = (row = 0, col = 0) => {
    if (row === m - 1 || col === n - 1) {
      ++count;
      return;
    }
    recurse(row + 1, col) + recurse(row, col + 1);
  };
  recurse();
  return count;
};

// DFS from robot to start
// using zero index to start instead of one, as if it was an array
const uniquePathsV2 = (m, n) => {
  let count = 0;
  const recurse = (row, col) => {
    if (row === 0 || col === 0) {
      ++count;
      return;
    }
    recurse(row - 1, col) + recurse(row, col - 1);
  };
  recurse(m - 1, n - 1);
  return count;
};

// // time complexity: O(m x n)
// dynamic approach, sensible
var uniquePathsV3 = function (m, n) {
  const d = [];
  const row = new Array(n).fill(1);
  for (let i = 0; i < m; ++i) {
    d.push([...row]);
  }
  for (let row = 1; row < m; ++row) {
    for (let col = 1; col < n; ++col) {
      d[row][col] = d[row - 1][col] + d[row][col - 1];
    }
  }
  return d[m - 1][n - 1];
};

// time complexity: O(m * n)
// memoization, weird but it might have some advantages
const uniquePathsV4 = (m, n, memo = {}) => {
  const key = `${m}-${n}`;

  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1;

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[key];
};

console.log(uniquePathsV3(3, 7));
console.log(uniquePathsV3(3, 2));
