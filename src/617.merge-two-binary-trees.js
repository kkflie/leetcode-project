/*
 * @lc app=leetcode.cn id=617 lang=javascript
 * @lcpr version=30204
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  // 递归
  // if (!root1) return root2
  // if (!root2) return root1
  // root1.val = root1.val + root2.val
  // root1.left = mergeTrees(root1.left, root2.left)
  // root1.right = mergeTrees(root1.right, root2.right)
  // return root1

  // 迭代
  if (!root1) return root2
  if (!root2) return root1
  const q = [root1, root2]
  while (q.length) {
    const n1 = q.shift()
    const n2 = q.shift()
    n1.val += n2.val
    if (n1.left && n2.left) {
      q.push(n1.left)
      q.push(n2.left)
    }
    if (n1.right && n2.right) {
      q.push(n1.right)
      q.push(n2.right)
    }
    if (!n1.left && n2.left) {
      n1.left = n2.left
    }
    if (!n1.right && n2.right) {
      n1.right = n2.right
    }
  }
  return root1
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,2,5]\n[2,1,3,null,4,null,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n[1,2]\n
// @lcpr case=end

 */

