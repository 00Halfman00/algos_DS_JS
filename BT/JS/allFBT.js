const TreeNode = function (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

var allPossibleFBTMemo = function (n) {
  if (!(n % 2)) return []; // must be odd number to qualify as full tree or does it?
  const memo = {};

  const recurse = (n) => {
    if (n === 1) return [new TreeNode()];
    if (memo[n]) return memo[n];

    // the tricky part about the way this algorithm works is that as i increases left will get bigger while right will get smaller
    // thus you have the swtich where left has more nodes and right will have less
    // but at the start left will be small containing a node with no children
    // as i gets larger the opposite is true wh
    const res = [];
    for (let i = 1; i < n; i += 2) {
      const left = recurse(i);
      const right = recurse(n - i - 1);

      for (let l of left) {
        for (let r of right) {
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



// const allPossibleFBTDP = (n) => {
//   if(!(n%2)) return [];

//   const recurse = (n) => {
//     if(n === 1) return [new TreeNode()];

//     const res = [];
//     for(let i = 1; i < n; i += 2){
//       const leftNodes = recurse(i);
//       const rightNodes = recurse(n - i - 1);

//       for(left in leftNodes){
//         for(right in rightNodes){
//           res[res.length] = new TreeNode( 0 , left, right);
//         }
//       }
//     }
//     return res;
//   }
//   return recurse(n);
// }

console.log(allPossibleFBTMemo(7));
// allPossibleFBTDP(7);
