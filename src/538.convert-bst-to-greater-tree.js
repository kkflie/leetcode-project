/*
 * @lc app=leetcode.cn id=538 lang=javascript
 * @lcpr version=30204
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST = function(root) {
  // review
  let pre = 0
  function reverseInOrder(cur) {
    if (cur) {
      reverseInOrder(cur.right)
      cur.val += pre
      pre = cur.val
      reverseInOrder(cur.left)
    }
  }
  reverseInOrder(root)
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [0,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4,1]\n
// @lcpr case=end

 */

