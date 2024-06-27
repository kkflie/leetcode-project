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
  return traverse([], root)
  function traverse(line, root) {
    if (!root.left && !root.right) {
      return line.concat(root.val).reduce((a, b) => a + b, 0) === targetSum
    }
    if (root.right) {
      const res = traverse(line.concat(root.val), root.right)
      if (res) {
        return res
      }
    }
    if (root.left) {
      const res = traverse(line.concat(root.val), root.left)
      if (res) {
        return res
      }
    }
    return false
  }
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

