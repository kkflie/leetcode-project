/*
 * @lc app=leetcode.cn id=257 lang=javascript
 * @lcpr version=30204
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = []

  function backTrack(root, path) {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      res.push(path.concat(root.val).join('->'))
      return
    }
    backTrack(root.left, path.concat(root.val))
    backTrack(root.right, path.concat(root.val))
  }

  backTrack(root, [])
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

