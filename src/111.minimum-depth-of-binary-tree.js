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
  // 递归
  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)
  if (!root.left) {
    return 1 + rightDepth
  }
  if (!root.right) {
    return 1 + leftDepth
  }
  return 1 + Math.min(leftDepth, rightDepth)

  // 迭代
  // const q = [root]
  // let depth = 0
  // while(q.length) {
  //   depth++
  //   const len = q.length
  //   for (let i = 0; i < len; i++) {
  //     const p = q.shift()
  //     if (!p.left && !p.right) return depth
  //     if (p.left) q.push(p.left) 
  //     if (p.right) q.push(p.right) 
  //   }
  // }
  // return 1
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

