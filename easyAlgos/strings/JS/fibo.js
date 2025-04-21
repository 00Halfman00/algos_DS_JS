const fibRecurse = (function () {
  const memo = {};
  return function (n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    const twoBack = fibRecurse(n - 2);
    const oneBack = fibRecurse(n - 1);
    memo[n] = twoBack + oneBack;
    return memo[n];
  };
  return fib;
})();

console.log(fibRecurse(8)); // 21
console.log(fibRecurse(5)); // 5
console.log(fibRecurse(6)); // 8
console.log(fibRecurse(2)); // 1

const fiboIterate = (function (n) {
  const memo = {};
  return (n) => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    let twoBack = 0,
      oneBack = 1,
      curr = null;
    for (let i = 2; i <= n; ++i) {
      curr = twoBack + oneBack;
      twoBack = oneBack;
      oneBack = curr;
      memo[i] = curr;
    }
    return curr;
  };
})();

console.log(fiboIterate(8)); // 21  // O(n)
console.log(fiboIterate(5)); // 5   // O(1)
console.log(fiboIterate(6)); // 8   // O(1)
console.log(fiboIterate(2)); // 1   // O(1)
