/*
 * @lc app=leetcode.cn id=968 lang=javascript
 * @lcpr version=30204
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
  let count = 0
  const res = traverse(root)
  if (res === 0) {
    count++
  }
  function traverse(root) {
    if (!root) return -1
    traverse(root.left)
    traverse(root.right)
    if (root.left && root.right) {
      if (root.left.val === 0 || root.right.val === 0) {
        root.val = 2
        count++
      } else if (root.left.val === 1 && root.right.val === 1){
      } else {
        root.val = 1
      }
    } else if (root.left) {
      if (root.left.val === 0) {
        root.val = 2
        count++
      } else if (root.left.val === 2) {
        root.val = 1
      }
    } else if (root.right) {
      if (root.right.val === 0) {
        root.val = 2
        count++
      } else if (root.right.val === 2) {
        root.val = 1
      }
    }
    // console.log(root.val)
    return root.val
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [0,0,null,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,null,0,null,0,null,null,0]\n
// @lcpr case=end

 */

