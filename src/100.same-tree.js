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
  // 递归
  // return compare(p, q)
  // function compare(p, q) {
  //   if (!p && !q) return true
  //   if (!p || !q || (p.val !== q.val)) return false
  //   return compare(p.left, q.left) && compare(p.right, q.right)
  // }

  // 迭代
  const st = [p, q]
  while(st.length) {
    p = st.pop()
    q = st.pop()
    if (!p && !q) continue
    if (!p || !q || (p.val !== q.val)) return false
    st.push(p.left)
    st.push(q.left)
    st.push(p.right)
    st.push(q.right)
  }
  return true
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

