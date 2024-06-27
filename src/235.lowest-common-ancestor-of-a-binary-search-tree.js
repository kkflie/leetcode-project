/*
 * @lc app=leetcode.cn id=235 lang=javascript
 * @lcpr version=30204
 *
 * [235] 二叉搜索树的最近公共祖先
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  function traverse(root, p, q) {
    if (root === null || root === p || root === q) return root
    if (p.val < root.val && q.val > root.val) return root
    if (q.val < root.val && p.val > root.val) return root
    if (p.val < root.val && q.val < root.val) return traverse(root.left, p, q)
    if (p.val > root.val && q.val > root.val) return traverse(root.right, p, q)
  }
  return traverse(root, p, q)
};
// @lc code=end



/*
// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\n
// @lcpr case=end

// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\n
// @lcpr case=end

 */

