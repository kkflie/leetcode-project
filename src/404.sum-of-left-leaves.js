/*
 * @lc app=leetcode.cn id=404 lang=javascript
 * @lcpr version=30204
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  if (!root) return 0
  let res = 0
  function traverse(root) {
    root.right && traverse(root.right)
    if (root.left && !root.left.left && !root.left.right) {
      res += root.left.val
      return
    }
    root.left && traverse(root.left)
  }
  traverse(root)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

