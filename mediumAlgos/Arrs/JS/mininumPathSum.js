/*
🧩 Problem: Minimum Path Sum

You are given a m x n grid filled with non-negative numbers.
Your task is to find a path from the top-left corner to the bottom-right corner
which minimizes the sum of all numbers along its path.

You can only move either down or right at any point in time.

Example:
Input: grid = [   [1,3,1],   [1,5,1],   [4,2,1] ]
Output: 7
Explanation: The path 1 → 3 → 1 → 1 → 1 minimizes the sum.

strategy:
1.  use dynamic programming to keep a hash table of the same size as 2D array.
2.  iterate over 2D array passed in with nested loops
3.  create recusive function to traverse 2D array


*/

const minimumPathSum = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(grid.length)
    .fill(null)
    .map(() => new Array(n).fill(null));
    
  dp[0][0] = grid[0][0];

  // Fill the first row
  for (let j = 1; j < n; ++j) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Fill the first column
  for (let i = 1; i < m; ++i) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minimumPathSum(grid1));
