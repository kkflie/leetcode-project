/*
 * @lc app=leetcode.cn id=968 lang=javascript
 * @lcpr version=30204
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
  // review
  let count = 0
  traverse(root)
  if (root.val === 0) count++
  function traverse(root) {
    if (!root || (!root.left && !root.right)) {
      return
    }
    traverse(root.left)
    traverse(root.right)
    if (
      (root.left && root.left.val === 0) ||
      (root.right && root.right.val === 0)
    ) {
      root.val = 1
      count++
      return
    }
    if (
      (root.left && root.left.val === 1) ||
      (root.right && root.right.val === 1)
    ) {
      root.val = 2
    }
    if (
      (root.left && root.left.val === 2) ||
      (root.right && root.right.val === 2)
    ) {
      return
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [0,0,null,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,null,0,null,0,null,null,0]\n
// @lcpr case=end

 */

