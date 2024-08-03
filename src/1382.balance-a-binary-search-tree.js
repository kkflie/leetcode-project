/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 * @lcpr version=30204
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  // review
  const path = []
  traverse(root)
  const newRoot = buildTree(path, 0, path.length - 1)
  return newRoot
  function buildTree(path, left, right) {
    if (left > right) return null
    const mid = left + ((right - left) >> 1)
    const root = new TreeNode(path[mid])
    root.left = buildTree(path, left, mid - 1)
    root.right = buildTree(path, mid + 1, right)
    return root
  }
  function traverse(root) {
    if (!root)return
    traverse(root.left)
    path.push(root.val)
    traverse(root.right)
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,2,null,3,null,4,null,null]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

 */

