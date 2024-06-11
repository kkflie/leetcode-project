/*
 * @lc app=leetcode.cn id=100 lang=javascript
 * @lcpr version=30203
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const path1 = []
  const path2 = []
  traversal(p, path1)
  traversal(q, path2)
  // console.log('p', path1)
  // console.log('q', path2)
  return path1.every((e, i) => e === path2[i])
  function traversal(p, arr) {
    if (!p) {
      arr.push(null)
      return
    }
    arr.push(p.val)
    traversal(p.left, arr)
    traversal(p.right, arr)
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n[1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[1,null,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1]\n[1,1,2]\n
// @lcpr case=end

 */

