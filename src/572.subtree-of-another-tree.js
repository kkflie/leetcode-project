/*
 * @lc app=leetcode.cn id=572 lang=javascript
 * @lcpr version=30204
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  // review
  return postOrder(root, subRoot)
  function postOrder(root, subRoot) {
    if (!root) return false
    return isEqual(root, subRoot) ||
    postOrder(root.left, subRoot) ||
    postOrder(root.right, subRoot)
  }
  function isEqual(n1, n2) {
    if (!n1 && !n2) return true
    if (!n2 || !n1 || n1.val !== n2.val) return false
    return isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right)
  }
};
// @lc code=end



/*
// @lcpr case=start
// [3,4,5,1,2]\n[4,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\n
// @lcpr case=end

 */

