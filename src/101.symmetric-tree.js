/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30204
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  // 递归
  // return compare(root.left, root.right)

  // function compare(left,right) {
  //   if (!left && !right) return true
  //   if (!left || !right || (left.val !== right.val)) return false
  //   return compare(left.left, right.right) && compare(left.right, right.left)
  // }

  // 迭代
  const arr = [root.left, root.right]
  while (arr.length) {
    const left = arr.pop()
    const right = arr.pop()
    if (!left && !right) continue
    if (!left || !right || (left.val !== right.val)) return false
    arr.push(left.left)
    arr.push(right.right)
    arr.push(left.right)
    arr.push(right.left)
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */

