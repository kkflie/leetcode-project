/*
 * @lc app=leetcode.cn id=111 lang=javascript
 * @lcpr version=30204
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  if (!root) return 0
  let n = 0
  const queue = [root]
  while(queue.length) {
    const len = queue.length
    n++
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (!node.left && !node.right) return n
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return n
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,null,3,null,4,null,5,null,6]\n
// @lcpr case=end

 */

