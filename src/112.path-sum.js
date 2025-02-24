/*
 * @lc app=leetcode.cn id=112 lang=javascript
 * @lcpr version=30204
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  function getSum(root, sum) {
    if (!root) return false
    if (!root.left && !root.right) {
      return sum + root.val === targetSum
    }
    return getSum(root.left, sum + root.val) || getSum(root.right, sum + root.val)
  }

  return getSum(root, 0)
};
// @lc code=end



/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,null,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

