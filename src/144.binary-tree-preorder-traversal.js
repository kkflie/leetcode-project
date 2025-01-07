/*
 * @lc app=leetcode.cn id=144 lang=javascript
 * @lcpr version=30204
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  // 递归
  // function traversal(root) {
  //   if (!root) return
  //   res.push(root.val)
  //   traversal(root.left)
  //   traversal(root.right)
  // }

  // 迭代1
  function traversal(root) {
    if (!root) return
    const st = [root]
    while(st.length) {
      const node = st.pop()
      res.push(node.val)
      if (node.right) st.push(node.right)
      if (node.left) st.push(node.left)
    }
  }

  // 迭代2
  // function traversal(root) {
  //   if (!root) return
  //   const st = [root]
  //   while(st.length) {
  //     let node = st.pop()
  //     if (node) {
  //       if (node.right) st.push(node.right)
  //       if (node.left) st.push(node.left)
  //         st.push(node)
  //         st.push(null)
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
// [1,2,3,4,5,null,8,null,null,6,7,9]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

