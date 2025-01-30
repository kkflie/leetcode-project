/*
 * @lc app=leetcode.cn id=501 lang=javascript
 * @lcpr version=30204
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
  const res = []
  let maxCount = 0
  let count = 0
  let pre
  function traversal(root) {
    if (!root) return
    traversal(root.left)
    if (!pre) {
      count++
      maxCount = count
    } else if (pre.val === root.val) {
      count++
      if (count > maxCount) {
        res.length = 0
        maxCount = count
      }
    } else {
      count = 1
    }
    if (count >= maxCount) res.push(root.val)
    pre = root
    traversal(root.right)
  }
  traversal(root)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

