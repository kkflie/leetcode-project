/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30204
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // review
  if (!root) return []
  const q = [root]
  const res = []
  while (q.length) {
    const n = q.length
    const path = []
    for (let i = 0; i < n; i++) {
      const node = q.shift()
      path.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    res.push(path)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

