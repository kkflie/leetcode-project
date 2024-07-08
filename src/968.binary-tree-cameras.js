/*
 * @lc app=leetcode.cn id=968 lang=javascript
 * @lcpr version=30204
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
  // review
  let count = 0
  const res = traverse(root)
  if (res === 0) {
    count++
  }
  function traverse(root) {
    if (!root) return 1
    const left = traverse(root.left)
    const right = traverse(root.right)
    if (left === 0 || right === 0) {
      count++
      return 2
    } else if (left === 1 && right === 1){
      return 0
    } else {
      return 1
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [0,0,null,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,null,0,null,0,null,null,0]\n
// @lcpr case=end

 */

