def max_profit(prices: list[int]) -> int:
    max_gain = 0  # time complexity: O(1)
    if len(prices):  # time complexity: O(1)
        min_price = prices[0]  # time complexity: O(1)
        for _, stock_price in enumerate(prices, 1):  # time complexity: O(n)
            if stock_price < min_price:  # time complexity: O(1)
                min_price = stock_price  # time complexity: O(1)
            elif (stock_price - min_price) > max_gain:  # time complexity: O(1)
                max_gain = stock_price - min_price  # time complexity: O(1)
    return max_gain  # time complexity: O(1)


# time complexity: O(n)
# space complexity: O(1)

# Example Usage:
prices1 = [7, 1, 5, 3, 6, 4]
print(max_profit(prices1))  # Output: 5

prices2 = [7, 6, 4, 3, 1]
print(max_profit(prices2))  # Output: 0

prices3 = [2, 4, 1, 6]
print(max_profit(prices3))  # Output 5

prices4 = []
print(max_profit(prices4))  # output 0
