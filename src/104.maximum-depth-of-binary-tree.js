/*
 * @lc app=leetcode.cn id=104 lang=javascript
 * @lcpr version=30204
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (!root) return 0
  // 递归
  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
  // 递归 前序遍历
  // let maxDepth = 1
  // getDepth(root, maxDepth)
  // return maxDepth
  // function getDepth(root, depth) {
  //   if (!root) return
  //   maxDepth = Math.max(maxDepth, depth)
  //   getDepth(root.left, depth + 1)
  //   getDepth(root.right, depth + 1)
  // }

  // 迭代
  // let maxDepth = 0
  // const q = [root]
  // while(q.length) {
  //   maxDepth++
  //   const len = q.length
  //   for (let i = 0; i < len; i++) {
  //     const node = q.shift()
  //     if (node.left) q.push(node.left)
  //     if (node.right) q.push(node.right)
  //   }
  // }
  // return maxDepth
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */

