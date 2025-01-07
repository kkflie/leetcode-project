/*
 * @lc app=leetcode.cn id=94 lang=javascript
 * @lcpr version=30204
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  // 递归
  // function traversal(root) {
  //   if (!root) return
  //   traversal(root.left)
  //   res.push(root.val)
  //   traversal(root.right)
  // } 

  // 迭代1
  // function traversal(root) {
  //   if (!root) return
  //   const st = []
  //   let cur = root
  //   while(cur || st.length) {
  //     if (cur) {
  //       st.push(cur)
  //       cur = cur.left
  //     } else {
  //       cur = st.pop()
  //       res.push(cur.val)
  //       cur = cur.right
  //     }
  //   }
  // }

  // 迭代2
  // function traversal(root) {
  //   if (!root) return
  //   const st = [root]
  //   while(st.length) {
  //     let node = st.pop()
  //     if (node) {
  //       if (node.right) st.push(node.right)
  //       st.push(node)
  //       st.push(null)
  //       if (node.left) st.push(node.left)
  //     } else {
  //       node = st.pop()
  //       res.push(node.val)
  //     }
  //   }
  // }
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
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

