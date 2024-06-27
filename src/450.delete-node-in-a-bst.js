/*
 * @lc app=leetcode.cn id=450 lang=javascript
 * @lcpr version=30204
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // review
  if (root === null) return null
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (root.left === null & root.right === null) return null
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    const minNode = getMinNode(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
    return root
  }
  function getMinNode(root) {
    while (root.left) {
      root = root.left
    }
    return root
  }
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [5,3,6,2,4,null,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,7]\n0\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

