/*
 * @lc app=leetcode.cn id=222 lang=javascript
 * @lcpr version=30202
 *
 * [222] 完全二叉树的节点个数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) return 0
  let { left, right } = root
  let leftDepth = rightDepth = 0
  while (left) {
    leftDepth++
    left = left.left
  }
  while (right) {
    rightDepth++
    right = right.right
  }
  if (leftDepth === rightDepth) {
    return (2 << leftDepth) - 1
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

