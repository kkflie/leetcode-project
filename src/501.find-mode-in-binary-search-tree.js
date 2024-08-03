/*
 * @lc app=leetcode.cn id=501 lang=javascript
 * @lcpr version=30204
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
  // review
  const res = []
  let maxCount = 0
  let count = 0, pre, cur = root
  const st = []
  while(cur || st.length) {
    if (cur) {
      st.push(cur)
      cur = cur.left
    } else {
      cur = st.pop()
      // console.log(cur.val)
      if (!pre || pre.val !== cur.val) {
        count = 1
      } else {
        count++
      }
      pre = cur
      if (count === maxCount) {
        res.push(cur.val)
      }
      if (count > maxCount) {
        res.length = 0
        res.push(cur.val)
        maxCount = count
      }
      cur = cur.right
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

