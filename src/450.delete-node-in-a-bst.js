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
  if (!root) return root
  // review
  let dummyNode = new TreeNode(root.val, root), pre = dummyNode
  traverse(root, key)
  function traverse(root, key) {
    if (!root) return
    if (root.val < key) {
      pre = root
      traverse(root.right, key)
      return
    }
    if (root.val > key) {
      pre = root
      traverse(root.left, key)
      return
    }
    if (!root.left && !root.right) {
      if (pre.val >= key) {
        pre.left = null
      } else {
        pre.right = null
      }
      return
    }
    if (!root.left) {
      if (key > pre.val) {
        pre.right = root.right
      } else {
        pre.left = root.right
      }
      return
    }
    if (!root.right) {
      if (key > pre.val) {
        pre.right = root.left
      } else {
        pre.left = root.left
      }
      return
    }
    if (key > pre.val) {
      pre.right = root.right
    } else {
      // console.log('pre', pre.val, root.val)
      pre.left = root.right
    }
    const left = root.left
    let cur = root.right
    while(cur) {
      pre = cur
      cur = cur.left
    }
    // console.log('pre-2', pre)
    pre.left = left
    return
    // console.log(root.val)
  }
  return dummyNode.left
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

