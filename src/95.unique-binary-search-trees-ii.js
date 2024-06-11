/*
 * @lc app=leetcode.cn id=95 lang=javascript
 * @lcpr version=30203
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n < 1) {
    return []
  }
  return generateTreesFrom(1, n)
  function generateTreesFrom(start, end) {
    const allTrees = []
    if (start > end) {
      allTrees.push(null)
      return allTrees
    }
    for (let i = start; i <= end; i++) {
      const leftTrees = generateTreesFrom(start, i - 1)
      const rightTrees = generateTreesFrom(i + 1, end)
      for (let left of leftTrees) {
        for (let right of rightTrees) {
          const currTree = new TreeNode(i)
          currTree.left = left
          currTree.right = right 
          allTrees.push(currTree)
        }
      }
    }
    return allTrees
  }
};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

