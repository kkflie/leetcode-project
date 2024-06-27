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
  // review
  const res = []
  let pre
  let maxCount = 0
  let count = 0
  function traverse(root) {
    if (!root) return
    traverse(root.left)
    if (!pre || pre.val !== root.val) {
      count = 1
    } else {
      count++
    }
    pre = root
    if (count === maxCount) {
      res.push(root.val)
    }
    if (count > maxCount) {
      maxCount = count
      res.length = 0
      res.push(root.val)
    }
    traverse(root.right)
  }
  traverse(root)
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

