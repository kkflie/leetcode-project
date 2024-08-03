/*
 * @lc app=leetcode.cn id=669 lang=javascript
 * @lcpr version=30204
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  // review
  if (!root) return null
  if (root.val < low) {
    pre = root
    return trimBST(root.right, low, high)
  }
  if (root.val > high) {
    pre = root
    return trimBST(root.left, low, high)
  }
  root.left = trimBST(root.left, low, high) 
  root.right = trimBST(root.right, low, high) 
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,2]\n1\n2\n
// @lcpr case=end

// @lcpr case=start
// [3,0,4,null,2,null,null,1]\n1\n3\n
// @lcpr case=end

 */

