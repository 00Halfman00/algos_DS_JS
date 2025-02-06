def coin_change(coins, amount):
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0
    for _, coin in enumerate(coins):
        for currentAmount in range(coin, amount + 1):
            dp[currentAmount] = min(dp[currentAmount - coin] + 1, dp[currentAmount])
    return -1 if dp[amount] == float("inf") else dp[amount]


print(coin_change([1, 2, 5], 11))
