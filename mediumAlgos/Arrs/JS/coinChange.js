/*


You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0


Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104


*/

// var coinChange = function (coins, amount) {
//   let dp = new Array(amount + 1).fill(Infinity);
//   dp[0] = 0;

//   for (let i = 0; i < coins.length; i++) {
//     for (let j = coins[i]; j <= amount; j++) {
//       let coin = coins[i];
//       // quite the trick: to assign the
//       let numCoins = dp[j - coin] + 1;
//       dp[j] = Math.min(numCoins, dp[j]);
//     }
//   }

//   return dp[amount] === Infinity ? -1 : dp[amount];
// };

const coins = [1, 2, 5],
  amount = 11;

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let idx = 0; idx < coins.length; ++idx) {
    for (let currAmount = coins[idx]; currAmount <= amount; ++currAmount) {
      dp[currAmount] = Math.min(
        dp[currAmount - coins[idx]] + 1,
        dp[currAmount]
      );
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange(coins, amount));
