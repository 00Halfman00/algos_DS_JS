"""
222. Count Complete Tree Nodes
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled
in a complete binary tree, and all nodes in the last level are as far left as possible.
It can have between 1 and 2h nodes inclusive at the last level h.
Design an algorithm that runs in less than O(n) time complexity.


Example 1:
Input: root = [1,2,3,4,5,6]
Output: 6


Example 2:
Input: root = []
Output: 0


Example 3:
Input: root = [1]
Output: 1

Constraints:
The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.


 CODE BELOW WAS WRITTEN TO PROVIDE TEST DATA FOR THE ALGO BELOW IT
"""


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Complete_BT:
    def __init__(self):
        self.root = None
        self.values = []

    def add_many(self, nums: list, idx=0):
        if len(nums):
            if not self.root:
                self.root = TreeNode(nums[0])
                self.values.append(nums[idx])
                idx += 1
            queue = [self.root]
            while len(queue) and idx < len(nums):
                tmp = queue.pop(0)
                if not tmp.left:
                    tmp.left = TreeNode(nums[idx])
                    self.values.append(nums[idx])
                    idx += 1
                if not tmp.right and idx < len(nums):
                    tmp.right = TreeNode(nums[idx])
                    self.values.append(nums[idx])
                    idx += 1

                if tmp.left:
                    queue.append(tmp.left)
                if tmp.right:
                    queue.append(tmp.right)


my_full_tree = Complete_BT()
my_full_tree.add_many([1, 2, 3, 4, 5, 6, 7, 8])

print("values: ", my_full_tree.values)


"""
BELOW IS ALGORITHM TO FIND THE COUNT OF ALL NODES IN A COMPLETE BINARY TREE
"""


###################################################################  challenge algo starts here
class Solution:
    def layersLeft(self, node):
        count = 0
        while node.left:
            count += 1
            node = node.left
        return count

    def layersRight(self, node):
        count = 0
        while node.right:
            count += 1
            node = node.right
        return count

    def exist(self, idx, depth, node):
        left, right, locateIdx = 0, 2**depth - 1, None
        for _ in range(depth):
            locateIdx = left + (right - left) // 2
            if idx <= locateIdx:
                node = node.left
                right = locateIdx
            else:
                node = node.right
                left = locateIdx + 1
        return node is not None

    def countNodes(self, root: TreeNode) -> int:
        """
        STAGE 1: GATHER NECESSARY DATA AND RETURN IF IT'S THE CASE
        DEPTH IS CALCULATED SAME AS INDEX: LAYER 1 = INDEX 0, LAYER 2 = INDEX 1, ETC...
        """
        if not root:
            return 0
        depthLeft = self.layersLeft(root)
        depthRight = self.layersRight(root)
        if depthLeft == 0:
            return 1
        if depthLeft == depthRight:
            return 2 ** (depthLeft + 1) - 1

        """
            STAGE 2: COMMENSE BINARY SEARCH
            LEFT IS INITIATED TO INDEX/VALUE 1 CAUSE YOU ALREADY KNOW THAT INDEX 0 EXIST
        """

        left, right, potentialNodes = 0, 2**depthLeft - 1, None
        while left <= right:
            potentialNodes = left + (right - left) // 2
            if self.exist(potentialNodes, depthLeft, root):
                left = potentialNodes + 1
            else:
                right = potentialNodes - 1
        return 2**depthLeft - 1 + left


omg_extra_steps = Solution()

print(
    "How many nodes does the complete tree have? ",
    omg_extra_steps.countNodes(my_full_tree.root),
)
