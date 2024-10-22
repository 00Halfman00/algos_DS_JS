class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val,
    self.left = left,
    self.right = right


def allPFBTs(n: int):
  if n % 2 == 0:
    return []
  memo = {}

  def recurse(n: int):
    if n == 1:
      return [TreeNode()]
    if memo.get(n):
      return memo[n]

    res = []
    for i in range(1, n, 2):
      leftNodes = recurse(i)
      rightNodes = recurse(n-i-1)

      for left in leftNodes:
        for right in rightNodes:
          res.append(TreeNode(0, left, right))
    memo[n] = res
    return res

  return recurse(n)


print(len(allPFBTs(7)))





























"""
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def allPossibleFBT(n: int):
    if n % 2 == 0:
        return []
    memo = {}
    def recurse(n: int):
        if n == 1:
            return [ TreeNode() ]
        if memo.get(n):
            return memo[n]
        res = []
        for i in range(1, n, 2):
            left = recurse(i)
            right = recurse(n - i - 1)

            for l in left:
                for r in right:
                    res.append(TreeNode(0, l, r))
        memo[n] = res
        return res
    return recurse(n)


print(allPossibleFBT(7)[0].val)
"""
