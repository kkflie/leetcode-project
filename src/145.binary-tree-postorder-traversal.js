/*
 * @lc app=leetcode.cn id=145 lang=javascript
 * @lcpr version=30204
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  // 递归
  //  function traversal(root) {
  //   if (!root) return
  //   traversal(root.left)
  //   traversal(root.right)
  //   res.push(root.val)
  //  } 

  // 迭代1
  // function traversal(root) {
  //   const st = [root]
  //   while (st.length) {
  //     const node = st.pop()
  //     if (!node) {
  //       continue
  //     }
  //     res.push(node.val)
  //     st.push(node.left)
  //     st.push(node.right)
  //   }
  //   res.reverse()
  // }

  // 迭代2
  function traversal(root) {
    if (!root) return
    const st = [root]
    while (st.length) {
      let node = st.pop()
      if (node) {
        st.push(node)
        st.push(null)
        if (node.right) st.push(node.right)
        if (node.left) st.push(node.left)
      } else {
        node = st.pop()
        res.push(node.val)
      }
    }
  }
  
  const res = []
  traversal(root)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,null,8,null,null,6,7,9]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

