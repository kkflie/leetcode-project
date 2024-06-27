/*
 * @lc app=leetcode.cn id=513 lang=javascript
 * @lcpr version=30204
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  let res
  const queue = [root]
  while (queue.length) {
    res = queue[0].val
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,5,6,null,null,7]\n
// @lcpr case=end

 */

