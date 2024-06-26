/*
 * @lc app=leetcode.cn id=637 lang=javascript
 * @lcpr version=30204
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
  if (!root) return []
  const res = []
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    let ave = 0
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      ave += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ave /= len
    res.push(ave)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [3,9,20,15,7]\n
// @lcpr case=end

 */

