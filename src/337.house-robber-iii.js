/*
 * @lc app=leetcode.cn id=337 lang=javascript
 * @lcpr version=30204
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  // review
  const res = robTree(root)
  return Math.max(res[0], res[1])
  function robTree(root) {
    if (root === null) return [0, 0]
    const left = robTree(root.left)
    const right = robTree(root.right)
    const val1 = root.val + left[0] + right[0]
    const val0 = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    return [val0, val1]
  }
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3,null,3,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,3,null,1]\n
// @lcpr case=end

 */

