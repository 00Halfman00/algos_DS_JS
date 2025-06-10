/*
50. Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Constraints:
-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104
*/

var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2) return x * myPow(x, n - 1);
  else {
    let halfPow = myPow(x, Math.floor(n / 2));
    return halfPow * halfPow;
  }
};

const x1 = 2.0,
  n1 = 10;
console.log(myPow(x1, n1)); // 1024.00000

const x2 = 2.1,
  n2 = 3;
console.log(myPow(x2, n2)); // 9.26100

const x3 = 2.0,
  n3 = -2;
console.log(myPow(x3, n3)); // 0.25000
