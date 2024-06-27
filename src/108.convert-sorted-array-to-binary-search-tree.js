/*
 * @lc app=leetcode.cn id=108 lang=javascript
 * @lcpr version=30204
 *
 * [108] 将有序数组转换为二叉搜索树
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
var sortedArrayToBST = function(nums) {
  // review
  function build(arr, left, right) {
    if (left > right) return null
    const mid = Math.floor(left + (right - left) / 2)
    const root = new TreeNode(nums[mid])
    root.left = build(arr, left, mid - 1)
    root.right = build(arr, mid + 1, right)
    return root
  }
  const root = build(nums, 0, nums.length - 1)
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3]\n
// @lcpr case=end

 */

