/*
 * @lc app=leetcode.cn id=572 lang=javascript
 * @lcpr version=30204
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  function compare(p, q) {
    if (!p && !q) return true
    if (!p || !q || (p.val !== q.val)) return false
    return compare(p.left, q.left) && compare(p.right, q.right)
  }

  // 递归
  // if (!root && !subRoot) return true
  // if (!root) return false
  // return compare(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  // 迭代
  if (!root && !subRoot) return true
  const st = [root]
  while(st.length) {
    const p = st.pop()
    if (compare(p, subRoot)) return true 
    if (!p) continue
    st.push(p.left)
    st.push(p.right)
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [3,4,5,1,2]\n[4,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\n
// @lcpr case=end

 */

