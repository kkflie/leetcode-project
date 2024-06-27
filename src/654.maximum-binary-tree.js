/*
 * @lc app=leetcode.cn id=654 lang=javascript
 * @lcpr version=30204
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null
  const rootVal = Math.max(...nums)
  const rootIdx = nums.indexOf(rootVal)
  const root = new TreeNode(rootVal)
  root.left = constructMaximumBinaryTree(nums.slice(0, rootIdx))
  root.right = constructMaximumBinaryTree(nums.slice(rootIdx + 1))
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,1,6,0,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

 */

