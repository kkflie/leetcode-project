/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30204
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  const res = []
  function traversal(root) {
    if (!root) return
    traversal(root.left)
    res.push(root.val)
    traversal(root.right)
  }
  traversal(root)
  for (let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) return false
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */

