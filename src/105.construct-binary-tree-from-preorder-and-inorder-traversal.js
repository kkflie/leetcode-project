/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30204
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  const rootVal = preorder.shift()
  const idx = inorder.indexOf(rootVal)
  const root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(0, idx), inorder.slice(0, idx))
  root.right = buildTree(preorder.slice(idx), inorder.slice(idx + 1))
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

