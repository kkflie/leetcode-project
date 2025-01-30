/*
 * @lc app=leetcode.cn id=530 lang=javascript
 * @lcpr version=30204
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
  let diff = Number.MAX_SAFE_INTEGER
  let pre = null
  traversal(root)
  function traversal(root) {
    if (!root) return
    traversal(root.left)
    if (pre) {
      diff = Math.min(diff, root.val - pre.val)
    }
    pre = root
    traversal(root.right)
  }
  return diff
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */

