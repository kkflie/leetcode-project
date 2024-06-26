/*
 * @lc app=leetcode.cn id=515 lang=javascript
 * @lcpr version=30204
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  if (!root) return []
  const res = []
  const queue = [root]
  while(queue.length) {
    const len = queue.length
    let max = 0 - Number.MAX_VALUE
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      max = max < node.val ? node.val : max
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(max)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,2,5,3,null,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

