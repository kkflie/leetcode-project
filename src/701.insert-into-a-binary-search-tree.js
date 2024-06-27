/*
 * @lc app=leetcode.cn id=701 lang=javascript
 * @lcpr version=30204
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (root === null) return new TreeNode(val)
  function traverse(root, val) {
    if (root === null) return root
    if (root.val < val) {
      if (root.right === null) {
        root.right = new TreeNode(val)
      } else {
        root.right = traverse(root.right, val)
      }
    } else {
      if (root.left === null) {
        root.left = new TreeNode(val)
      } else {
        root.left = traverse(root.left, val)
      }
    }
    return root
  }
  traverse(root, val)
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,7,1,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [40,20,60,10,30,50,70]\n25\n
// @lcpr case=end

// @lcpr case=start
// [4,2,7,1,3,null,null,null,null,null,null]\n5\n
// @lcpr case=end

 */

