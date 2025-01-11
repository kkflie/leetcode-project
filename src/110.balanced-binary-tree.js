/*
 * @lc app=leetcode.cn id=110 lang=javascript
 * @lcpr version=30204
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 递归
  if (!root) return true
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
  function getHeight(root) {
    if (!root) return 0
    return 1 + Math.max(getHeight(root.left), getHeight(root.right))
  }
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,3,3,null,null,4,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

