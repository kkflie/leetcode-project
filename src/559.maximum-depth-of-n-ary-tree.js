/*
 * @lc app=leetcode.cn id=559 lang=javascript
 * @lcpr version=30204
 *
 * [559] N 叉树的最大深度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0  
  if (!root.children || !root.children.length) return 1
  return 1 + Math.max(...root.children.map(maxDepth))
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,3,2,4,null,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n
// @lcpr case=end

 */

