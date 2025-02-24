/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=30204
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null
  const rootVal = postorder.pop()
  const root = new TreeNode(rootVal)
  const idx = inorder.findIndex((e) => e === rootVal)
  root.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx))
  root.right = buildTree(inorder.slice(idx + 1), postorder.slice(idx))
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

