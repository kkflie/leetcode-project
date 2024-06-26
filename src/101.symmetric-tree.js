/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30204
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if (!root) return true
  const que = [root.left, root.right]
  while(que.length) {
    const left = que.shift()
    const right = que.shift()
    if (!left && !right) {
      continue
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }
    que.push(left.left)
    que.push(right.right)
    que.push(left.right)
    que.push(right.left)
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */

