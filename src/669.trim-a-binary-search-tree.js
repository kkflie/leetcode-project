/*
 * @lc app=leetcode.cn id=669 lang=javascript
 * @lcpr version=30204
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  // review
  if (root === null) return null
  while (root !== null && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right
    } else {
      root = root.left
    }
  }
  let cur = root
  while(cur) {
    while(cur.left && cur.left.val < low) {
      cur.left = cur.left.right
    }
    cur = cur.left
  }
  cur = root
  while(cur) {
    while(cur.right && cur.right.val > high) {
      cur.right = cur.right.left
    }
    cur = cur.right
  }
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,2]\n1\n2\n
// @lcpr case=end

// @lcpr case=start
// [3,0,4,null,2,null,null,1]\n1\n3\n
// @lcpr case=end

 */

