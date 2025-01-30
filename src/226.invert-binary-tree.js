/*
 * @lc app=leetcode.cn id=226 lang=javascript
 * @lcpr version=30204
 *
 * [226] 翻转二叉树
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
var invertTree = function(root) {
  // 递归
  // if (!root) return root
  // let left = root.left
  // root.left = invertTree(root.right)
  // root.right = invertTree(left)
  // return root

  // 迭代
  if (!root) return root
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    swap(node)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return root
  function swap(node) {
    const temp = node.right
    node.right = node.left
    node.left = temp
  }
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

