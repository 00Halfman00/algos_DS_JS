const TreeNode = function (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

var allPossibleFBT = function (n) {
  if (!(n % 2)) return [];
  const memo = {};

  const recurse = (n) => {
    if (n === 1) return [new TreeNode()];
    if (memo[n]) return memo[n];

    const res = [];
    for (let i = 1; i < n; i += 2) {
      const left = recurse(i);
      const right = recurse(n - i - 1);

      for (l of left) {
        for (r of right) {
          const node = new TreeNode(0, l, r);
          res[res.length] = node;
        }
      }
    }
    memo[n] = res;
    return res;
  };

  return recurse(n);
};

console.log(allPossibleFBT(7));
