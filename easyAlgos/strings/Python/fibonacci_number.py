"""
509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).


Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.


Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.


Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


Constraints:

0 <= n <= 30
"""


def fibo_recurse_memo():
    """
    Returns a memoized recursive function for calculating Fibonacci numbers
    """
    memo = {}

    def fibo(n: int) -> int:
        """
        Takes an integer 'n' as input and returns the nth Fibonacci number.
        It utilizes a closure to maintain a private 'memo'dictionary,
        which stores previously computed Fibonacci numbers to avoid
        redundant calculations.
        """
        if n in memo:
            return memo[n]
        if n <= 1:
            return n
        two_back = fibo(n - 2)
        one_back = fibo(n - 1)
        memo[n] = two_back + one_back
        return memo[n]

    return fibo


def fibo_recurse_dp():
    """
    Returns a dynamic programming recursive function for calculating Fibonacci numbers
    """
    dp = [-1] * 35
    dp[0] = 0
    dp[1] = 1

    def fibo(n: int) -> int:
        """
        Takes an integer 'n' as input and returns the nth Fibonacci number.
        It utilizes a closure to maintain a private 'memo'dictionary,
        which stores previously computed Fibonacci numbers to avoid
        redundant calculations.
        """
        if n in dp and dp[n] != -1:
            return dp[n]
        two_back = fibo(n - 2)
        one_back = fibo(n - 1)
        if one_back >= 0 and two_back >= 0:
            dp[n] = two_back + one_back
        return dp[n]

    return fibo


fib_rec = fibo_recurse_dp()

# fib_rec(2)
print(fib_rec(9))


def fibo_iterate_memo():
    """
    Returns a memoized iterative function for calculating Fibonacci numbers
    """
    memo = {}

    def fibo(n: int) -> int:
        """
        Takes an integer 'n' as input and returns the nth Fibonacci number.
        It utilizes a closure to maintain a private 'memo'dictionary,
        which stores previously computed Fibonacci numbers to avoid
        redundant calculations.
        """
        if n in memo:
            return memo[n]
        if n <= 1:
            return n
        two_back, one_back, curr = 0, 1, None
        for i in range(2, n + 1):
            curr = two_back + one_back
            memo[i] = curr
            two_back = one_back
            one_back = curr
        return curr

    return fibo


fib_iter_memo = fibo_iterate_memo()

fib_iter_memo(2)
fib_iter_memo(5)


def fibo_iterate_dp():
    """
    Returns a dynamic programming iterative function for calculating Fibonacci numbers
    """
    dp = [0, 1]

    def fibo(n: int) -> int:
        """
        Takes an integer 'n' as input and returns the nth Fibonacci number.
        It utilizes a closure to maintain a private 'memo'dictionary,
        which stores previously computed Fibonacci numbers to avoid
        redundant calculations.
        """
        if n in dp:
            return dp[n]
        curr = 0
        for i in range(2, n + 1):
            curr = dp[i - 2] + dp[i - 1]
            dp.append(curr)
        return curr

    return fibo


fib_iter_dp = fibo_iterate_dp()

fib_iter_dp(2)
fib_iter_dp(5)
