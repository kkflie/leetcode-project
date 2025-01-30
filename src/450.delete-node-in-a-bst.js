/*
 * @lc app=leetcode.cn id=450 lang=javascript
 * @lcpr version=30204
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // 递归1
  // if (!root) return root
  // if (root.val < key) root.right = deleteNode(root.right, key)
  // else if (root.val > key) root.left = deleteNode(root.left, key)
  // else {
  //   if (!root.left && !root.right) return null 
  //   if (!root.left) {
  //     return root.right
  //   }
  //   if (!root.right) {
  //     return root.left
  //   } 
  //   let cur = root.right
  //   while (cur.left) {
  //     cur = cur.left
  //   }
  //   cur.left = root.left
  //   root = root.right
  //   return root
  // }
  // return root

  //递归2 非二叉搜索树
  // if (!root) return root
  // if (root.val === key) {
  //   if (!root.right) {
  //     return root.left
  //   }
  //   let cur = root.right
  //   while (cur.left) {
  //     cur = cur.left
  //   }
  //   const temp = root.val
  //   root.val = cur.val
  //   cur.val = temp
  // }
  // root.left = deleteNode(root.left, key)
  // root.right = deleteNode(root.right, key)
  // return root

  // 迭代
  function deleteOneNode(root) {
    if (!root) return root
    if (!root.right) return root.left
    let cur = root.right
    while (cur.left) cur = cur.left
    cur.left = root.left
    return root.right
  }

  if (!root) return root
  let cur = root, pre
  while (cur) {
    if (cur.val === key) break
    pre = cur
    if (cur.val > key) cur = cur.left
    else cur = cur.right
  }
  if (!pre) return deleteOneNode(cur)
  if (pre.left && pre.left.val === key) pre.left = deleteOneNode(pre.left)
  if (pre.right && pre.right.val === key) pre.right = deleteOneNode(pre.right)
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [5,3,6,2,4,null,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,7]\n0\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

