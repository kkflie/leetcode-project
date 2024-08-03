/*
 * @lc app=leetcode.cn id=129 lang=javascript
 * @lcpr version=30204
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  const path = []
  let res = []
  traverse(root)
  return res.reduce((a,b)=>a+b)
  function traverse(root) {
    if (!root) {
      return
    }
    path.push(root.val)
    traverse(root.left)
    traverse(root.right)
    if (!root.left && !root.right) {
      res.push(path.join('') - 0)
    }
    path.pop()
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,0,5,1]\n
// @lcpr case=end

 */

