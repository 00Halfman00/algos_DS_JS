const memoize = (fn) => {
  const cache = new Map();
  return (arg) => {
    if (cache.has(arg)) return cache.get(arg);
    else {
      const res = fn(arg);
      cache.set(arg, res);
      return res;
    }
  };
};

const fiboNum = (n) => {
  if (n <= 1) return n;
  let oneBack = 0,
    twoBack = 1,
    curr = null;
  for (let i = 1; i <= n; ++i) {
    curr = twoBack + oneBack;
    twoBack = oneBack;
    oneBack = curr;
  }
  return curr;
};

// var fib = function (n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n == 0) return 0;
//   if (n == 1) return 1;

//   memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
//   return memo[n];
// };

const fibRecurse = (function () {
  const memo = {}; // This memo is only available within this closure
  return function (n) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    const twoBack = fibRecurse(n - 2);
    const oneBack = fibRecurse(n - 1);
    memo[n] = twoBack + oneBack;
    return memo[n];
  };
})();

console.log(fibRecurse(8)); // 21
console.log(fibRecurse(5)); // 5
console.log(fibRecurse(6)); // 8
console.log(fibRecurse(2)); // 1

const fiboIterate = (function () {
  const memo = {};
  return function (n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    let oneBack = 1,
      twoBack = 0,
      curr = null;
    for (let i = 2; i <= n; i++) {
      curr = twoBack + oneBack;
      twoBack = oneBack;
      oneBack = curr;
      memo[i] = curr; // Store results in memo
    }
    return curr;
  };
})();

console.log(fiboIterate(8)); // 21
console.log(fiboIterate(5)); // 5
console.log(fiboIterate(6)); // 8
console.log(fiboIterate(2)); // 1
