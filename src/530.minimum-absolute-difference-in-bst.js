/*
 * @lc app=leetcode.cn id=530 lang=javascript
 * @lcpr version=30204
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  const res = []
  function traverse(root) {
    if (!root) return
    traverse(root.left)
    res.push(root.val)
    traverse(root.right)
  }
  traverse(root)
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < res.length; i++) {
    const val = res[i] - res[i - 1]
    min = min > val ? val : min
  }
  return min
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */

